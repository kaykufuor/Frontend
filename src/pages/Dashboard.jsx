import { SideNav } from "../component/SideNav";
import SearchBar from "../component/SearchBar";
import { Outlet } from "react-router-dom";

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