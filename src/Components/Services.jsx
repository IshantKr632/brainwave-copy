import React from 'react';
import SectionSvg from '../assets/svg/SectionSvg';
import { service1 } from '../assets';
import { loading } from '../assets';
import { service2 } from '../assets';
import { service3 } from '../assets';
import { brainwaveServicesIcons } from './index';

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
    <Section crosses crossesOffset={`lg:translate-y-[5.25rem]`} customPaddings className={`lg:px-[5rem] md:px-8 px-4 py-[10rem] text-center items-center gap-6 relative`}>
      <div className='flex flex-col gap-[1rem]'>
        <h2 className='h2'>Generative AI made for creaters.</h2>
        <p className='p text-n-4'>Brainwave unlocks the potential of AI-powered applications</p>
      </div>

      <div className='mt-[3rem] flex flex-col justify-center items-center relative'>
        <div className='relative border border-n-6 rounded-3xl overflow-hidden  h-[25rem] md:h-[35rem] lg:h-[39rem] xl:h-[46rem] w-full'>
          <div className='absolute top-0 left-0 one h-auto min-h-[100px] md:h-full md:w-3/5 xl:w-auto'>
            <img src={service1} width={800} className='query' alt="" />
          </div>

          <div className='absolute left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 xl:bottom-20 bottom-2 md:bottom-4'>
            <div className='bg-n-8/80 border-n-4 border rounded-[1.7rem] h-[3.5rem] flex items-center md:w-[31rem] px-2 gap-4 md:px-4'>
              <img src={loading} className='w-5 h-5' alt="" />
              AI is Generating
            </div>
          </div>

          <div className='absolute xl:left-[65%] lg:left-[60%] md:left-[20%] md:top-[15%] xl:top-1/3 lg:top-[20%] flex flex-col lg:max-w-[20vw] md:max-w-[50vw] md:p-0 w-full h-[80%] px-4 mt-[0.5rem] md:justify-normal justify-center text-left'>
            <h5 className='h5 text-left mb-2'>Smartest AI</h5>
            <p className='p text-n-3 text-left md:mb-12 mb-6'>Brainwave unlocks the potential of AI-powered applications</p>

            <div className='flex flex-col items-center justify-center'>
              <div className='w-full border-t pt-4 border-t-n-6 flex gap-4 mb-4'>
                <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" />
                <span className='text-n-1 font-light text-md'>Photo Generating</span>
              </div>
              <div className='w-full border-t pt-4 border-t-n-6 flex gap-4 mb-4'>
                <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" />
                <span className='text-n-1 font-light text-md'>Photo enhance</span>
              </div>
              <div className='w-full border-t pt-4 border-t-n-6 flex gap-4 mb-4'>
                <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" />
                <span className='text-n-1 font-light text-md'>Seamless Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-4 w-full mt-4 relative flex-col lg:flex-row flex-auto'>
        <div className='border border-n-6 rounded-[20px] overflow-hidden relative '>
          <img src={service2} className='object-cover object-center h-auto opacity-80 lg:max-w-[800px]' alt="" />
          <div class="flex absolute top-[4rem] right-[4rem] text-left hectic">
            <p class="bg-black max-w-[15rem] mt-4 ml-4 text-white p-4 rounded-bl-[10px] rounded-t-[10px] font-light font-grotesk">Hey Brainwave, enhance this photo</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="37"
              class="mt-[3.7rem]"
            >
              <path
                d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"
              />
            </svg>
          </div>

          <div className='absolute md:bottom-[4rem] md:left-[3rem] bottom-4 left-4 flex flex-col gap-6 md:w-[80%] p-2 text-left image'>
            <h4 className='h4'>Photo Editing</h4>
            <p className='p text-n-2'>Automatically enhance your photos using our AI app's photo editing feature. Try it now!</p>
          </div>
        </div>

        <div className='grid grid-rows-2'>
          <div className='h-full w-full px-[3rem] py-[5rem] text-left flex flex-col'>
            <h4 className='h4'>Video generation</h4>
            <p className='text-base mt-[1rem] text-n-3'>The world’s most powerful AI photo and video art generation engine. What will you create?</p>
            <div className='flex justify-between mt-[2.8rem]'>
              <div className='bg-n-9/40 p-[1.2rem] rounded-[15px] backdrop-blur'>
                <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%201C5.92487%201%201%205.92487%201%2012C1%2018.0751%205.92487%2023%2012%2023C18.0751%2023%2023%2018.0751%2023%2012C23%205.92487%2018.0751%201%2012%201ZM14%206C14.5523%206%2015%206.44772%2015%207V17C15%2017.5523%2014.5523%2018%2014%2018C13.4477%2018%2013%2017.5523%2013%2017V7C13%206.44772%2013.4477%206%2014%206ZM11%209C11%208.44772%2010.5523%208%2010%208C9.44771%208%209%208.44772%209%209V15C9%2015.5523%209.44772%2016%2010%2016C10.5523%2016%2011%2015.5523%2011%2015V9ZM7%2011C7%2010.4477%206.55228%2010%206%2010C5.44772%2010%205%2010.4477%205%2011V13C5%2013.5523%205.44772%2014%206%2014C6.55228%2014%207%2013.5523%207%2013V11ZM19%2011C19%2010.4477%2018.5523%2010%2018%2010C17.4477%2010%2017%2010.4477%2017%2011V13C17%2013.5523%2017.4477%2014%2018%2014C18.5523%2014%2019%2013.5523%2019%2013V11Z'%20fill='white'/%3e%3c/svg%3e" width={30} alt="" />
              </div>
              <div className='bg-n-9/40 p-[1.2rem] rounded-[15px] backdrop-blur'>
                <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23FFF'%20fill-rule='evenodd'%20d='M1%207C1.55228%207%202%207.44772%202%208L2%2012C2%2012.5523%201.55228%2013%201%2013%20.44772%2013%200%2012.5523%200%2012L0%208C0%207.44772.44772%207%201%207ZM5.5%203C6.05228%203%206.5%203.44772%206.5%204L6.5%2016C6.5%2016.5523%206.05229%2017%205.5%2017%204.94772%2017%204.5%2016.5523%204.5%2016L4.5%204C4.5%203.44772%204.94772%203%205.5%203ZM10%200C10.5523%200%2011%20.44772%2011%201L11%2019C11%2019.5523%2010.5523%2020%2010%2020%209.4477%2020%209%2019.5523%209%2019L9%201C9%20.44772%209.4477%200%2010%200ZM14.5%203C15.0523%203%2015.5%203.44772%2015.5%204L15.5%2016C15.5%2016.5523%2015.0523%2017%2014.5%2017%2013.9477%2017%2013.5%2016.5523%2013.5%2016L13.5%204C13.5%203.44772%2013.9477%203%2014.5%203ZM19%207C19.5523%207%2020%207.44772%2020%208L20%2012C20%2012.5523%2019.5523%2013%2019%2013%2018.4477%2013%2018%2012.5523%2018%2012L18%208C18%207.44772%2018.4477%207%2019%207Z'%20transform='translate(2%202)'/%3e%3c/svg%3e" width={30} alt="" />
              </div>
              <div className='ace p-[1.2rem]'>
                <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1%2012C1%205.92487%205.92487%201%2012%201C18.0751%201%2023%205.92487%2023%2012C23%2018.0751%2018.0751%2023%2012%2023C5.92487%2023%201%2018.0751%201%2012ZM12%2015C13.6569%2015%2015%2013.6569%2015%2012C15%2010.3431%2013.6569%209%2012%209C10.3431%209%209%2010.3431%209%2012C9%2013.6569%2010.3431%2015%2012%2015ZM15.4291%204.77031C14.9302%204.53333%2014.3337%204.74562%2014.0967%205.24448C13.8598%205.74334%2014.0721%206.33985%2014.5709%206.57683C16.6003%207.54091%2018%209.60796%2018%2011.9999C18%2012.5522%2018.4477%2012.9999%2019%2012.9999C19.5523%2012.9999%2020%2012.5522%2020%2011.9999C20%208.80713%2018.1296%206.05317%2015.4291%204.77031ZM6%2011.9999C6%2011.4476%205.55228%2010.9999%205%2010.9999C4.44772%2010.9999%204%2011.4476%204%2011.9999C4%2014.9112%205.55568%2017.4581%207.87631%2018.8564C8.34935%2019.1415%208.9639%2018.989%209.24894%2018.516C9.53398%2018.043%209.38157%2017.4284%208.90852%2017.1434C7.16348%2016.0919%206%2014.1813%206%2011.9999Z'%20fill='white'/%3e%3c/svg%3e" className='z-[1000]' width={35} alt="" />
              </div>
              <div className='bg-n-9/40 p-[1.2rem] rounded-[15px] backdrop-blur'>
                <img width={30} src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23FFF'%20fill-rule='evenodd'%20d='M17.2413003,1.9999997%20L6.7587003,1.9999997%20C5.9537403,1.9999997%205.2893703,1.9999997%204.7481803,2.04419%20C4.1860803,2.09012%203.6693703,2.18868%203.1840403,2.43598%20C2.4313903,2.81947%201.8194703,3.43139%201.4359803,4.18404%20C1.1886803,4.66937%201.0901203,5.18608%201.0441903,5.74818%20C1,6.28937%201,6.95372%201,7.75869%20L1,16.2413%20C1,17.0463%201,17.7106%201.0441903,18.2518%20C1.0901203,18.8139%201.1886803,19.3306%201.4359803,19.816%20C1.8194703,20.5686%202.4313903,21.1805%203.1840403,21.564%20C3.6693703,21.8113%204.1860803,21.9099%204.7481803,21.9558%20C5.2893703,21.9999997%205.9537203,21.9999997%206.7586803,21.9999997%20L17.2413003,21.9999997%20C18.0463003,21.9999997%2018.7106003,21.9999997%2019.2518003,21.9558%20C19.8139003,21.9099%2020.3306003,21.8113%2020.8160003,21.564%20C21.5686003,21.1805%2022.1805003,20.5686%2022.5640003,19.816%20C22.8113003,19.3306%2022.9099003,18.8139%2022.9558003,18.2518%20C23,17.7106%2023,17.0463%2023,16.2413%20L23,7.75868%20C23,6.95372%2023,6.28937%2022.9558003,5.74818%20C22.9099003,5.18608%2022.8113003,4.66937%2022.5640003,4.18404%20C22.1805003,3.43139%2021.5686003,2.81947%2020.8160003,2.43598%20C20.3306003,2.18868%2019.8139003,2.09012%2019.2518003,2.04419%20C18.7106003,1.9999997%2018.0463003,1.9999997%2017.2413003,1.9999997%20Z%20M4.0060803,9.93935%20C4.0671303,9.39045%204.5615903,8.99497%205.1104903,9.05602%20C7.3669203,9.30698%209.4708003,10.3183%2011.0762003,11.9237%20C12.6816003,13.529%2013.6929003,15.6329%2013.9438003,17.8894%20C14.0049003,18.4383%2013.6094003,18.9327%2013.0605003,18.9938%20C12.5116003,19.0548%2012.0171003,18.6593%2011.9561003,18.1104%20C11.7553003,16.3053%2010.9463003,14.6222%209.6620003,13.3379%20C8.3776603,12.0536%206.6945603,11.2445%204.8894103,11.0438%20C4.3405103,10.9827%203.9450303,10.4883%204.0060803,9.93935%20Z%20M4.0201203,13.9001%20C4.1304903,13.3589%204.6586403,13.0097%205.1997803,13.1201%20C6.3528503,13.3552%207.4113103,13.9243%208.2434403,14.7564%20C9.0755703,15.5885%209.6446003,16.647%209.8798003,17.8%20C9.9901003,18.3412%209.6409003,18.8693%209.0997803,18.9797%20C8.5586403,19.0901%208.0304903,18.7409%207.9201203,18.1997%20C7.7633503,17.431%207.3839803,16.7254%206.8292303,16.1706%20C6.2744803,15.6159%205.5688403,15.2365%204.8001203,15.0797%20C4.2589803,14.9693%203.9097603,14.4412%204.0201203,13.9001%20Z%20M4.9999503,16.9999%20C4.4476703,16.9999%203.9999503,17.4476%203.9999503,17.9999%20C3.9999503,18.5522%204.4476703,18.9999%204.9999503,18.9999%20L5.0099503,18.9999%20C5.5622403,18.9999%206.0099503,18.5522%206.0099503,17.9999%20C6.0099503,17.4476%205.5622403,16.9999%205.0099503,16.9999%20L4.9999503,16.9999%20Z'/%3e%3c/svg%3e" alt="" />
              </div>
              <div className='bg-n-9/40 p-[1.2rem] rounded-[15px] backdrop-blur'>
                <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%209L14.126%209C14.5701%2010.7252%2016.1362%2012%2018%2012C20.2091%2012%2022%2010.2091%2022%208C22%205.79086%2020.2091%204%2018%204C16.1362%204%2014.5701%205.27477%2014.126%207L3%207C2.44772%207%202%207.44772%202%208C2%208.55228%202.44772%209%203%209Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21%2015L9.87398%2015C9.42994%2013.2748%207.86384%2012%206%2012C3.79086%2012%202%2013.7909%202%2016C2%2018.2091%203.79086%2020%206%2020C7.86384%2020%209.42994%2018.7252%209.87398%2017L21%2017C21.5523%2017%2022%2016.5523%2022%2016C22%2015.4477%2021.5523%2015%2021%2015Z'%20fill='white'/%3e%3c/svg%3e" width={30} alt="" />
              </div>
            </div>
          </div>

          <div className=' w-full h-full mine'>
            
          </div>

        </div>
      </div>
    </Section>
  )
}

export default Services;