import SocialLinks from "./SocialLinks";
import Intro from "./Intro";
import TalkToMe from "./TalkToMe";
import Skills from "./Skills";

const DetailArea = () => {
    return (
        <div className="w-3/5 sm:w-full md:w-full lg:w-full sm:px-2 md:px-2 lg:px-5 px-3 flex-col sm:flex sm:items-center md:flex md:items-center lg:flex lg:items-center mx-auto">
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
