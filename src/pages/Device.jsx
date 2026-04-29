import { useNavigate } from "react-router";

const Device = () => {
    const navigate = useNavigate();
    const inputClass = "h-10 px-3 border border-[#cbd5e1] rounded-lg text-sm bg-white text-[#0b1c30] focus:outline-none focus:border-[#006c49] focus:ring-2 focus:ring-[#006c49]/10 transition-all w-full";
    const labelClass = "text-[10px] font-bold text-[#515f74] mb-1.5 block uppercase tracking-widest";

    return (
        <main className="flex-1 flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side */}
                <div className="flex flex-col gap-8">
                    <span className="w-fit bg-[#10b981] text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full">STEP 3 OF 3</span>
                    <div>
                        <h1 className="text-4xl font-bold text-[#0b1c30] leading-tight">
                            Transform waste into <span className="text-[#006c49]">environmental intelligence.</span>
                        </h1>
                        <p className="mt-4 text-[#515f74]">SmartSort Analytics provides enterprise-grade tools to track and optimize your sustainability footprint.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { title: "Precision analytics", desc: "Real-time metrics.", bg: "#e1f5ee", color: "#006c49", path: "M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm2.5 4.5L7 9.5 5.5 8" },
                            { title: "Carbon tracking", desc: "Automated reporting.", bg: "#e1f0fc", color: "#23acf1", path: "M8 2v4l2.5 1.5" }
                        ].map((f, i) => (
                            <div key={i} className="bg-white border border-[#e2e8f0] rounded-xl p-4">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background: f.bg }}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={f.color} strokeWidth="1.2" strokeLinecap="round"><path d={f.path} />{i === 1 && <circle cx="8" cy="8" r="5.5" />}</svg>
                                </div>
                                <h3 className="text-sm font-semibold text-[#0b1c30] mb-1">{f.title}</h3>
                                <p className="text-xs text-[#515f74]">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side */}
                <div>
                    <section className="bg-white border border-[#e2e8f0] rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col gap-5">
                        {/* Progress Header */}
                        <div className="flex justify-between items-end mb-2">
                            <div>
                                <span className="text-[#006c49] text-[10px] font-bold tracking-widest uppercase">Configuration</span>
                                <h2 className="text-xl font-semibold text-[#0b1c30] mt-1">Connect First Device</h2>
                            </div>
                            <div className="text-right">
                                <span className="text-[#515f74] text-xs font-medium block mb-1">Step 3 of 3</span>
                                <div className="w-24 h-1.5 bg-[#bbcabf] rounded-full overflow-hidden">
                                    <div className="w-full h-full bg-[#006c49]" />
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-[#515f74] leading-relaxed">
                            Enter the unique 12-digit serial number located on the side panel of your SmartSort unit to activate its analytics core.
                        </p>

                        {/* Form Fields */}
                        <div className="flex flex-col gap-5 mt-2">
                            <div className="flex flex-col">
                                <label className={labelClass}>DEVICE SERIAL NUMBER</label>
                                <div className="relative">
                                    <input className={inputClass} placeholder="SS-XXXX-XXXX-XXXX" />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#515f74] opacity-50">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5 mt-2 text-[#515f74]">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="8" cy="8" r="7" /><path d="M8 5v3m0 3h.01" />
                                    </svg>
                                    <p className="text-xs">Serial numbers start with 'SS' followed by 12 characters.</p>
                                </div>
                            </div>

                            {/* Facility Switcher */}
                            <div className="bg-[#eff4ff] border border-[#bbcabf] rounded-lg p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white border border-[#bbcabf] rounded-md flex items-center justify-center shrink-0">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006c49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 21h18" /><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" /><path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" /><path d="M9 7h6" /><path d="M9 11h6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-[#0b1c30]">Default Facility</h3>
                                        <p className="text-sm text-[#515f74]">North Logistics Hub</p>
                                    </div>
                                </div>
                                <button className="text-sm font-semibold text-[#006c49] hover:text-[#005a3c]">Change</button>
                            </div>
                        </div>

                        {/* Primary Actions */}
                        <div className="flex flex-col gap-3 mt-4">
                            <button
                                onClick={() => navigate("/dashboard")}
                                className="w-full bg-[#006c49] hover:bg-[#005a3c] text-white h-11 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                            >
                                Register &amp; Finish
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 8h10M9 4l4 4-4 4" />
                                </svg>
                            </button>
                            <button onClick={() => navigate("/dashboard")} className="text-sm font-medium text-[#515f74] hover:text-[#0b1c30] transition-colors py-1 text-center w-full">
                                Skip for Now
                            </button>
                        </div>

                        {/* Help Info */}
                        <div className="mt-2 pt-5 border-t border-[#e2e8f0] flex gap-4 items-start">
                            <div className="shrink-0 mt-0.5 text-[#23acf1]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-[#0b1c30]">Need help with installation?</h4>
                                <p className="text-xs text-[#515f74] mt-1 leading-relaxed">Our technical team is available 24/7 for remote setup assistance.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Device;