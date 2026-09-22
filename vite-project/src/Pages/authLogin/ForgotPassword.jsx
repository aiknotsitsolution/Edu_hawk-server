import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, Mail, Send } from "lucide-react";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/forgot-password",
        { email },
      );
      setMessage(response.data.message);
      toast.success(response.data.message);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Unable to send reset email";
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
          Forgot password?
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Enter your email and we will send a secure reset link.
        </p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            />
          </div>
          <button
            disabled={loading}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-60"
          >
            <Send size={17} />
            {loading ? "Sending..." : "Send reset link"}
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
