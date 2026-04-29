import { useNavigate } from "react-router";

function Firm() {
    const navigate = useNavigate();

    // Shared Style Constants
    // const labelClass = "text-[#3c4a42] text-[15.95px] font-semibold tracking-[0.8px] mb-[11px] uppercase";
    const inputClass = "h-10 px-3 border border-[#cbd5e1] rounded-lg text-sm bg-white text-[#0b1c30] focus:outline-none focus:border-[#006c49] focus:ring-2 focus:ring-[#006c49]/10 transition-all w-full";
    const labelClass = "text-sm font-medium text-[#515f74] mb-1.5 block";
    const selectStyle = {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%23515f74' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 12px center",
        paddingRight: "36px",
    };
    return (
        <main className="flex-1 flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side */}
                <div className="flex flex-col gap-8">
                    <span className="w-fit bg-[#10b981] text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full">STEP 1 OF 3</span>
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

                {/* Right Side - Form */}
                {/* <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-sm p-8 flex flex-col gap-5">
                    <div>
                        <h2 className="text-xl font-semibold text-[#0b1c30]">Create your account</h2>
                        <p className="text-sm text-[#515f74]">Start your free 14-day trial.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col">
                            <label className={labelClass}>First name</label>
                            <input className={inputClass} placeholder="Jane" value={form.firstName} onChange={handleChange("firstName")} />
                        </div>
                        <div className="flex flex-col">
                            <label className={labelClass}>Last name</label>
                            <input className={inputClass} placeholder="Smith" value={form.lastName} onChange={handleChange("lastName")} />
                        </div>
                    </div>

                    {[
                        { label: "Work email", id: "email", type: "email", ph: "jane@company.com" },
                        { label: "Organization name", id: "org", ph: "Acme Corp" }
                    ].map(f => (
                        <div key={f.id} className="flex flex-col">
                            <label className={labelClass}>{f.label}</label>
                            <input type={f.type || "text"} className={inputClass} placeholder={f.ph} value={form[f.id]} onChange={handleChange(f.id)} />
                        </div>
                    ))}

                    <div className="flex flex-col">
                        <label className={labelClass}>Organization size</label>
                        <select
                            className={`${inputClass} appearance-none cursor-pointer`}
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%23515f74' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
                            value={form.orgSize} onChange={handleChange("orgSize")}
                        >
                            <option value="">Select size</option>
                            <option>1 – 50 employees</option>
                            <option>51 – 200 employees</option>
                            <option>201+</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className={labelClass}>Password</label>
                        <input type="password" className={inputClass} placeholder="Min. 8 characters" value={form.password} onChange={handleChange("password")} />
                    </div>

                    <button className="w-full h-11 bg-[#006c49] hover:bg-[#005a3c] text-white text-sm font-semibold rounded-lg transition-all mt-2">
                        GET STARTED →
                    </button>

                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className={`h-1.5 rounded-full ${i === 0 ? "w-8 bg-[#006c49]" : "w-4 bg-[#bbcabf]"}`} />
                            ))}
                        </div>
                        <p className="text-xs text-[#94a3b8]">Already have an account? <a href="#" className="text-[#006c49] font-medium">Log in</a></p>
                    </div>
                </div> */}

                <div>
                    <section className="bg-white border border-[#e2e8f0] rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col gap-5">
                        {/* Progress Header */}
                        <div className="flex justify-between items-end mb-2">
                            <div>
                                <span className="text-[#006c49] text-[10px] font-bold tracking-widest uppercase">Configuration</span>
                                <h2 className="text-xl font-semibold text-[#0b1c30]">Organization Details</h2>
                            </div>
                            <div className="text-right">
                                <span className="text-[#515f74] text-xs font-medium block mb-1">Step 2 of 3</span>
                                <div className="w-24 h-1.5 bg-[#bbcabf] rounded-full overflow-hidden">
                                    <div className="w-2/3 h-full bg-[#006c49]" />
                                </div>
                            </div>
                        </div>

                        {/* Form Fields */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <label className={labelClass}>Organization Name</label>
                                <input className={inputClass} placeholder="e.g. Global Logistics Corp" />
                            </div>

                            <div className="flex flex-col">
                                <label className={labelClass}>Industry Type</label>
                                <select
                                    className={`${inputClass} appearance-none cursor-pointer`}
                                    style={selectStyle}
                                >
                                    <option>Select Industry</option>
                                    <option>Manufacturing</option>
                                    <option>Logistics</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label className={labelClass}>Number of Facilities</label>
                                <input className={inputClass} type="number" defaultValue={0} />
                            </div>

                            <div className="col-span-2">
                                <label className={labelClass}>Estimated Annual Waste Volume</label>
                                <div className="relative">
                                    <input className={inputClass} placeholder="Enter amount" />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#94a3b8]">
                                        Tons/Yr
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Helper Info Box */}
                        <div className="bg-[#f0faf5] border border-[#e1f5ee] rounded-xl p-4 flex gap-3">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
                                <circle cx="8" cy="8" r="7" stroke="#006c49" strokeWidth="1.2" />
                                <path d="M8 5v3m0 3h.01" stroke="#006c49" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <p className="text-xs text-[#515f74] leading-relaxed">
                                These estimates help us customize your dashboard metrics. You can refine these values later in your Facility Settings.
                            </p>
                        </div>

                        {/* Action Footer */}
                        <footer className="border-t border-[#e2e8f0] pt-5 flex justify-between items-center mt-2">
                            <button className="flex items-center gap-2 text-xs font-semibold text-[#515f74] hover:text-[#0b1c30] transition-colors">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M7 10L3 6l4-4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Back to Account
                            </button>
                            <button
                                onClick={() => navigate("/onboarding-3")}
                                className="bg-[#006c49] hover:bg-[#005a3c] text-white px-6 h-11 text-sm font-semibold rounded-lg flex items-center gap-2 transition-all active:scale-[0.98]"
                            >
                                Save and Continue
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 2l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </footer>
                    </section>
                </div>
            </div>
        </main>

    );
}

export default Firm;