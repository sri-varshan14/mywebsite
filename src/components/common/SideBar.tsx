"use client"
import { useWindowSize } from "@/hooks/WindowSize";
import SideBarIconSlot from "../slots/SideBarIconSlot";
import ArrowUpRightSVG from "../svg/ArrowUpRightSVG";
import Briefcase from "../svg/BriefcaseSVG";
import HomeSVG from "../svg/HomeSVG";
import LogoSVG from "../svg/LogoSVG";
import MenuSVG from "../svg/MenuSVG";
import MessageSquare from "../svg/MessageSquare";
import SearchSVG from "../svg/SearchSVG";

const SideBar = () => {
    let windowSize = useWindowSize();
    const cssClasses = "w-6 stroke-base-inherit hover:stroke-inherit relative mx-auto my-1 sm:my-0";
    return (
        <header className="h-screen sm:h-14 sm:w-full w-14 bg-base-100 fixed sm:bottom-0 left-0">
            <div className="h-full flex flex-col items-center justify-between sm:justify-center py-5 sm:py-0 border-r-2 sm:border-t-2 sm:border-r-0 border-r-base-content">
                {windowSize.width >= 481 &&
                    <LogoSVG cssClasses="w-6 fill-base-content my-1 " />
                }
                <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
                    <SideBarIconSlot tooltip_data="Home">
                        <HomeSVG cssClasses={cssClasses} />
                    </SideBarIconSlot>
                    <SideBarIconSlot tooltip_data="Search">
                        <SearchSVG cssClasses={cssClasses} />
                    </SideBarIconSlot>
                    <SideBarIconSlot tooltip_data="Works">
                        <Briefcase cssClasses={cssClasses} />
                    </SideBarIconSlot>
                    <SideBarIconSlot tooltip_data="Message me">
                        <MessageSquare cssClasses={cssClasses} />
                    </SideBarIconSlot>
                    <SideBarIconSlot tooltip_data="Connect">
                        <ArrowUpRightSVG cssClasses={cssClasses} />
                    </SideBarIconSlot>
                </div>
                {windowSize.width >= 481 &&
                    <MenuSVG cssClasses={cssClasses} />
                }
            </div>
        </header>
    )
}

export default SideBar;
