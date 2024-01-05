import { ReactNode } from "react";

const SideBarIconSlot = ({ children }: { children: ReactNode }) => {
    return (
        <span className="w-full relative before:content-[' '] before:w-1 before:h-full before:absolute hover:before:bg-base-content before:left-0 before:transition-all before:duration-300 stroke-base-content hover:stroke-base-content before:sm:bg-transparent">
            {children}
        </span>
    )
}

export default SideBarIconSlot;
