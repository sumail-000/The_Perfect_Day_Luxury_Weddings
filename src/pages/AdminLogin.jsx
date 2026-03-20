import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signIn(email, password);
      navigate("/admin");
    } catch (err) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fffaf8] px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <img src="/logo.png" alt="The Perfect Day" className="mx-auto h-14 w-auto object-contain" />
          <div className="mt-6 font-script text-4xl text-[#e7a8bb]">Admin Panel</div>
          <h1 className="mt-1 font-display text-2xl font-semibold text-[#49353d]">
            Sign in to manage your content
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-[#f1e1e7] bg-white p-8 shadow-[0_25px_80px_rgba(184,151,168,0.12)]"
        >
          {error && (
            <div className="mb-5 rounded-2xl bg-red-50 border border-red-200 px-4 py-3 font-body text-sm text-red-600">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="mb-2 block font-body text-sm font-medium text-[#6d5d64]">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#b09099]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-2xl border border-[#eddce3] bg-[#fdfafa] py-4 pl-11 pr-5 font-body text-[#3c2d31] outline-none transition focus:border-[#0fb7b1] focus:ring-2 focus:ring-[#0fb7b1]/10 placeholder:text-[#b09099]"
                placeholder="admin@tpdweddings.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-body text-sm font-medium text-[#6d5d64]">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#b09099]" />
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-2xl border border-[#eddce3] bg-[#fdfafa] py-4 pl-11 pr-12 font-body text-[#3c2d31] outline-none transition focus:border-[#0fb7b1] focus:ring-2 focus:ring-[#0fb7b1]/10 placeholder:text-[#b09099]"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#b09099] hover:text-[#7b5e67]"
              >
                {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#0fb7b1] px-8 py-4 font-body text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#0da8a2] disabled:opacity-50 disabled:hover:scale-100"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center font-body text-xs text-[#b09099]">
          The Perfect Day — Admin Access Only
        </p>
      </div>
    </div>
  );
}
