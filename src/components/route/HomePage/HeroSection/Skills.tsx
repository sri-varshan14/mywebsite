import WebSVG from "@/components/svg/WebSVG";
import SkillsSlot from "./SkillsSlot";
import ComputerVisionSVG from "@/components/svg/ComputerVisionSVG";
import ApiSVG from "@/components/svg/ApiSVG";

const Skills = () => {
    return (
        <div className="sm:w-full md:w-full lg:w-full">
            <p className="d3 font-poppins font-medium py-4">Skills</p>
            <div className="flex py-5 gap-8 flex-wrap">
                <SkillsSlot title="Web Development." content="Proficient in crafting dynamic and responsive websites using React, my skill set encompasses the creation of engaging user interfaces and seamless user experiences. Leveraging React's versatility and efficiency, I design and develop websites that merge innovation with functionality. From conceptualization to execution, my expertise in React empowers me to build interactive and visually captivating online platforms.">
                    <WebSVG cssClasses="w-6 fill-base-content" />
                </SkillsSlot>
                <SkillsSlot title="Computer Vision." content="Fascinated by computer vision, I dive into advanced frameworks and algorithms to decode visual data intricacies. Proficient in this field, I strive to pioneer intelligent systems capable of perceiving and analyzing visual information. My expertise in computer vision fuels my quest to revolutionize technology, aiming to create solutions that redefine human-computer interaction.">
                    <ComputerVisionSVG cssClasses="w-6 fill-base-content" />
                </SkillsSlot>
                <SkillsSlot title="API Development." content="Proficient in API development, I specialize in building robust and scalable interfaces for seamless data communication. From designing endpoints to ensuring efficient data transfer, I employ my expertise to develop APIs that facilitate smooth integration between different systems. My focus on reliability and efficiency drives my commitment to crafting APIs that empower applications to perform at their best.">
                    <ApiSVG cssClasses="w-6 fill-base-content" />
                </SkillsSlot>
            </div>
        </div >
    )
}

export default Skills;
