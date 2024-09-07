import React from 'react';
import SectionSvg from '../assets/svg/SectionSvg';
import { service1 } from '../assets';

const Services = () => {

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
    <Section crosses crossesOffset={`lg:translate-y-[5.25rem]`} customPaddings className={`lg:px-[7rem] md:px-8 px-4 py-[10rem] text-center items-center gap-6`}>
      <div className='flex flex-col gap-[1rem]'>
        <h2 className='h2'>Generative AI made for creaters.</h2>
        <p className='p text-n-4'>Brainwave unlocks the potential of AI-powered applications</p>
      </div>

      <div className='relative mt-[4rem]'>
        <div className='xl:h-[46rem] h-[39rem] relative z-1 items-center mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20'>
          <div className='w-full h-full pointer-events-none md:w-3/5 xl:w-auto absolute top-0 left-0'>
            <img src={service1} className='w-full h-full object-cover md:object-right' width={800} height={730} alt="" />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Services