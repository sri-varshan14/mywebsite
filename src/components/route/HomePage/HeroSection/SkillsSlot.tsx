import React from "react";

const SkillsSlot = ({ children, title, content }: { children: React.ReactNode, title: string, content: string }) => {
    return (
        <div className="p-6 border-2 border-base-content rounded-xl w-96">
            {children}
            <h1 className="h3 py-5 font-poppins font-semibold">{title}</h1>
            <p className="font-raleway">{content}</p>
        </div>
    )
}

export default SkillsSlot;
