import ProfileImage from '@/asserts/img/image.png'
import ArrowUpRightSVG from '@/components/svg/ArrowUpRightSVG';
import GithubSVG from '@/components/svg/GithubSVG';
import Image from "next/image";
import Link from 'next/link';
import { useStickyBox } from 'react-sticky-box';

const AboutArea = () => {
    const stickyRef = useStickyBox({ offsetTop: 20, offsetBottom: 20 })
    return (
        <aside ref={stickyRef}>
            <div className="sm:w-full md:w-full lg:w-full px-40 sm:px-5 md:px-5 lg:px-20 bg-base-100 z-50">
                <div className='flex flex-col items-end sm:items-center md:items-center'>
                    <div className='sm:pt-14 md:pt-14'>
                        <Image className="w-44 object-contain aspect-square rounded-2xl sm:mx-auto md:mx-auto" src={ProfileImage} alt="" />
                    </div>
                    <div className='py-5 flex flex-col items-end sm:items-center md:items-center'>
                        <p className='h3 font-semibold font-robotocon text-right sm:text-center md:text-center'>He/Him</p>
                        <span className='flex font-bold d2 font-robotocon items-end'>Srivarshan&nbsp;<p className='font-medium font-robotocon d2'>Geetha</p></span>
                        <p className=' font-normal font-poppins break-words w-4/5 sm:w-full md:w-full text-right sm:text-center md:text-center'>Computer Science Student based in Chennai, India</p>
                        <Link className='underline ' href="https://github.com/sri-varshan14" target='_blank'>
                            <span className='flex pt-3'>
                                <GithubSVG cssClasses='w-5 fill-base-content mx-3' />
                                <p className='underline'>sri-varshan14</p>
                                <ArrowUpRightSVG cssClasses='w-4' />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default AboutArea;
