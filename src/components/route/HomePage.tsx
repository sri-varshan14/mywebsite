import Footer from "../common/Footer";
import SideBar from "../common/SideBar";
import ThemeToggler from "../common/ThemeToggler";
import HeroSection from "./HomePage/HeroSection";
import MotionTextAni from "./HomePage/MotionTextAni";
import NewsLetterSection from "./HomePage/NewsLetterSection";
import WorkSection from "./HomePage/WorkSection";

const HomePage = () => {
    return (
        <>
            <SideBar />
            <ThemeToggler />
            <HeroSection />
            <MotionTextAni />
            <WorkSection />
            <NewsLetterSection />
            <Footer />
        </>
    )
}

export default HomePage;
