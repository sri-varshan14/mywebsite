import React from "react";

const SkillsSlot = ({ children, title, content }: { children: React.ReactNode, title: string, content: string }) => {
    return (
        <div className="p-6 sm:px-3 border-2 border-base-content rounded-xl max-w-2xl">
            {children}
            <h1 className="h3 py-5 font-poppins font-semibold">{title}</h1>
            <p className="font-inter">{content}</p>
        </div>
    )
}

export default SkillsSlot;
