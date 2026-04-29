import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Personal = () => {
    const [form, setForm] = useState({
        firstName: "", lastName: "", email: "", org: "",
        orgSize: "", industry: "", password: "",
    });

    const handleChange = (key) => (e) => setForm({ ...form, [key]: e.target.value });

    const inputClass = "h-10 px-3 border border-[#cbd5e1] rounded-lg text-sm bg-white text-[#0b1c30] focus:outline-none focus:border-[#006c49] focus:ring-2 focus:ring-[#006c49]/10 transition-all";
    const labelClass = "text-sm font-medium text-[#515f74] mb-1.5";

    const navigate = useNavigate();
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
                <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-sm p-8 flex flex-col gap-5">
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

                    <button className="w-full h-11 bg-[#006c49] hover:bg-[#005a3c] text-white text-sm font-semibold rounded-lg transition-all mt-2"
                        onClick={() => navigate("/onboarding/firm")}
                    >
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
                </div>
            </div>
        </main>

    )
}

export default Personal