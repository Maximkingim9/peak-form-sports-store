import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    const result = login(email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/");
  };

  return (
    <div className="min-h-[70vh] bg-[#f2f5f9] px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-[1050px]">
        <div className="grid overflow-hidden rounded-2xl border border-[#e1e8e3] bg-white shadow-sm lg:grid-cols-2">

          <div className="relative hidden overflow-hidden bg-[#14284a] p-10 lg:flex lg:min-h-[600px] lg:flex-col lg:justify-between">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ff5a1f]/20" />
            <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#5b8bd6]/10" />

            <div className="relative z-10">
              <Link
                to="/"
                className="text-xl font-black uppercase tracking-[-0.06em] text-white"
              >
                Peak<span className="text-accent">Form</span>
              </Link>

              <div className="mt-24 max-w-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffb394]">
                  Welcome back
                </p>

                <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-white">
                  Train hard.
                  <br />
                  Gear up right.
                </h1>

                <p className="mt-5 text-sm leading-7 text-white/65">
                  Your saved sizes, orders and favourite gear
                  are waiting for you.
                </p>
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-3 border-t border-white/10 pt-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <i className="bi bi-lightning-charge text-sm text-[#ffb394]" />
              </div>

              <p className="text-[10px] leading-4 text-white/55">
                Tested by athletes.
                <br />
                Built for performance.
              </p>
            </div>
          </div>

          <div className="flex items-center p-7 sm:p-10 lg:p-14">
            <div className="mx-auto w-full max-w-[420px]">
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff5a1f]">
                  Account
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#20242c]">
                  Welcome back
                </h2>

                <p className="mt-2 text-xs leading-5 text-[#7b827d]">
                  Sign in to your Peak Form account.
                </p>
              </div>

              {error && (
                <div className="mb-5 flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-xs text-red-600">
                  <i className="bi bi-exclamation-circle mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5f6761]"
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <i className="bi bi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#9ba39d]" />

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#dfe6e0] bg-[#fafcfa] py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-[#b0b6b1] focus:border-[#ff5a1f] focus:bg-white focus:ring-4 focus:ring-[#ff5a1f]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5f6761]"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <i className="bi bi-lock absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#9ba39d]" />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-[#dfe6e0] bg-[#fafcfa] py-3.5 pl-11 pr-11 text-sm outline-none transition placeholder:text-[#b0b6b1] focus:border-[#ff5a1f] focus:bg-white focus:ring-4 focus:ring-[#ff5a1f]/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ba39d] hover:text-[#ff5a1f]"
                    >
                      <i
                        className={`bi ${
    showPassword
        ? "bi-eye-slash"
        : "bi-eye"
} `}
                      />
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#ff5a1f] px-5 py-3.5 text-xs font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#e04a12] hover:shadow-lg hover:shadow-[#ff5a1f]/15"
                >
                  Sign in
                  <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              <div className="my-7 flex items-center gap-3">
                <span className="h-px flex-1 bg-[#edf0ed]" />

                <span className="text-[9px] uppercase tracking-wider text-[#a0a6a1]">
                  New here?
                </span>

                <span className="h-px flex-1 bg-[#edf0ed]" />
              </div>

              <Link
                to="/register"
                className="flex w-full items-center justify-center rounded-full border border-[#dfe6e0] px-5 py-3 text-xs font-bold text-[#303832] transition hover:border-[#ff5a1f] hover:bg-[#f5f7fb] hover:text-[#e04a12]"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}