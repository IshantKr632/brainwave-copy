import React, { useEffect, useRef, useState } from 'react';
import SectionSvg from '../assets/svg/SectionSvg';
import Button from "./Button";
import { heroBackground, robot } from '../assets';
import { MouseParallax } from 'react-just-parallax';
import { ScrollParallax } from 'react-just-parallax';
import { heroIcons } from './index';
import { loading } from '../assets';


const Hero = () => {
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

    const parallaxRef = useRef(null);

    const BackgroundCircles = ({ parallaxRef }) => {
        return (
            <div className='hidden lg:block'>
                <div className='absolute top-[10rem] left-[2rem]'>
                    <MouseParallax strength={0.04} parallaxContainerRef={parallaxRef}>
                        <div className="absolute top-[8.5rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full z-0"></div>
                        <div className="absolute top-[20rem] left-[23rem] w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full z-0"></div>
                        <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full z-0"></div>
                    </MouseParallax>
                </div>

                <div className='absolute top-[10rem] right-[2rem]'>
                    <MouseParallax strength={0.04} parallaxContainerRef={parallaxRef}>
                        <div className="absolute top-[5rem] right-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full z-0"></div>
                        <div className="absolute top-[15rem] right-[15rem] w-5 h-5 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full z-0"></div>
                        <div className="absolute top-[21rem] right-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full z-0"></div>
                    </MouseParallax>
                </div>
            </div>
        )
    };



    const Rings = () => {
        return (
            <div className='hidden lg:block'>
                <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>
        );
    };

    return (
        <Section crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings className={`mt-[-4.2rem] flex flex-col items-center`} id="hero">
            <div className='relative z-1 flex flex-col items-center justify-center mx-auto text-center gap-4 lg:pt-[12rem] pt-[10rem] max-w-[62rem] px-4 mb-12 bg-transparent'>
                <h1 className='h1 mb-4'>
                    Explore the Possibilities of AI Chatting with
                    <span className='inline-block relative ml-2'>
                        Brainwave
                        <img src="https://jsm-brainwave.com/assets/curve-DplsLMf8.png" alt="" className='xl:max-w-[330px] lg:max-w-[320px] md:max-w-[240px] sm:max-w-[200px] max-w-[210px]' />
                    </span>

                </h1>

                <p className='body-1 text-n-2 max-w-3xl mx-auto mb-4'>
                    Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
                </p>

                <Button white href="/pricing">Get Started</Button>
            </div>

            <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 p-[1rem]">
                <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                    <div className='bg-n-8 relative rounded-2xl overflow-hidden'>
                        <div className='h-[1.7rem] bg-n-10 rounded-t-[0.9rem]' />
                        <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                            <img
                                src={robot}
                                className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                                width={1024}
                                height={490}
                                alt="AI"
                            />
                        </div>
                    </div>
                    <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
                    <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
                    <ScrollParallax isAbsolutelyPositioned>
                        <ul className='relative top-[21rem] left-[-5rem] hidden px-1 py-1 bg-n-9/40 backdrop-blur border-n-1/10 border rounded-2xl w-fit xl:flex'>
                            {heroIcons.map((icon, index) => (
                                <li className='p-5' key={index}>
                                    <img src={icon} width={24} height={25} alt="icon" />
                                </li>
                            ))}
                        </ul>
                    </ScrollParallax>

                    <ScrollParallax isAbsolutelyPositioned>
                        <ul className='absolute right-[-5rem] top-[17rem] hidden xl:flex px-1 py-1 border border-n-1/10 bg-n-9/40 backdrop-blur rounded-2xl w-fit xl:gap-2 xl:items-center'>
                            <li className='p-2'>
                                <img src="https://jsm-brainwave.com/assets/image-1-CTP7EhT0.png" alt="img" width={62} height={62} className='rounded-xl' />
                            </li>

                            <li className='flex flex-col gap-2 p-2'>
                                <h6 className='font-semibold text-base'>Code Generation</h6>
                                <div className='flex items-center gap-12'>
                                    <div className='flex gap-[1px]'>
                                        <img className='w-6 h-6 border-2 border-n-12 rounded-full' src="data:image/png;base64,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" alt="" />
                                        <img className='w-6 h-6 border-2 border-n-12 rounded-full' src="data:image/png;base64,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" alt="" />
                                        <img className='w-6 h-6 border-2 border-n-12 rounded-full' src="data:image/png;base64,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" alt="" />
                                    </div>

                                    <div>
                                        <div className='body-2 text-n-13'>1m ago</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </ScrollParallax>

                    <div className='absolute left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 bottom-20'>
                        <div className='bg-n-8/80 rounded-[1.7rem] h-[3.5rem] flex items-center md:w-[31rem] px-2 gap-4 md:px-4'>
                            <img src={loading} className='w-5 h-5' alt="" />
                            AI is Generating
                        </div>
                    </div>


                </div>

                <div className='absolute top-[-54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:top-[-104%]'>
                    <img src={heroBackground} width={1440} height={1800} className='w-full' alt="" />
                    <BackgroundCircles />
                    <Rings />
                </div>
            </div>

            <h6 className='z-[100] mb-10 lg:-mt-2 text-n-4 uppercase text-sm tagline text-center p-2 mt-[1rem]'>Helping people create beautiful content at</h6>

            <div className='z-[100] justify-between max-w-[62rem] w-full grid grid-cols-2 md:grid-cols-3 items-center lg:flex mb-6 text-center mx-auto one px-4'>
                <img src="https://github.githubassets.com/assets/3m-0151c2fda0ce.svg" width={100} height={100} alt="" />
                <img src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg" width={150} height={150} alt="" />
                <img src="https://i.pinimg.com/originals/06/7b/fc/067bfcd65d667317c18a3f497cac80b9.png" width={100} height={100} alt="" />
                <img src="https://github.githubassets.com/assets/telus-df0c2109df99.svg" width={100} height={100} alt="" />
                <img src="https://github.githubassets.com/assets/sap-96248a56d312.svg" width={100} height={100} alt="" />
                <img src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg" width={100} height={100} className='lg:hidden' alt="" />
            </div>
        </Section>
    )
}

export default Hero