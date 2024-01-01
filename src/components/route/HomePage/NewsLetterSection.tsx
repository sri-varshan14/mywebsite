const NewsLetterSection = () => {
    return (
        <section className="w-screen bg-base-content px-[8vw] md:px-[6vw] sm:px-[6vw]">
            <div className="flex py-20 items-center justify-evenly flex-wrap">
                <h1 className="d1 text-base-100 max-w-md">Never miss another article.</h1>
                <div className="">
                    <form className="flex items-center gap-5 py-5">
                        <input className="bg-base-content border-b-2 border-b-base-100 text-base-100 outline-none body py-2 max-w-[30ch]" type="email" placeholder="Enter your email here" />
                        <input className="text-base-content bg-base-100 px-7 py-2  rounded-full font-semibold lead" type="button" value="Join" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewsLetterSection;
