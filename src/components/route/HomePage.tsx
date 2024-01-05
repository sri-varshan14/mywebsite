import Footer from "../common/Footer";
import SideBar from "../common/SideBar";
import ThemeToggler from "../common/ThemeToggler";
import HeroSection from "./HomePage/HeroSection";
import MotionTextAni from "./HomePage/MotionTextAni";
import NewsLetterSection from "./HomePage/NewsLetterSection";

const HomePage = () => {
    return (
        <>
            <SideBar />
            <HeroSection />
            <MotionTextAni />
            <div className="w-screen min-h-screen"></div>
            <NewsLetterSection />
            <div className="w-screen min-h-screen"></div>
            <ThemeToggler />
            <Footer />
        </>
    )
}

export default HomePage;
