import { Outlet } from "react-router-dom";

export default function Onboarding() {


    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8f9ff] to-[#f0faf5] font-sans">
            {/* Header */}
            <header className="h-16 bg-white border-b border-[#e2e8f0] flex items-center justify-between px-6 flex-shrink-0">
                <span className="text-lg font-semibold text-[#0b1c30]">Smart<span className="text-[#006c49]">Sort</span></span>
                <div className="flex gap-2">
                    {["Help", "Log in"].map(btn => (
                        <button key={btn} className="px-3 py-1.5 text-sm text-[#515f74] border border-[#e2e8f0] rounded-lg hover:bg-[#f8fafc] transition-colors">{btn}</button>
                    ))}
                </div>
            </header>

            <Outlet />

            <footer className="bg-[#f8fafc] border-t border-[#e2e8f0] px-6 py-5 flex flex-col sm:row items-center justify-between gap-3">
                <p className="text-xs text-[#64748b]">© 2024 SmartSort Analytics.</p>
                <div className="flex gap-4">
                    {["Privacy", "Terms", "Support"].map(l => <a key={l} href="#" className="text-xs text-[#64748b] hover:text-[#006c49]">{l}</a>)}
                </div>
            </footer>
        </div>
    );
}