import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Camera, LockKeyhole, Save, UserRound } from "lucide-react";
import { toast } from "react-toastify";
import { setUser } from "../auth/authSlice";

const API = "http://localhost:8000/api/auth";

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [form, setForm] = useState({ username: "", email: "", phone: "" });
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("");
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [saving, setSaving] = useState(false);
  const [changing, setChanging] = useState(false);

  useEffect(() => {
    if (user) {
      setForm({
        username: user.username || "",
        email: user.email || "",
        phone: user.phone || "",
      });
      setPreview(user.profilePhoto || "");
    }
  }, [user]);

  const handlePhoto = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setPhoto(file);
    setPreview(URL.createObjectURL(file));
  };

  const saveProfile = async (event) => {
    event.preventDefault();
    setSaving(true);
    try {
      const data = new FormData();
      data.append("username", form.username);
      data.append("email", form.email);
      data.append("phone", form.phone);
      if (photo) data.append("profilePhoto", photo);
      const response = await axios.put(`${API}/profile`, data, {
        withCredentials: true,
      });
      dispatch(setUser(response.data.user));
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Could not update profile");
    } finally {
      setSaving(false);
    }
  };

  const changePassword = async (event) => {
    event.preventDefault();
    setChanging(true);
    try {
      const response = await axios.put(`${API}/change-password`, passwords, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      setPasswords({ currentPassword: "", newPassword: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Could not change password");
    } finally {
      setChanging(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
          Account
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">
          My profile
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Update your personal details and account password.
        </p>
      </div>

      <form
        onSubmit={saveProfile}
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
      >
        <div className="mb-7 flex flex-col gap-5 border-b border-slate-100 pb-6 sm:flex-row sm:items-center">
          <div className="relative h-24 w-24 shrink-0">
            {preview ? (
              <img
                src={preview}
                alt="Profile"
                className="h-24 w-24 rounded-full object-cover ring-4 ring-indigo-50"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <UserRound size={34} />
              </div>
            )}
            <label
              className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-white shadow-md hover:bg-indigo-700"
              title="Upload profile photo"
            >
              <Camera size={15} />
              <input
                type="file"
                accept="image/*"
                onChange={handlePhoto}
                className="hidden"
              />
            </label>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Personal information
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Use a clear photo and current contact details.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {["username", "email", "phone"].map((field) => (
            <label
              key={field}
              className={field === "phone" ? "sm:col-span-2" : ""}
            >
              <span className="mb-1.5 block text-sm font-medium capitalize text-slate-700">
                {field === "username" ? "Name" : field}
              </span>
              <input
                type={field === "email" ? "email" : "text"}
                value={form[field]}
                onChange={(event) =>
                  setForm({ ...form, [field]: event.target.value })
                }
                required={field !== "phone"}
                className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              />
            </label>
          ))}
        </div>
        <button
          disabled={saving}
          className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60"
        >
          <Save size={17} /> {saving ? "Saving..." : "Save profile"}
        </button>
      </form>

      <form
        onSubmit={changePassword}
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
      >
        <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <LockKeyhole size={19} />
          </div>
          <div>
            <h2 className="font-semibold text-slate-900">Change password</h2>
            <p className="text-sm text-slate-500">
              Choose a password with at least 6 characters.
            </p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <input
            type="password"
            required
            placeholder="Current password"
            value={passwords.currentPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, currentPassword: e.target.value })
            }
            className="h-11 rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          />
          <input
            type="password"
            required
            minLength={6}
            placeholder="New password"
            value={passwords.newPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, newPassword: e.target.value })
            }
            className="h-11 rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          />
        </div>
        <button
          disabled={changing}
          className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
        >
          <LockKeyhole size={17} />{" "}
          {changing ? "Updating..." : "Change password"}
        </button>
      </form>
    </div>
  );
}
