import { ReactNode } from "react";

const SideBarIconSlot = ({ children, tooltip_data }: { children: ReactNode, tooltip_data: string }) => {
    return (
        <span className="w-full relative before:content-[' '] before:w-1 before:h-full before:absolute hover:before:bg-primary before:left-0 before:transition-all before:duration-300 stroke-base-content hover:stroke-primary" data-tip={tooltip_data}>
            {children}
        </span>
    )
}

export default SideBarIconSlot;
