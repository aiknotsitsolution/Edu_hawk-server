import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    if (password !== confirm) {
      toast.warn("Passwords do not match");
      return setMessage("Passwords do not match");
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `https://edu-hawk-server.onrender.com/api/auth/reset-password/${token}`,
        { password },
      );
      setMessage(response.data.message);
      toast.success(response.data.message);
      setTimeout(() => navigate("/login"), 1200);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Unable to reset password";
      setMessage(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <img
          src="/eduhawk_logo.png"
          alt="Edu-Hawk Worldwide"
          className="mx-auto mb-7 h-auto max-h-16 w-full object-contain"
        />
        <h1 className="text-2xl font-semibold text-slate-900">
          Set new password
        </h1>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div className="relative">
            <LockKeyhole
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
              className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            />
          </div>
          <input
            type="password"
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm new password"
            className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          />
          <button
            disabled={loading}
            className="flex h-12 w-full items-center justify-center rounded-xl bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? "Updating..." : "Reset password"}
          </button>
        </form>
        {message && (
          <p className="mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
            {message}
          </p>
        )}
        <Link
          to="/login"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          <ArrowLeft size={16} /> Back to login
        </Link>
      </div>
    </div>
  );
}
