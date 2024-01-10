import ArrowUpRightSVG from "@/components/svg/ArrowUpRightSVG"
import Link from "next/link";

const TalkToMe = () => {
    return (
        <>
            <p className="d3 font-poppins font-medium py-4">Contact</p>
            <Link href="/#connect">
                <div className="max-w-2xl flex items-center">
                    <ArrowUpRightSVG cssClasses="w-7 p-1 bg-base-content stroke-base-100 rounded-tr-xl" />
                    <p className="px-3 font-inter underline underline-offset-8 hover:tracking-tighter transition-all duration-200">Want to Talk to Me?</p>
                </div>
            </Link>
        </>
    )
}

export default TalkToMe;
