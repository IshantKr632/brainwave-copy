import React from 'react';
import SectionSvg from '../assets/svg/SectionSvg';
import Button from './Button';
import brainwaveSymbol from '../assets/brainwave-symbol.svg';
import { collabApps } from './index';
import { curve1, curve2 } from '../assets';

const Collabration = () => {
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

    const LeftCurve = () => {
        return (
            <div className='hidden absolute right-full top-1/2 w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block'>
                <img src={curve1} width={522} height={182} alt="" />
            </div>
        )
    }

    const RightCurve = () => {
        return (
            <div className='hidden absolute left-full top-1/2 w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block'>
                <img src={curve2} width={162} height={76} alt="" />
            </div>
        )
    }

    return (
        <Section crosses crossesOffset customPaddings className='flex flex-col lg:flex-row justify-between items-center pt-[6rem] me text-left lg:px-[7rem] md:px-8 px-4'>
            <div className='max-w-[25rem] lg:text-left text-center flex flex-col gap-4 mb-4'>
                <h2 className='h2'>AI Chat App for seamless collaboration</h2>
                <span className='flex gap-8 mt-[1rem]'>
                    <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" alt="" />
                    <h5 className='text-lg text-neutral-200'>Seamless Integration</h5>
                </span>
                <p className='text-n-4 text-md max-w-[22rem]'>With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
                <span className='flex gap-8 mt-[1rem]'>
                    <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" alt="" />
                    <h5 className='text-lg text-neutral-200'>Smart Automation</h5>
                </span>
                <span className='flex gap-8 mt-[1rem]'>
                    <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" alt="" />
                    <h5 className='text-lg text-neutral-200'>Top-notch Security</h5>
                </span>
                <a href="#">
                    <Button href="#" className='mt-[3rem]'>Try It Now</Button>
                </a>
            </div>
            <div className='flex flex-col gap-4 xl:pr-[8rem] mt-[2rem]'>
                <p className='text-n-4 text-md max-w-[22rem] px-1 md:px-0 his'>
                    With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.
                </p>

                <div className='relative md:top-[4rem] top-4 left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-90 md:scale-100 c'>
                    <div className='flex w-60 aspect-square m-auto border border-n-6 rounded-full'>
                        <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
                            <div className='flex items-center justify-center w-full h-full rounded-full bg-n-8'>
                                <img src={brainwaveSymbol} width={48} height={48} alt="" />
                            </div>
                        </div>
                    </div>

                    <ul>
                        {collabApps.map((app, index) => (
                            <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                                <div className={`border border-n-1/15 relative top-[-1.6rem] w-[3.2rem] grid h-[3.2rem] bg-n-7 rounded-xl place-items-center -rotate-${index * 45}`}>
                                    <img className='m-auto' width={app.width} height={app.height} alt={app.title} src={app.icon} />
                                </div>
                            </li>
                        ))}
                    </ul>

                    <LeftCurve />
                    <RightCurve />
                </div>
            </div>

        </Section>
    )
}

export default Collabration;