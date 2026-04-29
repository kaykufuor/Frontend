
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
        time: "14:32:01", source: "Sensor_A1",
        detection: { label: "BIOHAZARD", bg: "bg-[#ffdad6]", text: "text-[#ba1a1a]" },
        confidence: "98.2%",
        action: { label: "Intercept", color: "text-[#006c49]" },
    },
    {
        time: "14:30:45", source: "Sensor_B2",
        detection: { label: "METALLIC", bg: "bg-[#fef3c7]", text: "text-[#b45309]" },
        confidence: "84.5%",
        action: { label: "Divert", color: "text-[#006c49]" },
    },
    {
        time: "14:28:12", source: "Sensor_A1",
        detection: { label: "UNKNOWN", bg: "bg-[#f1f5f9]", text: "text-[#475569]" },
        confidence: "62.1%",
        action: { label: "Log", color: "text-[#006c49]" },
    },
    {
        time: "14:25:33", source: "Sensor_D4",
        detection: { label: "BATTERY", bg: "bg-[#ffdad6]", text: "text-[#ba1a1a]" },
        confidence: "99.4%",
        action: { label: "E-Stop", color: "text-[#006c49]" },
    },
];
function IconExport() {
    return (
        <svg viewBox="0 0 10 10" className="size-[9.333px]" fill="none">
            <path d="M5 1v6M2 5l3 3 3-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 8h8" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
    );
}
function IconTrendUp({ color = "#006C49" }) {
    return (
        <svg viewBox="0 0 12 7" className="w-[11.667px] h-[7px]" fill="none">
            <path d="M1 6L5 2L8 4.5L11 1" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 1h3v3" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function IconTrendDown({ color = "#006C49" }) {
    return (
        <svg viewBox="0 0 12 7" className="w-[11.667px] h-[7px]" fill="none">
            <path d="M1 1L5 5L8 2.5L11 6" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 6h3V3" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function IconDot() {
    return (
        <svg viewBox="0 0 12 12" className="size-[11.667px]" fill="none">
            <circle cx="6" cy="6" r="4" fill="#515F74" />
        </svg>
    );
}

function KpiCard({ item }) {
    const TrendIcon = item.trend === "up"
        ? <IconTrendUp />
        : item.trend === "down"
            ? <IconTrendDown />
            : <IconDot />;

    return (
        <div className="bg-white h-[150px] relative rounded-[12px]">
            <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="flex flex-col items-start justify-between p-[21px] size-full">
                <div className="flex items-center justify-between w-full">
                    <p className="font-semibold text-[#515f74] text-[12px] tracking-[0.6px] uppercase leading-[16px]">
                        {item.title}
                    </p>
                    <div className={`${item.badgeBg} ${item.badgeColor} rounded-[12px] p-[6px]`}>
                        <span className="text-[11px] font-bold">↗</span>
                    </div>
                </div>
                <div className="pt-[16px] w-full">
                    <p className="font-bold text-[#0b1c30] text-[30px] tracking-[-0.6px] leading-[38px]">
                        {item.value}
                    </p>
                    <div className="flex items-center gap-[4px]">
                        {TrendIcon}
                        <p className={`font-medium text-[14px] tracking-[-0.14px] leading-[20px] ${item.statusColor}`}>
                            {item.statusText}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const kpiCards = [
    {
        id: "active-devices",
        title: "ACTIVE DEVICES",
        value: "18/20",
        statusText: "System nominal",
        statusColor: "text-[#515f74]",
        trend: null,
        badgeBg: "bg-[rgba(213,227,253,0.1)]",
        badgeColor: "text-[#515F74]",
    },
    {
        id: "total-items",
        title: "TOTAL ITEMS SORTED",
        value: "42,891",
        statusText: "+12.4% vs yesterday",
        statusColor: "text-[#006c49]",
        trend: "up",
        badgeBg: "bg-[rgba(16,185,129,0.1)]",
        badgeColor: "text-[#006C49]",
    },
    {
        id: "recycling-rate",
        title: "RECYCLING RATE %",
        value: "84.2%",
        statusText: "+2.4% threshold",
        statusColor: "text-[#006c49]",
        trend: "up",
        badgeBg: "bg-[rgba(35,172,241,0.1)]",
        badgeColor: "text-[#006591]",
    },
    {
        id: "contamination-rate",
        title: "CONTAMINATION RATE%",
        value: "4.1%",
        statusText: "-0.8% reduction",
        statusColor: "text-[#006c49]",
        trend: "down",
        badgeBg: "bg-[rgba(35,172,241,0.1)]",
        badgeColor: "text-[#006591]",
    },
];

const throughputBars = [
    { time: "08:00", height: 96 },
    { time: "09:00", height: 155 },
    { time: "10:00", height: 99 },
    { time: "11:00", height: 210 },
    { time: "12:00", height: 143 },
    { time: "13:00", height: 179 },
    { time: "14:00", height: 210 },
    { time: "15:00", height: 120 },
];

const Home = () => {
    const maxBarHeight = Math.max(...throughputBars.map((b) => b.height));

    return (
        <main className="max-w-[1920px] relative shrink-0 w-full z-[1]">
            <div className="flex flex-col gap-[24px] items-start p-[16px] sm:p-[24px]">

                {/* Title row */}
                <section className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[16px] w-full">
                    <div>
                        <p className="font-semibold text-[#0b1c30] text-[20px] tracking-[-0.2px] leading-[28px]">Operations Overview</p>
                        <p className="text-[#515f74] text-[13px] leading-[18px]">
                            Real-time waste processing and recovery metrics for North Sector Hub.
                        </p>
                    </div>
                    <div className="flex gap-[8px]">
                        <button className="bg-white border border-[#bbcabf] text-[#3c4a42] text-[14px] font-medium px-[17px] py-[9px] rounded-[8px]">
                            Last 24 Hours
                        </button>
                        <button className="bg-[#006c49] flex items-center gap-[8px] px-[16px] py-[9px] rounded-[8px]">
                            <IconExport />
                            <span className="text-white text-[14px] font-medium">Export PDF</span>
                        </button>
                    </div>
                </section>

                {/* KPI Cards */}
                <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[20px] w-full">
                    {kpiCards.map((item) => <KpiCard key={item.id} item={item} />)}
                </section>

                {/* Charts row */}
                <section className="grid grid-cols-1 xl:grid-cols-3 gap-[20px] w-full">

                    {/* Hourly Throughput */}
                    <div className="bg-white xl:col-span-2 h-[361px] relative rounded-[12px]">
                        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        <div className="flex flex-col gap-[24px] items-start pb-[24px] pt-[25px] px-[25px] size-full">
                            <div className="flex items-center justify-between w-full">
                                <p className="font-semibold text-[#0b1c30] text-[20px] tracking-[-0.2px] leading-[28px]">Hourly Throughput</p>
                                <div className="flex gap-[16px] items-center">
                                    {[["#10b981", "SORTED"], ["#e2e8f0", "REJECTED"]].map(([color, label]) => (
                                        <div key={label} className="flex gap-[4px] items-center">
                                            <div className="rounded-[2px] size-[12px]" style={{ background: color }} />
                                            <p className="font-bold text-[#515f74] text-[10px] uppercase leading-[15px]">{label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="h-[256px] relative w-full">
                                <div aria-hidden className="absolute border-[#f1f5f9] border-b border-l border-solid inset-0 pointer-events-none" />
                                <div className="flex gap-[8px] items-end pb-px pl-px pt-[16px] size-full">
                                    {throughputBars.map((bar) => (
                                        <div key={bar.time} className="bg-[#f4f4f4] flex-1 h-full min-w-px relative rounded-[12px]">
                                            <div aria-hidden className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                                            <div className="flex flex-col gap-[4px] items-start justify-end size-full">
                                                <div
                                                    className="bg-[#10b981] rounded-tl-[8px] rounded-tr-[8px] w-full"
                                                    style={{ height: `${(bar.height / maxBarHeight) * 100}%` }}
                                                />
                                                <div className="flex flex-col items-center pt-[8px] w-full">
                                                    <p className="text-[#94a3b8] text-[10px] text-center leading-[15px]">{bar.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Waste Categories */}
                    <div className="bg-white h-[361px] relative rounded-[12px]">
                        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        <div className="flex flex-col gap-[24px] items-start p-[25px] size-full">
                            <p className="font-semibold text-[#0b1c30] text-[20px] tracking-[-0.2px] leading-[28px]">Waste Categories</p>

                            {/* Donut placeholder */}
                            <div className="h-[186px] relative w-full flex items-center justify-center">
                                <div className="relative size-[140px]">
                                    <svg viewBox="0 0 140 140" className="size-full -rotate-90">
                                        <circle cx="70" cy="70" r="55" fill="none" stroke="#10b981" strokeWidth="22" strokeDasharray="121 237" />
                                        <circle cx="70" cy="70" r="55" fill="none" stroke="#60a5fa" strokeWidth="22" strokeDasharray="76 237" strokeDashoffset="-121" />
                                        <circle cx="70" cy="70" r="55" fill="none" stroke="#fbbf24" strokeWidth="22" strokeDasharray="62 237" strokeDashoffset="-197" />
                                        <circle cx="70" cy="70" r="55" fill="none" stroke="#cbd5e1" strokeWidth="22" strokeDasharray="86 237" strokeDashoffset="-259" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <p className="font-bold text-[#0b1c30] text-[22px] tracking-[-0.6px] leading-none">Total</p>
                                        <p className="font-bold text-[#515f74] text-[11px] uppercase leading-[16px]">PROCESSED</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-[16px] w-full">
                                {wasteLegend.map((item) => (
                                    <div key={item.label} className="flex gap-[8px] items-center">
                                        <div className={`${item.color} rounded-[12px] size-[12px]`} />
                                        <p className="font-medium text-[#515f74] text-[14px] tracking-[-0.14px] leading-[20px]">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Device status + events row */}
                <section className="grid grid-cols-1 xl:grid-cols-12 gap-[20px] w-full">

                    {/* Device Status */}
                    <div className="bg-white xl:col-span-4 flex flex-col relative rounded-[12px] overflow-hidden">
                        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        <div className="relative">
                            <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
                            <div className="flex items-center justify-between pb-[25px] pt-[24px] px-[24px]">
                                <p className="font-semibold text-[#0b1c30] text-[20px] tracking-[-0.2px] leading-[28px]">Device Status</p>
                                <p className="font-bold text-[#10b981] text-[12px] leading-[16px]">Live</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[24px] p-[24px]">
                            {deviceStatus.map((bin) => (
                                <div key={bin.name} className="flex flex-col gap-[8px]">
                                    <div className="flex items-start justify-between">
                                        <p className="text-[#0b1c30] text-[14px] leading-[20px]">{bin.name}</p>
                                        <p className="text-[#515f74] text-[14px] leading-[20px]">{bin.fill}</p>
                                    </div>
                                    <div className="bg-[#f1f5f9] h-[8px] overflow-clip relative rounded-[12px]">
                                        <div
                                            className={`absolute left-0 top-0 bottom-0 rounded-[12px] ${bin.color}`}
                                            style={{ width: `${bin.percent}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto bg-[#f8fafc] border-t border-[#f1f5f9]">
                            <div className="flex items-center justify-center py-[16px] px-[16px]">
                                <p className="font-bold text-[#515f74] text-[12px] text-center tracking-[1.2px] uppercase leading-[16px]">MANAGE ALL DEVICES</p>
                            </div>
                        </div>
                    </div>

                    {/* Live Contamination Events */}
                    <div className="bg-white xl:col-span-8 relative rounded-[12px] overflow-hidden">
                        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        <div className="flex flex-col size-full">

                            {/* Table header row */}
                            <div className="relative">
                                <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
                                <div className="flex items-center justify-between pb-[25px] pt-[24px] px-[24px]">
                                    <p className="font-semibold text-[#0b1c30] text-[20px] tracking-[-0.2px] leading-[28px]">Live Contamination Events</p>
                                    <div className="flex gap-[8px] items-center">
                                        <div className="bg-[#ba1a1a] rounded-full size-[8px]" />
                                        <p className="font-bold text-[#ba1a1a] text-[12px] uppercase leading-[16px]">ACTION REQUIRED</p>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-[640px] w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#f8fafc] border-b border-[#f1f5f9]">
                                            {["TIMESTAMP", "SOURCE", "DETECTION", "CONFIDENCE", "VISUAL", "ACTION"].map((h) => (
                                                <th key={h} className="px-[24px] py-[16px] font-semibold text-[#515f74] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
                                                    {h}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eventRows.map((row, i) => (
                                            <tr key={`${row.time}-${row.source}`} className={i > 0 ? "border-t border-[#f1f5f9]" : ""}>
                                                <td className="px-[24px] py-[20px] text-[#515f74] text-[14px] font-medium whitespace-nowrap">{row.time}</td>
                                                <td className="px-[24px] py-[20px] text-[#0b1c30] text-[14px] font-semibold whitespace-nowrap">{row.source}</td>
                                                <td className="px-[24px] py-[20px]">
                                                    <span className={`${row.detection.bg} ${row.detection.text} font-bold text-[11px] px-[8px] py-[2px] rounded-[2px]`}>
                                                        {row.detection.label}
                                                    </span>
                                                </td>
                                                <td className="px-[24px] py-[20px] text-[#0b1c30] text-[14px] font-medium">{row.confidence}</td>
                                                <td className="px-[24px] py-[14px]">
                                                    <div className="bg-[#f1f5f9] rounded-[2px] size-[40px] flex items-center justify-center text-[#94a3b8] text-[10px] font-medium">
                                                        IMG
                                                    </div>
                                                </td>
                                                <td className={`px-[24px] py-[20px] font-bold text-[14px] ${row.action.color}`}>
                                                    {row.action.label}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default Home