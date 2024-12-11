import React, { useState } from 'react';
import SectionSvg from '../assets/svg/SectionSvg';
import { grid } from '../assets';


const Roadmap = () => {
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
        <Section crosses crossesOffset customPaddings>
            <div className='flex flex-col lg:p-[5rem] md:p-[2rem] p-[1rem] xl:p-[6rem] items-center'>
                <div className='flex items-center justify-center gap-4'>
                    <span className='text-bg'>[</span>
                    <p className='text-n-3 tracking-widest uppercase font-grotesk text-[0.8rem]'>Ready to get started</p>
                    <span className='text-bg'>]</span>
                </div>

                <h2 className='h2 mt-[2rem]'>What we’re working on</h2>

                <div className='grid lg:grid-cols-2 gap-4 w-full h-full mt-[2rem]'>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full rounded-[30px] bg-conic-gradient p-[0.1rem] overflow-hidden'>
                            <div className='bg-black rounded-[30px] overflow-hidden'>
                                <div className='ui flex flex-col justify-between  py-[5rem]'>
                                    <div className='w-full px-[3rem] flex justify-between'>
                                        <div className='flex items-center justify-center gap-2'>
                                            <span className='text-bg'>[</span>
                                            <p className='text-n-3 tracking-widest uppercase font-grotesk text-[0.9rem]'>May 2024</p>
                                            <span className='text-bg'>]</span>
                                        </div>

                                        <div className='bg-white rounded-[10px] text-black px-5 py-1 flex gap-3'><img src="data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.0215%203.52925C14.2819%203.7896%2014.2819%204.21171%2014.0215%204.47206L6.6882%2011.8054C6.42785%2012.0657%206.00574%2012.0657%205.74539%2011.8054L2.41206%208.47206C2.15171%208.21171%202.15171%207.7896%202.41206%207.52925C2.67241%207.2689%203.09452%207.2689%203.35487%207.52925L6.2168%2010.3912L13.0787%203.52925C13.3391%203.2689%2013.7612%203.2689%2014.0215%203.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" alt="" />
                                        Done
                                        </div>
                                    </div>

                                    <div><img src="https://jsm-brainwave.com/assets/image-1-BL_C2sN6.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </Section>
    )
}

export default Roadmap