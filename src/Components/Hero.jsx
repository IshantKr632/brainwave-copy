import React from 'react';
import SectionSvg from '../assets/svg/SectionSvg';
import Button from "./Button";
import { robot } from '../assets';

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

    return (
        <Section crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings className={`mt-[-4.2rem] flex flex-col items-center`} id="hero">
            <div className='relative z-1 flex flex-col items-center justify-center mx-auto text-center gap-4 lg:pt-[12rem] pt-[10rem] max-w-[62rem] px-4 mb-12'>
                <h1 className='h1 mb-4'>
                    Explore the Possibilities of AI Chatting with
                    <span className='inline-block relative'>
                        Brainwave
                        <img src="https://jsm-brainwave.com/assets/curve-DplsLMf8.png" alt="" className='xl:max-w-[330px] lg:max-w-[320px] md:max-w-[240px] sm:max-w-[200px] max-w-[210px]' />
                    </span>
                </h1>

                <p className='body-1 text-n-2 max-w-3xl mx-auto mb-4'>
                    Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
                </p>

                <Button white href="/pricing">Get Started</Button>
            </div>

           <div className='max-w-[62rem] relative w-full z-1 px-4 py-4 mx-auto'>
            <div className='bg-conic-gradient rounded-2xl p-0.5'>
                <div className='bg-n-8 relative rounded-2xl'>
                    <div className='h-[1.7rem] bg-n-10 rounded-t-[0.9rem]' />
                    <div className='aspect-[33/40] overflow-hidden  md:aspect-[688/490] lg:aspect-[1024/490]'>
                        <img src={robot} alt="" width={1440} height={1080} />
                    </div>
                    <div className='h-[1.7rem] bg-n-10 rounded-b-[0.9rem]' />
                </div>
            </div>
           </div>
        </Section>
    )
}

export default Hero