import { Link as RouterLink } from "react-router-dom";
import svgPaths from "../assets/svg_dashboard";
import imgUserProfileAvatar from "../assets/imgUserProfileAvatar.png";
import imgEventSnap from "../assets/imgEventSnap.png";
import imgEventSnap1 from "../assets/imgEventSnap1.png";
import imgEventSnap2 from "../assets/imgEventSnap2.png";
import imgEventSnap3 from "../assets/imgEventSnap3.png";

const navItems = [
    {
        to: "/dashboard",
        label: "DASHBOARD",
        icon: svgPaths.p20793584,
        iconViewBox: "0 0 18 18",
        iconSizeClass: "size-[18px]",
        active: true,
    },
    {
        to: "/analytics",
        label: "ANALYTICS",
        icon: svgPaths.p4c2b800,
        iconViewBox: "0 0 18 18",
        iconSizeClass: "size-[18px]",
    },
    {
        to: "/devices",
        label: "DEVICES",
        icon: svgPaths.p793b600,
        iconViewBox: "0 0 20 14.15",
        iconSizeClass: "w-[20px] h-[14.15px]",
    },
    {
        to: "/alerts",
        label: "ALERTS",
        icon: svgPaths.p3f50100,
        iconViewBox: "0 0 20 20.05",
        iconSizeClass: "w-[20px] h-[20.05px]",
    },
    {
        to: "/jobs",
        label: "JOBS",
        icon: svgPaths.p1230f680,
        iconViewBox: "0 0 20 19",
        iconSizeClass: "w-[20px] h-[19px]",
    },
    {
        to: "/admin",
        label: "ADMIN",
        icon: svgPaths.pf7fd700,
        iconViewBox: "0 0 18 20",
        iconSizeClass: "w-[18px] h-[20px]",
    },
];

const topIcons = [
    { path: svgPaths.p164b49c0, viewBox: "0 0 16 20", sizeClass: "w-[16px] h-[20px]" },
    { path: svgPaths.p3cdadd00, viewBox: "0 0 20.1 20", sizeClass: "w-[20.1px] h-[20px]" },
];

const kpiCards = [
    {
        id: "active-devices",
        title: "ACTIVE DEVICES",
        value: "18/20",
        statusText: "System nominal",
        statusIcon: {
            path: svgPaths.p1d9bcc00,
            viewBox: "0 0 11.6667 11.6667",
            sizeClass: "size-[11.667px]",
            color: "#515F74",
        },
        statusTextClass: "text-[#515f74]",
        badge: {
            path: svgPaths.p2cc228a0,
            viewBox: "0 0 31.5417 31.8333",
            sizeClass: "w-[31.542px] h-[31.833px]",
            rect: { fill: "#D5E3FD", opacity: 0.1, rx: 2, width: 31.5417, height: 31.8333 },
            color: "#515F74",
        },
    },
    {
        id: "total-items",
        title: "TOTAL ITEMS SORTED",
        value: "42,891",
        statusText: "+12.4% vs yesterday",
        statusIcon: {
            path: svgPaths.pde19380,
            viewBox: "0 0 11.6667 7",
            sizeClass: "w-[11.667px] h-[7px]",
            color: "#006C49",
        },
        statusTextClass: "text-[#006c49]",
        badge: {
            path: svgPaths.p3eba5880,
            viewBox: "0 0 31.0265 31.4216",
            sizeClass: "w-[31.027px] h-[31.422px]",
            rect: { fill: "#10B981", opacity: 0.1, rx: 12, width: 31.0265, height: 31.4216 },
            color: "#006C49",
        },
    },
    {
        id: "recycling-rate",
        title: "RECYCLING RATE %",
        value: "84.2%",
        statusText: "+2.4% threshold",
        statusIcon: {
            path: svgPaths.pde19380,
            viewBox: "0 0 11.6667 7",
            sizeClass: "w-[11.667px] h-[7px]",
            color: "#006C49",
        },
        statusTextClass: "text-[#006c49]",
        badge: {
            path: svgPaths.p3fc65f00,
            viewBox: "0 0 30.1629 30.1603",
            sizeClass: "w-[30.163px] h-[30.16px]",
            rect: { fill: "#23ACF1", opacity: 0.1, rx: 12, width: 30.1629, height: 30.1603 },
            color: "#006591",
        },
    },
    {
        id: "contamination-rate",
        title: "CONTAMINATION RATE%",
        value: "4.1%",
        statusText: "-0.8% reduction",
        statusIcon: {
            path: svgPaths.p9f44800,
            viewBox: "0 0 11.6667 7",
            sizeClass: "w-[11.667px] h-[7px]",
            color: "#006C49",
        },
        statusTextClass: "text-[#006c49]",
        badge: {
            path: svgPaths.p3fc65f00,
            viewBox: "0 0 30.1629 30.1603",
            sizeClass: "w-[30.163px] h-[30.16px]",
            rect: { fill: "#23ACF1", opacity: 0.1, rx: 12, width: 30.1629, height: 30.1603 },
            color: "#006591",
        },
    },
];

const throughputBars = [
    { time: "08:00", heightClass: "h-[95.59px]" },
    { time: "09:00", heightClass: "h-[155.34px]" },
    { time: "10:00", heightClass: "h-[99px]" },
    { time: "11:00", heightClass: "flex-1 min-h-px" },
    { time: "12:00", heightClass: "h-[143.39px]" },
    { time: "13:00", heightClass: "h-[179.25px]" },
    { time: "14:00", heightClass: "flex-1 min-h-px" },
    { time: "15:00", heightClass: "h-[119.5px]" },
];

const wasteLegend = [
    { label: "Plastic (35%)", color: "bg-[#10b981]" },
    { label: "Paper (22%)", color: "bg-[#60a5fa]" },
    { label: "Metal (18%)", color: "bg-[#fbbf24]" },
    { label: "Other (25%)", color: "bg-[#cbd5e1]" },
];

const deviceStatus = [
    { name: "Main Conveyor A1", fill: "88% Full", percent: 88, color: "bg-[#ba1a1a]" },
    { name: "Glass Separator B2", fill: "42% Full", percent: 42, color: "bg-[#10b981]" },
    { name: "Paper Compactor C1", fill: "15% Full", percent: 15, color: "bg-[#10b981]" },
    { name: "Organic Bin D5", fill: "72% Full", percent: 72, color: "bg-[#fbbf24]" },
];

const eventRows = [
    {
        time: "14:32:01",
        source: "Sensor_A1",
        detection: { label: "BIOHAZARD", bg: "bg-[#ffdad6]", text: "text-[#ba1a1a]" },
        confidence: "98.2%",
        image: imgEventSnap,
        action: { label: "Intercept", color: "text-[#006c49]" },
    },
    {
        time: "14:30:45",
        source: "Sensor_B2",
        detection: { label: "METALLIC", bg: "bg-[#fef3c7]", text: "text-[#b45309]" },
        confidence: "84.5%",
        image: imgEventSnap1,
        action: { label: "Divert", color: "text-[#006c49]" },
    },
    {
        time: "14:28:12",
        source: "Sensor_A1",
        detection: { label: "UNKNOWN", bg: "bg-[#f1f5f9]", text: "text-[#475569]" },
        confidence: "62.1%",
        image: imgEventSnap2,
        action: { label: "Log", color: "text-[#006c49]" },
    },
    {
        time: "14:25:33",
        source: "Sensor_D4",
        detection: { label: "BATTERY", bg: "bg-[#ffdad6]", text: "text-[#ba1a1a]" },
        confidence: "99.4%",
        image: imgEventSnap3,
        action: { label: "E-Stop", color: "text-[#006c49]" },
    },
];

function SvgIcon({ path, viewBox, className, color }) {
    return (
        <svg className={className} fill="none" preserveAspectRatio="none" viewBox={viewBox}>
            <path d={path} fill={color} />
        </svg>
    );
}

function KpiCard({ item }) {
    return (
        <div className="bg-white h-[150px] relative rounded-[12px]">
            <div
                aria-hidden="true"
                className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]"
            />
            <div className="flex flex-col items-start justify-between p-[21px] size-full">
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic text-[#515f74] text-[12px] tracking-[0.6px] uppercase">
                        <p className="leading-[16px]">{item.title}</p>
                    </div>
                    <div className={`relative shrink-0 ${item.badge.sizeClass}`}>
                        <svg
                            className="absolute block inset-0 size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox={item.badge.viewBox}
                        >
                            <rect
                                fill={item.badge.rect.fill}
                                fillOpacity={item.badge.rect.opacity}
                                height={item.badge.rect.height}
                                rx={item.badge.rect.rx}
                                width={item.badge.rect.width}
                            />
                            <path d={item.badge.path} fill={item.badge.color} />
                        </svg>
                    </div>
                </div>
                <div className="pt-[16px] w-full">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic text-[#0b1c30] text-[30px] tracking-[-0.6px]">
                        <p className="leading-[38px]">{item.value}</p>
                    </div>
                    <div className="flex items-center gap-[4px]">
                        <div className={`relative shrink-0 ${item.statusIcon.sizeClass}`}>
                            <SvgIcon
                                path={item.statusIcon.path}
                                viewBox={item.statusIcon.viewBox}
                                className="absolute block inset-0 size-full"
                                color={item.statusIcon.color}
                            />
                        </div>
                        <div
                            className={`flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic text-[14px] tracking-[-0.14px] ${item.statusTextClass}`}
                        >
                            <p className="leading-[20px]">{item.statusText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SideNav() {
    return (
        <aside className="absolute hidden lg:flex bg-[#0f172a] flex-col h-full min-h-screen items-start justify-between left-0 pr-px py-[24px] top-0 w-[256px]">
            <div aria-hidden="true" className="absolute border-[#1e293b] border-r border-solid inset-0 pointer-events-none" />
            <div className="absolute bg-[rgba(255,255,255,0)] h-full left-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[256px]" />
            <div className="relative w-full">
                <div className="flex flex-col items-start pb-[32px] px-[24px]">
                    <div className="flex gap-[12px] items-center w-full">
                        <div className="bg-[#10b981] flex items-center justify-center rounded-[2px] size-[40px]">
                            <SvgIcon
                                path={svgPaths.p390fa040}
                                viewBox="0 0 21.0273 21"
                                className="w-[21.027px] h-[21px]"
                                color="white"
                            />
                        </div>
                        <div className="flex flex-col w-[127.98px]">
                            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic text-[18px] text-white tracking-[-0.45px]">
                                <p className="leading-[28px]">SmartSort</p>
                            </div>
                            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic text-[#94a3b8] text-[10px] tracking-[1px] uppercase">
                                <p className="leading-[15px]">WASTE INTELLIGENCE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="flex-1 w-full">
                <div className="flex flex-col w-full">
                    {navItems.map((item) => (
                        <RouterLink key={item.to} to={item.to} className="block no-underline w-full">
                            <div className={`relative ${item.active ? "bg-[#1e293b]" : "bg-transparent"}`}>
                                {item.active && (
                                    <div
                                        aria-hidden="true"
                                        className="absolute border-[#10b981] border-l-4 border-solid inset-0 pointer-events-none"
                                    />
                                )}
                                <div className="flex flex-row items-center">
                                    <div
                                        className={`flex gap-[12px] items-center px-[24px] py-[12px] w-full ${item.active ? "pl-[28px]" : ""
                                            }`}
                                    >
                                        <div className={`relative shrink-0 ${item.iconSizeClass}`}>
                                            <SvgIcon
                                                path={item.icon}
                                                viewBox={item.iconViewBox}
                                                className="absolute block inset-0 size-full"
                                                color={item.active ? "#4EDEA3" : "#94A3B8"}
                                            />
                                        </div>
                                        <div
                                            className={`flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic text-[12px] tracking-[1.2px] uppercase ${item.active ? "text-white" : "text-[#94a3b8]"
                                                }`}
                                        >
                                            <p className="leading-[16px]">{item.label}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RouterLink>
                    ))}
                </div>
            </nav>
            <div className="relative w-full pb-[8px]">
                <div className="flex flex-col items-start px-[24px]">
                    <div className="bg-[#006c49] flex items-center justify-center py-[12px] rounded-[2px] w-full">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic text-[12px] text-center text-white tracking-[1.2px] uppercase">
                            <p className="leading-[16px]">NEW REPORT</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default function Dashboard() {

    return (
        <div
            className="content-stretch flex flex-col items-start relative size-full min-h-screen lg:pl-[256px] bg-[#f8f9ff]"
            data-name="dashboard"
        >
            <SearchBar />
            <Outlet />
            <SideNav />
        </div>
    );
}