const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const User = require("../../module/authmodule/authmodule");
const imagekit = require("../../utils/imagekit.js");

const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  tls: { rejectUnauthorized: false },
});

const authCookieOptions = {
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  maxAge: 24 * 60 * 60 * 1000,
};

const publicUser = (user) => ({
  id: user._id,
  username: user.username,
  email: user.email,
  phone: user.phone || "",
  profilePhoto: user.profilePhoto || "",
});

const getUserFromCookie = async (req) => {
  const token = req.cookies?.auth_token;
  if (!token) return null;
  const { userId } = jwt.verify(token, process.env.JWT_SECRET || "mysecretkey");
  return User.findById(userId);
};

// REGISTER USER
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        ...publicUser(newUser),
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// LOGIN USER
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "mysecretkey",
      { expiresIn: "1d" },
    );

    res.cookie("auth_token", token, authCookieOptions);

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        ...publicUser(user),
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Return the user attached to the HttpOnly cookie.
const getCurrentUser = async (req, res) => {
  try {
    const token = req.cookies?.auth_token;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Not authenticated" });
    }

    const { userId } = jwt.verify(
      token,
      process.env.JWT_SECRET || "mysecretkey",
    );
    const user = await User.findById(userId).select(
      "_id username email phone profilePhoto",
    );
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      user: publicUser(user),
    });
  } catch {
    return res.status(401).json({ success: false, message: "Session expired" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const user = await getUserFromCookie(req);
    if (!user)
      return res
        .status(401)
        .json({ success: false, message: "Not authenticated" });

    const { username, email, phone } = req.body;
    if (!username?.trim() || !email?.trim()) {
      return res
        .status(400)
        .json({ success: false, message: "Name and email are required" });
    }

    const emailOwner = await User.findOne({
      email: email.trim().toLowerCase(),
      _id: { $ne: user._id },
    });
    if (emailOwner)
      return res
        .status(409)
        .json({ success: false, message: "Email already in use" });

    user.username = username.trim();
    user.email = email.trim().toLowerCase();
    user.phone = phone?.trim() || "";

    if (req.files?.profilePhoto) {
      const file = req.files.profilePhoto;
      const upload = await imagekit.upload({
        file: file.data,
        fileName: `profile-${user._id}-${Date.now()}-${file.name}`,
        folder: "/profilePhotos",
        useUniqueFileName: true,
      });
      user.profilePhoto = upload.url;
    }

    await user.save();
    return res.json({ success: true, user: publicUser(user) });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const changePassword = async (req, res) => {
  try {
    const user = await getUserFromCookie(req);
    if (!user)
      return res
        .status(401)
        .json({ success: false, message: "Not authenticated" });
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword || newPassword.length < 6) {
      return res
        .status(400)
        .json({
          success: false,
          message:
            "Current password and a new password of 6+ characters are required",
        });
    }
    if (!(await bcrypt.compare(currentPassword, user.password))) {
      return res
        .status(400)
        .json({ success: false, message: "Current password is incorrect" });
    }
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    return res.json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const email = req.body.email?.trim().toLowerCase();
    const user = email ? await User.findOne({ email }) : null;
    if (user) {
      const token = crypto.randomBytes(32).toString("hex");
      user.resetPasswordToken = token;
      user.resetPasswordExpires = new Date(Date.now() + 15 * 60 * 1000);
      await user.save();
      const resetUrl = `${process.env.CLIENT_URL || "http://localhost:5173"}/reset-password/${token}`;
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "Reset your Edu-Hawk password",
        text: `Reset your password using this link (valid for 15 minutes): ${resetUrl}`,
      });
    }
    return res.json({
      success: true,
      message: "If that email exists, a reset link has been sent",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Unable to send reset email" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const user = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: new Date() },
    });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Reset link is invalid or expired" });
    if (!req.body.password || req.body.password.length < 6) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Password must be at least 6 characters",
        });
    }
    user.password = await bcrypt.hash(req.body.password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    return res.json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("auth_token", authCookieOptions);
  return res
    .status(200)
    .json({ success: true, message: "Logged out successfully" });
};

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  updateProfile,
  changePassword,
  forgotPassword,
  resetPassword,
};
