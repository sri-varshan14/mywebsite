"use client"
import ParallaxText from "@/hooks/ParallaxText"

const MotionTextAni = () => {
    return (
        <section className="my-10 py-10 border-y-2 border-y-base-content">
            <ParallaxText baseVelocity={-2}><p className="d1 font-audiowide">Srivarshan</p></ParallaxText>
            <ParallaxText baseVelocity={2}><p className="d2 font-audiowide">Developer</p></ParallaxText>
        </section>
    )
}

export default MotionTextAni;
