import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-[#f3f4f6] border border-black/10 overflow-hidden relative rounded-2xl size-full flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center w-full max-w-[440px] px-4">

        {/* Branding */}
        <div className="flex flex-col items-center pb-10">
          <div className="bg-[#398454] flex items-center justify-center w-16 h-16 rounded-xl mb-4 shadow-lg">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm5.5 8l-7 7-3-3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-[30px] font-extrabold text-[#121c28] tracking-tight font-['Manrope',sans-serif]">SmartSort</h1>
          <p className="text-sm font-medium text-[rgba(67,70,85,0.8)] tracking-widest uppercase mt-1">
            Waste Intelligence for a Sustainable Future
          </p>
        </div>

        {/* Card */}
        <div className="bg-white w-full rounded-xl shadow-[0px_12px_20px_rgba(18,28,40,0.06)] border border-[rgba(195,198,215,0.1)]">
          <div className="flex flex-col gap-6 p-10">

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-widest uppercase text-[#434655]">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#434655]/50">
                  <svg width="17" height="14" viewBox="0 0 17 14" fill="none">
                    <path d="M1.5 1h14a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5v-11A.5.5 0 0 1 1.5 1z" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M1 1.5l7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@smartsort.com"
                  className="w-full bg-[#eef4ff] rounded-lg pl-11 pr-4 py-3.5 text-sm text-[#434655] placeholder-[rgba(67,70,85,0.4)] focus:outline-none focus:ring-2 focus:ring-[#398454]/30"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex items-end justify-between">
                <label className="text-xs font-semibold tracking-widest uppercase text-[#434655]">
                  Password
                </label>
                <span className="text-[10px] font-bold text-[rgba(67,70,85,0.4)] cursor-default">
                  Forgot Password?
                </span>
              </div>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#434655]/50">
                  <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                    <rect x="1" y="7" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M4 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#eef4ff] rounded-lg pl-11 pr-12 py-3.5 text-sm text-[#434655] placeholder-[rgba(67,70,85,0.4)] focus:outline-none focus:ring-2 focus:ring-[#398454]/30"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#434655]/50 hover:text-[#434655] transition-colors"
                >
                  <svg width="19" height="13" viewBox="0 0 19 13" fill="none">
                    <path d="M1 6.5C1 6.5 4 1 9.5 1S18 6.5 18 6.5 15 12 9.5 12 1 6.5 1 6.5z" stroke="currentColor" strokeWidth="1.2"/>
                    <circle cx="9.5" cy="6.5" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
                    {showPassword && <path d="M2 2l15 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>}
                  </svg>
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <div
                onClick={() => setRemember(!remember)}
                className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                  remember ? "bg-[#398454] border-[#398454]" : "bg-[#eef4ff] border-[rgba(195,198,215,0.3)]"
                }`}
              >
                {remember && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="text-xs font-medium text-[#434655]">Stay signed in for 30 days</span>
            </label>

            {/* Submit */}
            <button
              onClick={() => navigate("/onboarding-1")}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-bold text-white tracking-wide shadow-[0px_10px_15px_-3px_rgba(0,74,198,0.3)] hover:opacity-90 active:scale-[0.98] transition-all"
              style={{ backgroundImage: "linear-gradient(139deg, #398454 0%, #2563eb 100%)" }}
            >
              Sign In
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div className="border-t border-[rgba(195,198,215,0.1)] px-10 py-6 flex justify-center gap-1 text-xs text-center">
            <span className="text-[rgba(67,70,85,0.6)]">New to the platform?</span>
            <span className="font-bold text-[#398454] cursor-pointer hover:underline">Request access</span>
          </div>
        </div>

        {/* Status pill */}
        <div className="mt-8 flex items-center gap-4 bg-white/40 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-tight text-[rgba(67,70,85,0.7)]">Systems Operational</span>
          </div>
          <div className="w-px h-3 bg-[rgba(67,70,85,0.2)]" />
          <span className="text-[10px] font-bold uppercase tracking-tight text-[rgba(67,70,85,0.7)]">v4.2.0-stable</span>
        </div>

      </div>
    </div>
  );
}