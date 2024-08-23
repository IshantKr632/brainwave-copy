import React from 'react';
import SectionSvg from '../assets/svg/SectionSvg';
import { benefit } from './my';
import { benefitIcon1 } from '../assets';
import { benefitIcon2, benefitIcon3, benefitIcon4 } from '../assets';
import { IoIosArrowForward } from "react-icons/io";

const Benifits = () => {
    const Section = ({
        className,
        crosses,
        id,
        crossesOffset,
        customPaddings,
        children
    }) => {
        return (
            <div id={id} className={`relative ${customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`} ${className || ""}`}>
                {children}
                <div className='hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10' />
                <div className='hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10' />

                {crosses && (
                    <>
                        <div className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${crossesOffset && crossesOffset} pointer-events-none lg:block xl:left-10 right-10`} />
                        <SectionSvg crossesOffset={crossesOffset} />
                    </>
                )}
            </div>
        )
    }

    const BenefitCardOne = ({ children }) => {
        return (
            <div className="relative">
                <svg preserveAspectRatio="none" viewBox="0 0 384 366" fill="#000" xmlns="http://www.w3.org/2000/svg">
                    <path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="white" stroke-opacity="0.15" stroke-width="2" />
                    <path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="url(#paint0_linear_333_9188)" stroke-opacity="0.85" stroke-width="2" />
                    <defs>
                        <linearGradient id="paint0_linear_333_9188" x1="192" y1="0" x2="192" y2="366" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#fff" />
                            <stop offset="0.562842" stop-color="#000" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    {children}
                </div>
            </div>
        )
    }

    return (
        <Section crosses crossesOffset="lg:translate-y-[2rem]" customPaddings className={`flex flex-col items-center pt-[6rem] text-center px-4`}>
            <div className='lg:max-w-2xl md:max-w-md'>
                <h2 className='h2'>Chat Smarter, Not Harder with Brainwave</h2>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full lg:px-[9rem] md:px-[7rem] px-4 gap-16 py-[5em]'>
                <div className='bg-n-8 border border-slate-950 rounded-[10px] w-auto h-[18rem] relative block y overflow-hidden'>
                    <div className='absolute inset-0 bg-cover bg-center x md:opacity-0 opacity-30 border md:border-transparent rounded-[10px] transition-opacity' style={{ backgroundImage: "url('https://jsm-brainwave.com/assets/image-2-DhSZK1Xt.png')" }}></div>
                    <div className='relative flex flex-col justify-between w-full h-full px-4 py-4'>
                        <div className='flex flex-col gap-4 text-left'>
                            <h5 className='h5'>Ask Anything</h5>
                            <p className='text-n-3 body-2'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <img src={benefitIcon1} alt="" />
                            <a href="#pricing" className='flex items-center justify-center gap-4 tracking-wider font-code uppercase font-bold text-xs text-n-1'>
                                Explore More
                                <IoIosArrowForward className='text-xl' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-n-8 border border-slate-950 rounded-[10px] w-auto h-[18rem] relative block y overflow-hidden'>
                    <div className='absolute inset-0 bg-cover bg-center x md:opacity-0 opacity-30 border md:border-transparent rounded-[10px] transition-opacity' style={{ backgroundImage: "url('https://jsm-brainwave.com/assets/image-2-DhSZK1Xt.png')" }}></div>
                    <div className='relative flex flex-col justify-between w-full h-full px-4 py-4'>
                        <div className='flex flex-col gap-4 text-left'>
                            <h5 className='h5'>Improve everyday</h5>
                            <p className='text-n-3 body-2'>The app uses natural language processing to understand user queries and provide accurate and relevant responses.</p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <img src={benefitIcon2} alt="" />
                            <a href="#pricing" className='flex items-center justify-center gap-4 tracking-wider font-code uppercase font-bold text-xs text-n-1'>
                                Explore More
                                <IoIosArrowForward className='text-xl' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-n-8 border border-slate-950 rounded-[10px] w-auto h-[18rem] relative block y overflow-hidden'>
                    <div className='absolute inset-0 bg-cover bg-center x md:opacity-0 opacity-30 border md:border-transparent rounded-[10px] transition-opacity' style={{ backgroundImage: "url('https://jsm-brainwave.com/assets/image-2-DhSZK1Xt.png')" }}></div>
                    <div className='relative flex flex-col justify-between w-full h-full px-4 py-4'>
                        <div className='flex flex-col gap-4 text-left'>
                            <h5 className='h5'>Connect everywhere</h5>
                            <p className='text-n-3 body-2'>Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.</p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <img src={benefitIcon3} alt="" />
                            <a href="#pricing" className='flex items-center justify-center gap-4 tracking-wider font-code uppercase font-bold text-xs text-n-1'>
                                Explore More
                                <IoIosArrowForward className='text-xl' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-n-8 border border-slate-950 rounded-[10px] w-auto h-[18rem] relative block y overflow-hidden'>
                    <div className='absolute inset-0 bg-cover bg-center x md:opacity-0 opacity-30 border md:border-transparent rounded-[10px] transition-opacity' style={{ backgroundImage: "url('https://jsm-brainwave.com/assets/image-2-DhSZK1Xt.png')" }}></div>
                    <div className='relative flex flex-col justify-between w-full h-full px-4 py-4'>
                        <div className='flex flex-col gap-4 text-left'>
                            <h5 className='h5'>Fast responding</h5>
                            <p className='text-n-3 body-2'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <img src={benefitIcon4} alt="" />
                            <a href="#pricing" className='flex items-center justify-center gap-4 tracking-wider font-code uppercase font-bold text-xs text-n-1'>
                                Explore More
                                <IoIosArrowForward className='text-xl' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-n-8 border border-slate-950 rounded-[10px] w-auto h-[18rem] relative block y overflow-hidden'>
                    <div className='absolute inset-0 bg-cover bg-center x md:opacity-0 opacity-30 border md:border-transparent rounded-[10px] transition-opacity' style={{ backgroundImage: "url('https://jsm-brainwave.com/assets/image-2-DhSZK1Xt.png')" }}></div>
                    <div className='relative flex flex-col justify-between w-full h-full px-4 py-4'>
                        <div className='flex flex-col gap-4 text-left'>
                            <h5 className='h5'>Ask anything</h5>
                            <p className='text-n-3 body-2'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <img src={benefitIcon1} alt="" />
                            <a href="#pricing" className='flex items-center justify-center gap-4 tracking-wider font-code uppercase font-bold text-xs text-n-1'>
                                Explore More
                                <IoIosArrowForward className='text-xl' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-n-8 border border-slate-950 rounded-[10px] w-auto h-[18rem] relative block y overflow-hidden'>
                    <div className='absolute inset-0 bg-cover bg-center x md:opacity-0 opacity-30 border md:border-transparent rounded-[10px] transition-opacity' style={{ backgroundImage: "url('https://jsm-brainwave.com/assets/image-2-DhSZK1Xt.png')" }}></div>
                    <div className='relative flex flex-col justify-between w-full h-full px-4 py-4'>
                        <div className='flex flex-col gap-4 text-left'>
                            <h5 className='h5'>Improve everyday</h5>
                            <p className='text-n-3 body-2'>The app uses natural language processing to understand user queries and provide accurate and relevant responses.</p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <img src={benefitIcon2} alt="" />
                            <a href="#pricing" className='flex items-center justify-center gap-4 tracking-wider font-code uppercase font-bold text-xs text-n-1'>
                                Explore More
                                <IoIosArrowForward className='text-xl' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </Section>
    )
}

export default Benifits;
