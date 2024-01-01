import ArrowUpRightSVG from "@/components/svg/ArrowUpRightSVG"

const TalkToMe = () => {
    return (
        <>
            <p className="d3 font-poppins font-medium py-4">Contact</p>
            <div className="max-w-2xl flex items-center">
                <ArrowUpRightSVG cssClasses="w-7 p-1 bg-base-content stroke-base-100 rounded-tr-xl" />
                <p className="px-3 font-poppins underline underline-offset-8">Want to Talk to Me?</p>
            </div>
        </>
    )
}

export default TalkToMe;
