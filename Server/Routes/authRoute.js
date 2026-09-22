const router = require("express").Router();
const {
  registerUser,
  loginUser,
  getCurrentUser,
  refreshAccessToken,
  logoutUser,
  updateProfile,
  changePassword,
  forgotPassword,
  resetPassword,
} = require("../controller/auth/authcontroler");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", getCurrentUser);
router.post("/refresh", refreshAccessToken);
router.post("/logout", logoutUser);
router.put("/profile", updateProfile);
router.put("/change-password", changePassword);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
