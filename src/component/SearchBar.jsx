import { FaSearch, FaBell } from "react-icons/fa";

import { IoIosSettings } from "react-icons/io";


const SearchBar = () => {
    return (
        <header className="bg-white h-[56px] max-w-[1920px] relative shrink-0 w-full z-[2]">
            <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex items-center justify-between h-full px-[16px] sm:px-[24px]">
                {/* Search */}
                <div className="relative flex-1 min-w-px max-w-[448px]">
                    <div className="bg-[#f8fafc] rounded-[2px] flex items-center gap-[8px] px-[12px] py-[8px]">
                        <FaSearch className="text-[#6b7280]" />
                        <span className="text-[#6b7280] text-[14px]">Search facilities or events...</span>
                    </div>
                </div>
                {/* Right icons */}
                <div className="flex items-center gap-[24px]">
                    <FaBell />
                    <IoIosSettings />
                    {/* Avatar */}
                    <div className="bg-[#e2e8f0] rounded-full size-[32px] flex items-center justify-center">
                        <span className="text-[#64748B] text-[12px] font-semibold">U</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default SearchBar