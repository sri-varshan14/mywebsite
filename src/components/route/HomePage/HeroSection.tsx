"use client"
import AboutArea from "./HeroSection/AboutArea";
import DetailArea from "./HeroSection/DetailArea";
import StickyBox from "react-sticky-box";

const HeroSection = () => {
    return (
        <section className="w-screen min-h-screen relative" id="top">
            <div className="flex pl-14 sm:pl-0 md:pl-0 lg:pl-0 sm:flex-col md:flex-col lg:flex-col py-28">
                <StickyBox >
                    <AboutArea />
                </StickyBox>
                <DetailArea />
            </div>
        </section>
    )
}

export default HeroSection;
