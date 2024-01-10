const SocialLinkItemSlot = ({ href, value, children }: { href: string, value: string, children: React.ReactNode }) => {
    return (
        <a href={href}>
            <div className="bg-base-100 px-2 py-1 rounded-lg flex gap-2 border-[2px] border-base-content hover:bg-base-content hover:text-base-100 hover:fill-base-content">
                {children}
                <p className="text-inherit font-inter font-medium">{value}</p>
            </div>
        </a>
    )
}

export default SocialLinkItemSlot;
