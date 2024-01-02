import Link from "next/link";
import ArrowUpSVG from "../svg/ArrowUpSVG";
import LogoSVG from "../svg/LogoSVG";

const Footer = () => {
    return (
        <footer className="pl-14 py-10">
            <div className="h-[2px] bg-base-content px-8 my-8"></div>
            <div className="flex px-8 items-center justify-between ">
                <p className="font-semibold">Copyright &copy; 2024 Srivarshan</p>
                <LogoSVG cssClasses="w-10 fill-base-content" />
                <Link href="#">
                    <span className="flex items-center justify-center">
                        <p className="font-bold">Back to Top</p>
                        <ArrowUpSVG cssClasses="w-6 stroke-base-content" />
                    </span>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;
