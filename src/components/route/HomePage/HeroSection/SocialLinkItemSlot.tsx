const SocialLinkItemSlot = ({ href, value, children }: { href: string, value: string, children: React.ReactNode }) => {
    return (
        <a href={href}>
            <div className="bg-base-300 px-2 py-1 rounded-lg flex gap-2 border-[1px] border-base-content">
                {children}
                <p className="text-base-content font-inter">{value}</p>
            </div>
        </a>
    )
}

export default SocialLinkItemSlot;
