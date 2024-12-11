import React from 'react';
import SectionSvg from '../assets/svg/SectionSvg';
import Buttons from './Button';

const Pricing = () => {
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

    const Stars = () => {
        <svg width="952" height="396" viewBox="0 0 952 396" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.35">
                <circle cx="417" cy="161" r="4" fill="white" />
                <circle opacity="0.5" cx="515" cy="116" r="2" fill="white" />
                <circle opacity="0.5" cx="423" cy="279" r="4" fill="white" />
                <circle opacity="0.3" cx="366" cy="394" r="2" fill="white" />
                <circle cx="265" cy="327" r="2" fill="white" />
                <circle opacity="0.2" cx="362" cy="209" r="2" fill="white" />
                <circle opacity="0.3" cx="548" cy="211" r="2" fill="white" />
                <circle opacity="0.2" cx="607" cy="281" r="2" fill="white" />
                <circle opacity="0.21" cx="789" cy="281" r="2" fill="white" />
                <circle cx="362" cy="65" r="2" fill="white" />
                <circle opacity="0.3" cx="192" cy="132" r="2" fill="white" />
                <circle cx="743" cy="2" r="2" fill="white" />
            </g>
            <path d="M834 150C827.373 150 822 144.627 822 138C822 131.373 827.373 126 834 126C840.627 126 846 131.373 846 138C846 144.627 840.627 150 834 150Z" fill="url(#paint0_linear_701_17365)" />
            <path d="M4 206C1.79086 206 4.76837e-07 204.209 4.76837e-07 202C4.76837e-07 199.791 1.79086 198 4 198C6.20914 198 8 199.791 8 202C8 204.209 6.20914 206 4 206Z" fill="url(#paint1_linear_701_17365)" />
            <path d="M948 206C945.791 206 944 204.209 944 202C944 199.791 945.791 198 948 198C950.209 198 952 199.791 952 202C952 204.209 950.209 206 948 206Z" fill="url(#paint2_linear_701_17365)" />
            <path d="M154 326C149.582 326 146 322.418 146 318C146 313.582 149.582 310 154 310C158.418 310 162 313.582 162 318C162 322.418 158.418 326 154 326Z" fill="url(#paint3_linear_701_17365)" />
            <defs>
                <linearGradient id="paint0_linear_701_17365" x1="834" y1="126" x2="834" y2="150" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#88E5BE" />
                    <stop offset="1" stop-color="#1A1A32" />
                </linearGradient>
                <linearGradient id="paint1_linear_701_17365" x1="4" y1="198" x2="4" y2="206" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#DD734F" />
                    <stop offset="1" stop-color="#1A1A32" />
                </linearGradient>
                <linearGradient id="paint2_linear_701_17365" x1="948" y1="198" x2="948" y2="206" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#DD734F" />
                    <stop offset="1" stop-color="#1A1A32" />
                </linearGradient>
                <linearGradient id="paint3_linear_701_17365" x1="154" y1="310" x2="154" y2="326" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B9AEDF" />
                    <stop offset="1" stop-color="#1A1A32" />
                </linearGradient>
            </defs>
        </svg>
    }
    return (
        <Section crosses crossesOffset="lg:-translate-y-[5rem]" id="pricing" customPaddings className="lg:px-[5rem] md:px-8 px-4 lg:py-[10rem py-[1rem] text-center items-center gap-4 relative">
            <div className='flex flex-col gap-4'>
                <div className='flex-col items-center relative hidden lg:flex'>
                    <img src="https://jsm-brainwave.com/assets/4-small-Dl1zRJyK.png" width={270} className='z-10' />
                    <div className='absolute top-0 z-1'>
                        <svg width="952" height="396" viewBox="0 0 952 396" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.35">
                                <circle cx="417" cy="161" r="4" fill="white" />
                                <circle opacity="0.5" cx="515" cy="116" r="2" fill="white" />
                                <circle opacity="0.5" cx="423" cy="279" r="4" fill="white" />
                                <circle opacity="0.3" cx="366" cy="394" r="2" fill="white" />
                                <circle cx="265" cy="327" r="2" fill="white" />
                                <circle opacity="0.2" cx="362" cy="209" r="2" fill="white" />
                                <circle opacity="0.3" cx="548" cy="211" r="2" fill="white" />
                                <circle opacity="0.2" cx="607" cy="281" r="2" fill="white" />
                                <circle opacity="0.21" cx="789" cy="281" r="2" fill="white" />
                                <circle cx="362" cy="65" r="2" fill="white" />
                                <circle opacity="0.3" cx="192" cy="132" r="2" fill="white" />
                                <circle cx="743" cy="2" r="2" fill="white" />
                            </g>
                            <path d="M834 150C827.373 150 822 144.627 822 138C822 131.373 827.373 126 834 126C840.627 126 846 131.373 846 138C846 144.627 840.627 150 834 150Z" fill="url(#paint0_linear_701_17365)" />
                            <path d="M4 206C1.79086 206 4.76837e-07 204.209 4.76837e-07 202C4.76837e-07 199.791 1.79086 198 4 198C6.20914 198 8 199.791 8 202C8 204.209 6.20914 206 4 206Z" fill="url(#paint1_linear_701_17365)" />
                            <path d="M948 206C945.791 206 944 204.209 944 202C944 199.791 945.791 198 948 198C950.209 198 952 199.791 952 202C952 204.209 950.209 206 948 206Z" fill="url(#paint2_linear_701_17365)" />
                            <path d="M154 326C149.582 326 146 322.418 146 318C146 313.582 149.582 310 154 310C158.418 310 162 313.582 162 318C162 322.418 158.418 326 154 326Z" fill="url(#paint3_linear_701_17365)" />
                            <defs>
                                <linearGradient id="paint0_linear_701_17365" x1="834" y1="126" x2="834" y2="150" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#88E5BE" />
                                    <stop offset="1" stop-color="#1A1A32" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_701_17365" x1="4" y1="198" x2="4" y2="206" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DD734F" />
                                    <stop offset="1" stop-color="#1A1A32" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_701_17365" x1="948" y1="198" x2="948" y2="206" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DD734F" />
                                    <stop offset="1" stop-color="#1A1A32" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_701_17365" x1="154" y1="310" x2="154" y2="326" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#B9AEDF" />
                                    <stop offset="1" stop-color="#1A1A32" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                <div className='lg:mt-[8rem] mt-0 flex flex-col items-center gap-8'>
                    <div className='flex items-center justify-center gap-4'>
                        <span className='text-bg'>[</span>
                        <p className='text-n-3 tracking-widest uppercase font-grotesk text-[0.8rem]'>Get Started with Brainwave</p>
                        <span className='text-bg'>]</span>
                    </div>

                    <h2 className='h2'>Pay Once, Use forever</h2>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-4 md:mt-[4rem] mt-[2rem]'>
                    <div className='bg-transparent rounded-[25px] transition-colors lg:hover:border-color-2 shadow-lg hover:shadow-[#211e1e] border-n-6 border flex flex-col p-4 text-left'>
                        <h5 className='h4 text-color-2'>Basic</h5>
                        <p className='text-n-1/50 font-normal mt-[1rem]'>AI chatbot, personalised recommendations</p>

                        <div className='flex items-center mt-[4rem]'>
                            <h2 className='h3'>$</h2>
                            <h1 className='text-[6rem]'>0</h1>
                        </div>

                        <Buttons white className="mt-[3rem]">Get Started</Buttons>

                        <div className='flex flex-col items-center pb-[1rem] gap-2 mt-[2rem]'>
                            <div className='p-4 border-t border-n-6 w-full'>
                                <div className='flex gap-4 items-start'>
                                    <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" width={30} alt="" />
                                    <p className='text-[1rem]'>An AI chatbot that can understand your queries</p>
                                </div>
                            </div>
                            <div className='p-4 border-t border-n-6 w-full'>
                                <div className='flex gap-4 items-start'>
                                    <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" width={30} alt="" />
                                    <p className='text-[1rem]'>Personalized recommendations based on your preferences</p>
                                </div>
                            </div>
                            <div className='p-4 border-t border-n-6 w-full'>
                                <div className='flex gap-4 items-start'>
                                    <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" width={30} alt="" />
                                    <p className='text-[1rem]'>Ability to explore the app and its features without any cost</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-transparent lg:translate-y-[-1rem] transition-colors lg:hover:border-color-1 lg:h-[104%] rounded-[30px] border-n-6 border flex flex-col lg:p-9 p-4 text-left'>
                        <h5 className='h4 text-color-1'>Premium</h5>
                        <p className='text-n-1/50 font-normal mt-[1rem]'>Advanced AI chatbot, priority support, analytics dashboard</p>

                        <div className='flex items-center mt-[3rem]'>
                            <h2 className='h3'>$</h2>
                            <h1 className='text-[6rem]'>9.99</h1>
                        </div>

                        <Buttons white className="mt-[3rem]">Get Started</Buttons>

                        <div className='flex flex-col items-center pb-[1rem] gap-2 mt-[2rem]'>
                            <div className='p-4 border-t border-n-6 w-full'>
                                <div className='flex gap-4 items-start'>
                                    <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" width={30} alt="" />
                                    <p className='text-[1rem]'>An advanced AI chatbot that can understand complex queries</p>
                                </div>
                            </div>
                            <div className='p-4 border-t border-n-6 w-full'>
                                <div className='flex gap-4 items-start'>
                                    <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" width={30} alt="" />
                                    <p className='text-[1rem]'>An analytics dashboard to track your conversations</p>
                                </div>
                            </div>
                            <div className='p-4 border-t border-n-6 w-full'>
                                <div className='flex gap-4 items-start'>
                                    <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" width={30} alt="" />
                                    <p className='text-[1rem]'>Priority support to solve issues quickly</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-transparent rounded-[25px] transition-colors lg:hover:border-color-3 shadow-lg hover:shadow-[#211e1e] border-n-6 border flex flex-col p-4 text-left'>
                        <h5 className='h4 text-color-3'>Enterprise</h5>
                        <p className='text-n-1/50 font-normal mt-[1rem]'>Custom AI chatbot, advanced analytics, dedicated account</p>

                        <div className='flex items-center mt-[4rem]'>
                            <h2 className='h3'>$</h2>
                            <h1 className='text-[6rem]'>5.99</h1>
                        </div>

                        <Buttons className="mt-[3rem]">Get Started</Buttons>

                        <div className='flex flex-col items-center pb-[1rem] gap-2 mt-[2rem]'>
                            <div className='p-4 border-t border-n-6 w-full'>
                                <div className='flex gap-4 items-start'>
                                    <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" width={30} alt="" />
                                    <p className='text-[1rem]'>An AI chatbot that can understand your queries</p>
                                </div>
                            </div>
                            <div className='p-4 border-t border-n-6 w-full'>
                                <div className='flex gap-4 items-start'>
                                    <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" width={30} alt="" />
                                    <p className='text-[1rem]'>Personalized recommendations based on your preferences</p>
                                </div>
                            </div>
                            <div className='p-4 border-t border-n-6 w-full'>
                                <div className='flex gap-4 items-start'>
                                    <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" width={30} alt="" />
                                    <p className='text-[1rem]'>Ability to explore the app and its features without any cost</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="#" className='text-[0.8rem] uppercase font-code text-white font-bold mt-[2rem] underline'>See the full details</a>
            </div>
        </Section>
    )
}

export default Pricing;