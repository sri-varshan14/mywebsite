"use client"
import StickyBox from "react-sticky-box";
import BlogAside from "./BlogAside";
import BlogList from "./BlogList";

const Content = () => {
    return (
        <section className="">
            <div className="flex pl-14 sm:pl-0 md:pl-0 sm:flex-col md:flex-col py-28">
                <StickyBox >
                    <BlogAside />
                </StickyBox>
                <BlogList />
            </div>
        </section>
    )
}

export default Content;
