import { Link as RouterLink } from "react-router-dom";

function IconSort() {
    return (
        <svg viewBox="0 0 21 21" className="w-[21px] h-[21px]" fill="none">
            <path d="M3 6h15M6 10.5h9M9 15h3" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function NavIcon({ label }) {
    const icons = {
        DASHBOARD: (
            <svg viewBox="0 0 18 18" className="size-[18px]" fill="none">
                <rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor" />
                <rect x="11" y="1" width="6" height="6" rx="1" fill="currentColor" />
                <rect x="1" y="11" width="6" height="6" rx="1" fill="currentColor" />
                <rect x="11" y="11" width="6" height="6" rx="1" fill="currentColor" />
            </svg>
        ),
        ANALYTICS: (
            <svg viewBox="0 0 18 18" className="size-[18px]" fill="none">
                <path d="M2 14l4-5 3 3 4-6 3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        DEVICES: (
            <svg viewBox="0 0 20 14" className="w-[20px] h-[14px]" fill="none">
                <rect x="1" y="1" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        ALERTS: (
            <svg viewBox="0 0 20 20" className="w-[20px] h-[20px]" fill="none">
                <path d="M10 2l8 15H2L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M10 9v3M10 14.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        JOBS: (
            <svg viewBox="0 0 20 19" className="w-[20px] h-[19px]" fill="none">
                <rect x="1" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 4V2h6v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5 10h10M5 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        ADMIN: (
            <svg viewBox="0 0 18 20" className="w-[18px] h-[20px]" fill="none">
                <circle cx="9" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M1 19c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    };
    return icons[label] ?? null;
}
export function SideNav() {
    const navItems = [
        { to: "/dashboard", label: "DASHBOARD", active: true },
        { to: "/dashboard/analytics", label: "ANALYTICS" },
        { to: "/dashboard/devices", label: "DEVICES" },
        { to: "/dashboard/alerts", label: "ALERTS" },
        { to: "/dashboard/jobs", label: "JOBS" },
        { to: "/dashboard/admin", label: "ADMIN" },
    ];



    return (
        <aside className="hidden lg:flex bg-[#0f172a] flex-col h-full min-h-screen items-start justify-between left-0 pr-px py-[24px] top-0 w-[256px] max-h-screen fixed">
            <div aria-hidden className="absolute border-[#1e293b] border-r border-solid inset-0 pointer-events-none" />

            {/* Logo */}
            <div className="relative w-full px-[24px] pb-[32px]">
                <div className="flex gap-[12px] items-center">
                    <div className="bg-[#10b981] flex items-center justify-center rounded-[2px] size-[40px]">
                        <IconSort />
                    </div>
                    <div>
                        <p className="font-bold text-[18px] text-white tracking-[-0.45px] leading-[28px]">SmartSort</p>
                        <p className="font-semibold text-[#94a3b8] text-[10px] tracking-[1px] uppercase leading-[15px]">WASTE INTELLIGENCE</p>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <nav className="flex-1 w-full">
                {navItems.map((item) => (
                    <RouterLink key={item.to} to={item.to} className="block no-underline w-full">
                        <div className={`relative ${item.active ? "bg-[#1e293b]" : "bg-transparent"}`}>
                            {item.active && (
                                <div aria-hidden className="absolute border-[#10b981] border-l-4 border-solid inset-0 pointer-events-none" />
                            )}
                            <div className={`flex gap-[12px] items-center py-[12px] w-full ${item.active ? "px-[28px]" : "px-[24px]"}`}>
                                <span className={item.active ? "text-[#4EDEA3]" : "text-[#94A3B8]"}>
                                    <NavIcon label={item.label} />
                                </span>
                                <p className={`font-semibold text-[12px] tracking-[1.2px] uppercase leading-[16px] ${item.active ? "text-white" : "text-[#94a3b8]"}`}>
                                    {item.label}
                                </p>
                            </div>
                        </div>
                    </RouterLink>
                ))}
            </nav>

            {/* CTA */}
            <div className="relative w-full pb-[8px] px-[24px]">
                <button className="bg-[#006c49] flex items-center justify-center py-[12px] rounded-[2px] w-full">
                    <p className="font-bold text-[12px] text-white tracking-[1.2px] uppercase leading-[16px]">NEW REPORT</p>
                </button>
            </div>
        </aside>
    );
}