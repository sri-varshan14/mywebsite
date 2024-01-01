import SocialLinks from "./SocialLinks";
import Intro from "./Intro";
import TalkToMe from "./TalkToMe";
import Skills from "./Skills";

const DetailArea = () => {
    return (
        <div className="w-3/5 sm:w-full md:w-full sm:px-5 md:px-5 px-3 flex-col sm:flex sm:items-center md:flex md:items-center mx-auto">
            <Intro />
            <div className="divider"></div>
            <SocialLinks />
            <div className="divider"></div>
            <Skills />
            <div className="divider"></div>
            <TalkToMe />
            <div className="divider"></div>
        </div>
    )
}

export default DetailArea;
