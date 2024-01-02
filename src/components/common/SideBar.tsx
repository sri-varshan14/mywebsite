"use client"
import { useWindowSize } from "@/hooks/WindowSize";
import SideBarIconSlot from "../slots/SideBarIconSlot";
import ArrowUpRightSVG from "../svg/ArrowUpRightSVG";
import HomeSVG from "../svg/HomeSVG";
import LogoSVG from "../svg/LogoSVG";
import MenuSVG from "../svg/MenuSVG";
import SearchSVG from "../svg/SearchSVG";
import BriefcaseSVG from "../svg/BriefcaseSVG";
import MessageSquareSVG from "../svg/MessageSquare";
import Link from "next/link";
import { useState } from "react";

const SideBar = () => {
    const [toggleSideBar, setToggleSideBar] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    let windowSize = useWindowSize();
    const cssClasses = "w-6 stroke-base-content relative mx-auto my-1 sm:my-0 md:my-0";
    return (
        <header className="h-screen sm:h-14 md:h-14 sm:w-full md:w-full w-14 bg-base-100 fixed sm:bottom-0 md:bottom-0 left-0 z-[2000]">
            <div className="h-full flex flex-col items-center justify-between sm:justify-center md:justify-center py-5 sm:py-0 md:py-0 border-r-2 sm:border-t-2 md:border-t-2 sm:border-r-0 md:border-r-0 border-r-base-content border-t-base-content">
                {windowSize.width >= 769 &&
                    <Link href="/">
                        <LogoSVG cssClasses="w-6 fill-base-content my-1 " />
                    </Link>
                }
                <div className="w-full flex flex-col sm:flex-row md:flex-row items-center justify-center gap-4">
                    <SideBarIconSlot>
                        <Link className="flex flex-col items-center " href="/">
                            <HomeSVG cssClasses={cssClasses} />
                            <p className="text-xs">Home</p>
                        </Link>
                    </SideBarIconSlot>
                    <SideBarIconSlot>
                        <span className="flex flex-col items-center cursor-pointer" onClick={() => setSearchBar(true)} >
                            <SearchSVG cssClasses={cssClasses} />
                            <p className="text-xs ">Search</p>
                        </span>
                    </SideBarIconSlot>
                    <SideBarIconSlot >
                        <Link className="flex flex-col items-center" href="/works">
                            <BriefcaseSVG cssClasses={cssClasses} />
                            <p className="text-xs">Works</p>
                        </Link>
                    </SideBarIconSlot>
                    <SideBarIconSlot>
                        <Link className="flex flex-col items-center" href="/blog">
                            <MessageSquareSVG cssClasses={cssClasses} />
                            <p className="text-xs">Blogs</p>
                        </Link>
                    </SideBarIconSlot>
                    <SideBarIconSlot>
                        <Link className="flex flex-col items-center" href="/connect">
                            <ArrowUpRightSVG cssClasses={cssClasses} />
                            <p className="text-xs">Connect</p>
                        </Link>
                    </SideBarIconSlot>
                </div>
                {windowSize.width >= 769 &&
                    <span onClick={() => setToggleSideBar(!toggleSideBar)}>
                        <MenuSVG cssClasses={cssClasses + " hover:stroke-base-content"} />
                    </span>
                }
            </div>
        </header>
    )
}

export default SideBar;
