import React, { useState } from 'react';
import SectionSvg from '../assets/svg/SectionSvg';
import { grid } from '../assets';
import Button from "./Button";


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

    const Sections = ({
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

                <div className='grid lg:grid-cols-2 gap-8 w-full h-full mt-[2rem]'>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full rounded-[30px] as bg-conic-gradient p-[0.1rem] overflow-hidden'>
                            <div className='bg-n-8 relative rounded-[30px] overflow-hidden'>
                                <div className='md:py-[5rem] py-[2.5rem]'>
                                    <img src="https://i.ibb.co/X5x9Vnf/grid.png" className='absolute top-0 left-0 w-full h-full brightness-200' alt="" />
                                    <div className='h-full w-full flex justify-between flex-col'><div className='w-full px-3 md:px-[3rem] flex justify-between'>
                                        <div className='flex items-center justify-center gap-2'>
                                            <span className='text-bg'>[</span>
                                            <p className='text-n-3 tracking-widest uppercase font-grotesk text-[0.9rem]'>May 2024</p>
                                            <span className='text-bg'>]</span>
                                        </div>

                                        <div className='bg-white rounded-[10px] text-black px-5 py-1 flex gap-3'><img src="data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.0215%203.52925C14.2819%203.7896%2014.2819%204.21171%2014.0215%204.47206L6.6882%2011.8054C6.42785%2012.0657%206.00574%2012.0657%205.74539%2011.8054L2.41206%208.47206C2.15171%208.21171%202.15171%207.7896%202.41206%207.52925C2.67241%207.2689%203.09452%207.2689%203.35487%207.52925L6.2168%2010.3912L13.0787%203.52925C13.3391%203.2689%2013.7612%203.2689%2014.0215%203.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" alt="" />
                                            Done
                                        </div>
                                    </div>

                                        <div className='flex mt-[4rem] relative'>
                                            <img src="https://jsm-brainwave.com/assets/image-1-BL_C2sN6.png" className='' alt="" />
                                        </div>

                                        <div className='flex flex-col gap-4 text-left px-5 lg:px-8 lg:w-[86%]'>
                                            <h4 className='h4'>Voice Recognition</h4>
                                            <p className='text-n-3'>Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.</p>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col rounded-[30px] border bg-n-8 border-n-6 lg:transform lg:translate-y-[6rem] p-6'>
                        <div className='w-full h-full flex flex-col justify-between' style={{ backgroundImage: "url('https://i.ibb.co/X5x9Vnf/grid.png')", backgroundPosition: "center", backgroundSize: "cover", brightness: "200" }}>
                            <div className='flex items-center justify-between w-full sm:mt-[4rem] sm:px-5 mt-2'>
                                <div className='flex items-center justify-center gap-2 sm:pl-0 sm:pr-0 pl-[-20px] pr-[-10px]'>
                                    <span className='text-bg'>[</span>
                                    <p className='text-n-3 tracking-widest uppercase font-grotesk text-[0.9rem]'>May 2024</p>
                                    <span className='text-bg'>]</span>
                                </div>

                                <div className='bg-white text-black flex items-center justify-evenly gap-4 rounded-[10px] px-5 py-1'>
                                    <img src="data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.21745%200.833984C8.58564%200.833984%208.88411%201.13246%208.88411%201.50065V3.16732C8.88411%203.53551%208.58564%203.83398%208.21745%203.83398C7.84926%203.83398%207.55078%203.53551%207.55078%203.16732V1.50065C7.55078%201.13246%207.84926%200.833984%208.21745%200.833984Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.21745%2011.334C8.58564%2011.334%208.88411%2011.6325%208.88411%2012.0007V14.6673C8.88411%2015.0355%208.58564%2015.334%208.21745%2015.334C7.84926%2015.334%207.55078%2015.0355%207.55078%2014.6673V12.0007C7.55078%2011.6325%207.84926%2011.334%208.21745%2011.334Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1.05078%208.00065C1.05078%207.63246%201.34926%207.33398%201.71745%207.33398H4.05078C4.41897%207.33398%204.71745%207.63246%204.71745%208.00065C4.71745%208.36884%204.41897%208.66732%204.05078%208.66732H1.71745C1.34926%208.66732%201.05078%208.36884%201.05078%208.00065Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.7174%208.00065C12.7174%207.63246%2013.0159%207.33398%2013.3841%207.33398H14.3841C14.7523%207.33398%2015.0508%207.63246%2015.0508%208.00065C15.0508%208.36884%2014.7523%208.66732%2014.3841%208.66732H13.3841C13.0159%208.66732%2012.7174%208.36884%2012.7174%208.00065Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.5794%2011.3626C11.8397%2011.1022%2012.2618%2011.1022%2012.5222%2011.3626L12.9936%2011.834C13.2539%2012.0943%2013.2539%2012.5164%2012.9936%2012.7768C12.7332%2013.0371%2012.3111%2013.0371%2012.0508%2012.7768L11.5794%2012.3054C11.319%2012.045%2011.319%2011.6229%2011.5794%2011.3626Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.1317%203.13977C13.392%203.40012%2013.392%203.82223%2013.1317%204.08258L12.1889%205.02539C11.9285%205.28574%2011.5064%205.28574%2011.246%205.02539C10.9857%204.76504%2010.9857%204.34293%2011.246%204.08258L12.1889%203.13977C12.4492%202.87942%2012.8713%202.87942%2013.1317%203.13977Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.85552%2010.3626C6.11587%2010.6229%206.11587%2011.045%205.85552%2011.3054L3.9699%2013.191C3.70955%2013.4514%203.28744%2013.4514%203.02709%2013.191C2.76674%2012.9307%202.76674%2012.5085%203.02709%2012.2482L4.91271%2010.3626C5.17306%2010.1022%205.59517%2010.1022%205.85552%2010.3626Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.16516%203.0017C3.42551%202.74135%203.84762%202.74135%204.10797%203.0017L5.52219%204.41591C5.78254%204.67626%205.78254%205.09837%205.52219%205.35872C5.26184%205.61907%204.83973%205.61907%204.57938%205.35872L3.16516%203.94451C2.90481%203.68416%202.90481%203.26205%203.16516%203.0017Z'%20fill='black'/%3e%3c/svg%3e" alt="" />
                                    process...
                                </div>
                            </div>

                            <div className='relative mt-[2rem] sm:mt-0  flex items-center justify-center'>
                                <img src="https://jsm-brainwave.com/assets/image-2-C8poHMFX.png" alt="" />
                            </div>

                            <div className='flex flex-col gap-4 mt-[2rem] sm:mt-0 text-left px-5 lg:px-8 lg:w-[86%]'>
                                <h4 className='h4'>Gamification</h4>
                                <p className='text-n-3'>Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='grid lg:grid-cols-2 gap-8 w-full h-full mt-[2rem]'>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full rounded-[30px] as bg-conic-gradient p-[0.1rem] overflow-hidden'>
                            <div className='bg-n-8 relative rounded-[30px] overflow-hidden'>
                                <div className='md:py-[5rem] py-[2.5rem]'>
                                    <img src="https://i.ibb.co/X5x9Vnf/grid.png" className='absolute top-0 left-0 w-full h-full brightness-200' alt="" />
                                    <div className='h-full w-full flex justify-between flex-col'><div className='w-full px-3 md:px-[3rem] flex justify-between'>
                                        <div className='flex items-center justify-center gap-2'>
                                            <span className='text-bg'>[</span>
                                            <p className='text-n-3 tracking-widest uppercase font-grotesk text-[0.9rem]'>May 2024</p>
                                            <span className='text-bg'>]</span>
                                        </div>

                                        <div className='bg-white rounded-[10px] text-black px-5 py-1 flex gap-3'><img src="data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.0215%203.52925C14.2819%203.7896%2014.2819%204.21171%2014.0215%204.47206L6.6882%2011.8054C6.42785%2012.0657%206.00574%2012.0657%205.74539%2011.8054L2.41206%208.47206C2.15171%208.21171%202.15171%207.7896%202.41206%207.52925C2.67241%207.2689%203.09452%207.2689%203.35487%207.52925L6.2168%2010.3912L13.0787%203.52925C13.3391%203.2689%2013.7612%203.2689%2014.0215%203.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" alt="" />
                                            Done
                                        </div>
                                    </div>

                                        <div className='flex mt-[4rem] relative'>
                                            <img src="https://jsm-brainwave.com/assets/image-3-DL8wGSR2.png" className='' alt="" />
                                        </div>

                                        <div className='flex flex-col gap-4 text-left px-5 lg:px-8 lg:w-[86%]'>
                                            <h4 className='h4 sm:mt-[1rem]'>Chatbot Customisation</h4>
                                            <p className='text-n-3'>Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.</p>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col rounded-[30px] border bg-n-8 border-n-6 lg:transform lg:translate-y-[6rem] p-6'>
                        <div className='w-full h-full flex flex-col justify-between' style={{ backgroundImage: "url('https://i.ibb.co/X5x9Vnf/grid.png')", backgroundPosition: "center", backgroundSize: "cover", brightness: "200" }}>
                            <div className='flex items-center justify-between w-full sm:mt-[4rem] sm:px-5 mt-2'>
                                <div className='flex items-center justify-center gap-2 sm:pl-0 sm:pr-0 pl-[-20px] pr-[-10px]'>
                                    <span className='text-bg'>[</span>
                                    <p className='text-n-3 tracking-widest uppercase font-grotesk text-[0.9rem]'>May 2024</p>
                                    <span className='text-bg'>]</span>
                                </div>

                                <div className='bg-white text-black flex items-center justify-evenly gap-4 rounded-[10px] px-5 py-1'>
                                    <img src="data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.21745%200.833984C8.58564%200.833984%208.88411%201.13246%208.88411%201.50065V3.16732C8.88411%203.53551%208.58564%203.83398%208.21745%203.83398C7.84926%203.83398%207.55078%203.53551%207.55078%203.16732V1.50065C7.55078%201.13246%207.84926%200.833984%208.21745%200.833984Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.21745%2011.334C8.58564%2011.334%208.88411%2011.6325%208.88411%2012.0007V14.6673C8.88411%2015.0355%208.58564%2015.334%208.21745%2015.334C7.84926%2015.334%207.55078%2015.0355%207.55078%2014.6673V12.0007C7.55078%2011.6325%207.84926%2011.334%208.21745%2011.334Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1.05078%208.00065C1.05078%207.63246%201.34926%207.33398%201.71745%207.33398H4.05078C4.41897%207.33398%204.71745%207.63246%204.71745%208.00065C4.71745%208.36884%204.41897%208.66732%204.05078%208.66732H1.71745C1.34926%208.66732%201.05078%208.36884%201.05078%208.00065Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.7174%208.00065C12.7174%207.63246%2013.0159%207.33398%2013.3841%207.33398H14.3841C14.7523%207.33398%2015.0508%207.63246%2015.0508%208.00065C15.0508%208.36884%2014.7523%208.66732%2014.3841%208.66732H13.3841C13.0159%208.66732%2012.7174%208.36884%2012.7174%208.00065Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.5794%2011.3626C11.8397%2011.1022%2012.2618%2011.1022%2012.5222%2011.3626L12.9936%2011.834C13.2539%2012.0943%2013.2539%2012.5164%2012.9936%2012.7768C12.7332%2013.0371%2012.3111%2013.0371%2012.0508%2012.7768L11.5794%2012.3054C11.319%2012.045%2011.319%2011.6229%2011.5794%2011.3626Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.1317%203.13977C13.392%203.40012%2013.392%203.82223%2013.1317%204.08258L12.1889%205.02539C11.9285%205.28574%2011.5064%205.28574%2011.246%205.02539C10.9857%204.76504%2010.9857%204.34293%2011.246%204.08258L12.1889%203.13977C12.4492%202.87942%2012.8713%202.87942%2013.1317%203.13977Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.85552%2010.3626C6.11587%2010.6229%206.11587%2011.045%205.85552%2011.3054L3.9699%2013.191C3.70955%2013.4514%203.28744%2013.4514%203.02709%2013.191C2.76674%2012.9307%202.76674%2012.5085%203.02709%2012.2482L4.91271%2010.3626C5.17306%2010.1022%205.59517%2010.1022%205.85552%2010.3626Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.16516%203.0017C3.42551%202.74135%203.84762%202.74135%204.10797%203.0017L5.52219%204.41591C5.78254%204.67626%205.78254%205.09837%205.52219%205.35872C5.26184%205.61907%204.83973%205.61907%204.57938%205.35872L3.16516%203.94451C2.90481%203.68416%202.90481%203.26205%203.16516%203.0017Z'%20fill='black'/%3e%3c/svg%3e" alt="" />
                                    process...
                                </div>
                            </div>

                            <div className='relative mt-[2rem] sm:mt-0  flex items-center justify-center'>
                                <img src="https://jsm-brainwave.com/assets/image-4-Cbi5cq1J.png" alt="" />
                            </div>

                            <div className='flex flex-col gap-4 mt-[2rem] sm:mt-0 text-left px-5 lg:px-8 lg:w-[86%]'>
                                <h4 className='h4'>Integration with APIs</h4>
                                <p className='text-n-3'>Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <Button className="sm:mt-[12rem] mt-[4rem] px-8">Our Roadmap</Button>



            </div>

            <Sections crosses crossesOffset customPaddings className="w-full pb-[1rem] mt-4 flex justify-between items-center z-50">
                <div className='w-full h-full mt-[3rem] sm:mt-0 sm:py-[3rem] md:px-[6rem] px-4 text-n-4 flex flex-col sm:flex-row gap-4 items-center sm:justify-between'>
                    <p className='text-sm'>© 2024. All rights reserved.</p>

                    <div className='flex gap-4 items-center sm:justify-normal justify-between'>
                        <div className='rounded-[50%] bg-n-6 w-[2rem] p-[8px] h-[2rem] flex justify-center items-center'>
                            <a href="https://discord.com/">
                                <img src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_702_32803)'%3e%3cpath%20d='M7.44668%207.6204C7.20785%207.64005%206.98515%207.7488%206.82279%207.92506C6.66044%208.10132%206.57031%208.33219%206.57031%208.57183C6.57031%208.81146%206.66044%209.04234%206.82279%209.2186C6.98515%209.39485%207.20785%209.50361%207.44668%209.52325C7.56687%209.51885%207.685%209.49069%207.79424%209.44038C7.90348%209.39008%208.00168%209.31864%208.08317%209.23018C8.16465%209.14172%208.22781%209.038%208.26899%208.925C8.31017%208.81201%208.32857%208.69197%208.32311%208.57183C8.329%208.45158%208.31091%208.33136%208.26989%208.21818C8.22887%208.10499%208.16573%208.0011%208.08417%207.91255C8.0026%207.824%207.90423%207.75257%207.79478%207.70241C7.68534%207.65225%207.56701%207.62438%207.44668%207.6204ZM10.5753%207.6204C10.3838%207.60465%2010.192%207.64707%2010.025%207.74209C9.85794%207.83711%209.7235%207.98031%209.63919%208.15297C9.55489%208.32564%209.52465%208.51972%209.55243%208.70985C9.58021%208.89998%209.66471%209.0773%209.7949%209.21862C9.92508%209.35995%2010.0949%209.4587%2010.2821%209.50196C10.4693%209.54522%2010.6652%209.53099%2010.8442%209.46111C11.0232%209.39123%2011.1769%209.26897%2011.2853%209.11031C11.3937%208.95165%2011.4517%208.76397%2011.4517%208.57183C11.4571%208.45186%2011.4388%208.33199%2011.3978%208.21913C11.3567%208.10627%2011.2938%208.00264%2011.2125%207.91421C11.1312%207.82578%2011.0333%207.75429%2010.9243%207.70387C10.8153%207.65345%2010.6974%207.62508%2010.5774%207.6204H10.5753Z'%20fill='%23757185'/%3e%3cpath%20d='M14.7429%200.428711H3.25715C3.02566%200.429273%202.79655%200.475461%202.58291%200.564635C2.36928%200.653809%202.17532%200.784219%202.01213%200.948408C1.84894%201.1126%201.71971%201.30734%201.63183%201.52151C1.54396%201.73568%201.49917%201.96507%201.50001%202.19657V13.783C1.49917%2014.0145%201.54396%2014.2439%201.63183%2014.458C1.71971%2014.6722%201.84894%2014.867%202.01213%2015.0312C2.17532%2015.1953%202.36928%2015.3258%202.58291%2015.4149C2.79655%2015.5041%203.02566%2015.5503%203.25715%2015.5509H12.9772L12.5229%2013.9651L13.62%2014.983L14.6572%2015.943L16.5%2017.5716V2.19657C16.5009%201.96507%2016.4561%201.73568%2016.3682%201.52151C16.2803%201.30734%2016.1511%201.1126%2015.9879%200.948408C15.8247%200.784219%2015.6307%200.653809%2015.4171%200.564635C15.2035%200.475461%2014.9744%200.429273%2014.7429%200.428711V0.428711ZM11.4343%2011.6251C11.4343%2011.6251%2011.1257%2011.2566%2010.8686%2010.9287C11.4903%2010.7834%2012.0407%2010.4229%2012.4222%209.91085C12.1137%2010.1161%2011.7831%2010.2858%2011.4364%2010.4166C11.0377%2010.5868%2010.6207%2010.7104%2010.1936%2010.7851C9.45948%2010.9203%208.70662%2010.9174%207.97358%2010.7766C7.54323%2010.6924%207.12147%2010.569%206.71358%2010.408C6.36915%2010.2745%206.04011%2010.1042%205.73215%209.90014C6.09897%2010.4018%206.62954%2010.7596%207.23215%2010.9116C6.97501%2011.2373%206.65787%2011.623%206.65787%2011.623C6.1487%2011.6367%205.64396%2011.5251%205.18808%2011.2979C4.73221%2011.0707%204.33917%2010.7349%204.04358%2010.3201C4.07074%208.58263%204.49204%206.87397%205.27573%205.323C5.96662%204.78043%206.80902%204.46593%207.68644%204.423L7.77215%204.52585C6.94736%204.72997%206.17767%205.11335%205.51787%205.64871C5.51787%205.64871%205.70644%205.54585%206.02358%205.40014C6.64038%205.11868%207.29777%204.93643%207.97144%204.86014C8.01942%204.85021%208.06818%204.84447%208.11715%204.843C8.69154%204.76816%209.27283%204.7624%209.84858%204.82585C10.754%204.92927%2011.6305%205.2088%2012.4286%205.64871C11.8022%205.13886%2011.0748%204.76782%2010.2943%204.56014L10.4143%204.423C11.2917%204.46593%2012.1341%204.78043%2012.825%205.323C13.6087%206.87397%2014.03%208.58263%2014.0572%2010.3201C13.7594%2010.7349%2013.3648%2011.0706%2012.9076%2011.298C12.4505%2011.5255%2011.9447%2011.6378%2011.4343%2011.6251Z'%20fill='%23757185'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_702_32803'%3e%3crect%20width='17.1429'%20height='17.1429'%20fill='white'%20transform='translate(0.427734%200.428711)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" />
                            </a>
                        </div>
                        <div className='rounded-[50%] bg-n-6 w-[2rem] p-[8px] h-[2rem] flex justify-center items-center'>
                            <a href="https://x.com/IshantKr0007">
                                <img src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_702_32808)'%3e%3cpath%20d='M17.5714%203.69685C16.9286%203.9647%2016.2857%204.17899%2015.5357%204.23256C16.2857%203.80399%2016.8214%203.10756%2017.0893%202.30399C16.3929%202.73256%2015.6429%203.00042%2014.8393%203.16113C14.1964%202.4647%2013.2857%202.03613%2012.3214%202.03613C10.3929%202.03613%208.78572%203.5897%208.78572%205.57185C8.78572%205.8397%208.83929%206.10756%208.89286%206.37542C5.94643%206.2147%203.375%204.82185%201.60714%202.67899C1.28571%203.2147%201.125%203.80399%201.125%204.44685C1.125%205.67899%201.76786%206.75042%202.67857%207.39328C2.08929%207.39328%201.55357%207.23256%201.07143%206.9647V7.01828C1.07143%208.73256%202.30357%2010.1254%203.91071%2010.4468C3.58929%2010.5004%203.32143%2010.554%203%2010.554C2.78571%2010.554%202.57143%2010.554%202.35714%2010.5004C2.78571%2011.8933%204.125%2012.9111%205.625%2012.9647C4.44643%2013.929%202.89286%2014.4647%201.23214%2014.4647C0.964286%2014.4647%200.642857%2014.4647%200.375%2014.4111C1.98214%2015.3754%203.85714%2015.9647%205.83929%2015.9647C12.3214%2015.9647%2015.8571%2010.6076%2015.8571%205.94685C15.8571%205.78613%2015.8571%205.62542%2015.8571%205.51828C16.5%204.98256%2017.0893%204.39328%2017.5714%203.69685Z'%20fill='%23757185'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_702_32808'%3e%3crect%20width='17.1429'%20height='17.1429'%20fill='white'%20transform='translate(0.427734%200.428711)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" />
                            </a>
                        </div>
                        
                        <div className='rounded-[50%] bg-n-6 w-[2rem] p-[8px] h-[2rem] flex justify-center items-center'>
                            <a href="https://www.instagram.com/itzanonymo.777/">
                                <img src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_702_32812)'%3e%3cpath%20d='M8.99749%2011.7147C10.4965%2011.7147%2011.7118%2010.4995%2011.7118%209.00042C11.7118%207.50136%2010.4965%206.28613%208.99749%206.28613C7.49843%206.28613%206.2832%207.50136%206.2832%209.00042C6.2832%2010.4995%207.49843%2011.7147%208.99749%2011.7147Z'%20fill='%23757185'/%3e%3cpath%20d='M12.3905%200.857422H5.60479C2.98618%200.857422%200.855469%202.98882%200.855469%205.6081V12.3938C0.855469%2015.0124%202.98686%2017.1431%205.60615%2017.1431H12.3919C15.0105%2017.1431%2017.1412%2015.0117%2017.1412%2012.3925V5.60674C17.1412%202.98814%2015.0098%200.857422%2012.3905%200.857422ZM8.99833%2013.0717C6.75293%2013.0717%204.9269%2011.2457%204.9269%209.00028C4.9269%206.75489%206.75293%204.92885%208.99833%204.92885C11.2437%204.92885%2013.0698%206.75489%2013.0698%209.00028C13.0698%2011.2457%2011.2437%2013.0717%208.99833%2013.0717ZM13.7483%204.92885C13.3738%204.92885%2013.0698%204.62485%2013.0698%204.25028C13.0698%203.87571%2013.3738%203.57171%2013.7483%203.57171C14.1229%203.57171%2014.4269%203.87571%2014.4269%204.25028C14.4269%204.62485%2014.1229%204.92885%2013.7483%204.92885Z'%20fill='%23757185'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_702_32812'%3e%3crect%20width='17.1429'%20height='17.1429'%20fill='white'%20transform='translate(0.427734%200.428711)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" />
                            </a>
                        </div>

                        <div className='rounded-[50%] bg-n-6 w-[2rem] p-[8px] h-[2rem] flex justify-center items-center'>
                            <a href="#">
                                <img src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_702_32822)'%3e%3cpath%20d='M17.5357%202.23341C17.5219%202.17014%2017.4916%202.11167%2017.4478%202.06395C17.4041%202.01623%2017.3484%201.98098%2017.2866%201.9618C17.0615%201.9174%2016.8286%201.93405%2016.6121%202.01001C16.6121%202.01001%201.5923%207.40841%200.734626%208.00626C0.549269%208.13484%200.487661%208.2093%200.457126%208.29769C0.308733%208.72305%200.770519%208.91055%200.770519%208.91055L4.64159%2010.1722C4.70698%2010.1835%204.7741%2010.1794%204.83766%2010.1604C5.71838%209.6043%2013.6978%204.56537%2014.1591%204.39609C14.2314%204.37412%2014.285%204.39609%2014.2732%204.44966C14.0846%205.09573%207.19373%2011.2195%207.1557%2011.257C7.13721%2011.2721%207.12268%2011.2916%207.11335%2011.3136C7.10402%2011.3356%207.10016%2011.3596%207.10213%2011.3834L6.74213%2015.1607C6.74213%2015.1607%206.59105%2016.3393%207.76748%2015.1607C8.60159%2014.3255%209.40195%2013.6345%209.8032%2013.2986C11.1344%2014.2173%2012.5669%2015.2336%2013.1846%2015.7629C13.2883%2015.8635%2013.4111%2015.9423%2013.5459%2015.9944C13.6806%2016.0465%2013.8245%2016.0709%2013.9689%2016.0661C14.5582%2016.0436%2014.7189%2015.3991%2014.7189%2015.3991C14.7189%2015.3991%2017.4553%204.38751%2017.5475%202.91162C17.5561%202.76698%2017.5684%202.6743%2017.5694%202.57519C17.5743%202.46024%2017.563%202.34518%2017.5357%202.23341Z'%20fill='%23757185'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_702_32822'%3e%3crect%20width='17.1429'%20height='17.1429'%20fill='white'%20transform='translate(0.427734%200.428711)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" />
                            </a>
                        </div>

                        <div className='rounded-[50%] bg-n-6 w-[2rem] p-[8px] h-[2rem] flex justify-center items-center'>
                            <a href="#">
                                <img src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_702_32826)'%3e%3cpath%20d='M7.10334%2017.0363V10.072H4.71289V6.8577H7.10334V4.61305C7.10334%202.16793%208.65128%200.964844%2010.8325%200.964844C11.8773%200.964844%2012.7753%201.04263%2013.037%201.0774V3.63269L11.5242%203.63338C10.3379%203.63338%2010.07%204.19708%2010.07%205.02426V6.8577H13.2843L12.2129%2010.072H10.07V17.0363H7.10334Z'%20fill='%23757185'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_702_32826'%3e%3crect%20width='17.1429'%20height='17.1429'%20fill='white'%20transform='translate(0.427734%200.428711)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </Sections>
        </Section >
    )
}

export default Roadmap