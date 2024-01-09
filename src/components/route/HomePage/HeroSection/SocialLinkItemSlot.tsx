const SocialLinkItemSlot = ({ href, value, children }: { href: string, value: string, children: React.ReactNode }) => {
    return (
        <a href={href}>
            <div className="bg-base-content px-2 py-1 rounded-lg flex gap-2">
                {children}
                <p className="text-base-100 font-inter">{value}</p>
            </div>
        </a>
    )
}

export default SocialLinkItemSlot;
