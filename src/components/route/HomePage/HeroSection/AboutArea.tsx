"use client"
import ProfileImage from '@/asserts/img/image.png'
import ArrowUpRightSVG from '@/components/svg/ArrowUpRightSVG';
import GithubSVG from '@/components/svg/GithubSVG';
import { useWindowSize } from '@/hooks/WindowSize';
import Image from "next/image";
import Link from 'next/link';
import { useStickyBox } from 'react-sticky-box';

const AboutArea = () => {
    const stickyRef = useStickyBox({ offsetTop: 20, offsetBottom: 20 })
    const windowSize = useWindowSize()
    return (
        <aside ref={stickyRef}>
            <div className="sm:w-full md:w-full lg:w-full px-40 sm:px-2 md:px-2 lg:px-5 bg-base-100 z-50 sm:border-b-2 md:border-b-2 lg:border-b-2 border-base-content pb-5">
                <div className='flex flex-col items-end sm:items-center md:items-center lg:items-center'>
                    <div className='flex sm:pt-2 md:pt-3 lg:pt-5 gap-2 items-center'>
                        <Image className="w-44 sm:w-24 md:w-28 lg:w-36 object-contain aspect-square rounded-2xl sm:mx-auto md:mx-auto" src={ProfileImage} alt="" />
                        {windowSize.width <= 1024 &&
                            <div className=''>
                                <p className='sm:visible md:visible lg:visible xl:hidden 2xl:hidden h3 font-semibold font-poppins text-right sm:text-center md:text-center'>He/Him</p>
                                <span className='sm:visible md:visible lg:visible flex font-bold d2 font-poppins items-end leading-normal sm:leading-tight'>Srivarshan&nbsp;<p className='font-medium font-poppins d2 sm:leading-tight'>Geetha</p></span>

                            </div>
                        }
                    </div>
                    <div className='py-5 sm:py-1 flex flex-col items-end sm:items-center md:items-center lg:items-center'>
                        {windowSize.width > 1024 &&
                            <>
                                <p className='sm:hidden md:hidden lg:hidden h3 font-semibold font-poppins text-right sm:text-center md:text-center'>He/Him</p>
                                <span className='sm:hidden md:hidden lg:hidden flex font-bold d2 font-poppins items-end leading-normal sm:leading-tight'>Srivarshan&nbsp;<p className='font-medium font-poppins d2 sm:leading-tight'>Geetha</p></span>
                            </>
                        }
                        <p className=' font-normal font-poppins break-words w-4/5 sm:w-full md:w-full lg:w-full text-right sm:text-center md:text-center lg:text-center'>Computer Science Student based in Chennai, India</p>
                        <Link className='underline ' href="https://github.com/sri-varshan14" target='_blank'>
                            <span className='flex pt-3 sm:pt-0 md:pt-0'>
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
