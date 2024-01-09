import InstagramSVG from "@/components/svg/InstagramSVG";
import LinkedInSVG from "@/components/svg/LinkedInSVG";
import MailSVG from "@/components/svg/MailSVG";
import TwitterSVG from "@/components/svg/TwitterSVG";
import SocialLinkItemSlot from "./SocialLinkItemSlot";

const SocialLinks = () => {
    const cssClasses = "w-6 fill-base-300"
    const links = [
        { logo: InstagramSVG, href: "https://www.instagram.com/_sri_varshan_geetha/", value: "@_sri_varshan_geetha" },
        { logo: MailSVG, href: "mailto:me@srivarshan.dev", value: "me@srivarshan.dev" },
        { logo: LinkedInSVG, href: "https://www.linkedin.com/in/sri-varshan-aa853a233/", value: "@Sri Varshan" },
        { logo: TwitterSVG, href: "https://twitter.com/Sri4574", value: "@Sri4574" },
    ]
    return (
        <div className="my-5 max-w-2xl sm:flex sm:flex-col md:flex md:flex-col items-center">
            <p className="d3 py-4 font-poppins font-medium">Social Links</p>
            <div className="flex flex-wrap items-center justify-center gap-2 py-5">
                {
                    links.map(link => {
                        return (
                            <SocialLinkItemSlot key={link.href} href={link.href} value={link.value}>
                                {link.logo({ cssClasses })}
                            </SocialLinkItemSlot>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default SocialLinks;
