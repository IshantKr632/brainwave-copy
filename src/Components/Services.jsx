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
    <Section id="how-to-use" crosses crossesOffset={`lg:translate-y-[5.25rem]`} customPaddings className={`lg:px-[5rem] md:px-8 px-4 py-[10rem] text-center items-center gap-6 relative`}>
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

      <div className='grid grid-cols-2 lost-soul gap-4 mt-[2rem]'>
        <div className='border border-n-6 rounded-[30px] relative overflow-hidden xl:h-[85%] lg:h-[80%] md:h-[70%] sm:h-[83%] h-[80%] olm'>
          <div className='inset-0'>
            <img src={service2} className='bye' alt="" />
            <div className='absolute xl:top-[10rem] xl:right-[10rem] md:top-[8rem] top-[3rem] lg:right-[7rem] md:right-[2rem] right-[1rem] aim flex'>
              <div className='bg-black p-[1.2rem] rounded-t-[12px] max-w-[16rem] text-left leading-6'>Hey Brainwave, enhance this photo</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="37"
                className='translate-y-[3.09999rem]'
              >
                <path
                  d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"
                />
              </svg>
            </div>
          </div>

          <div className='lg:-translate-y-[15rem] md:-translate-y-[25rem] -translate-y-[11rem] text-left px-8 flex flex-col lg:gap-8 gap-6 faded'>
            <h4 className='h4 text-white'>Photo editing</h4>
            <p className='p text-n-3'>Automatically enhance your photos using our AI app's photo editing feature. Try it now!</p>
          </div>
        </div>
        <div className='bg-n-7 border-none rounded-[20px] relative lg:h-[80%] xl:h-[85%] h-auto sm:p-[1.2rem] grid flex-col gap-1 text-left'>
          <div className='flex flex-col p-[1rem] sm:p-[2rem] gap-8'>
            <h4 className='h4'>Video generation</h4>
            <p className='p text-n-3 mt-[1rem]'>The world’s most powerful AI photo and video art generation engine. What will you create?</p>
            <div className='flex items-center justify-between mt-[2.3rem]'>
              <div className='bg-n-9/40 p-[.8rem] sm:p-[1.2rem] rounded-[12px] backdrop-blur-lg'>
                <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%201C5.92487%201%201%205.92487%201%2012C1%2018.0751%205.92487%2023%2012%2023C18.0751%2023%2023%2018.0751%2023%2012C23%205.92487%2018.0751%201%2012%201ZM14%206C14.5523%206%2015%206.44772%2015%207V17C15%2017.5523%2014.5523%2018%2014%2018C13.4477%2018%2013%2017.5523%2013%2017V7C13%206.44772%2013.4477%206%2014%206ZM11%209C11%208.44772%2010.5523%208%2010%208C9.44771%208%209%208.44772%209%209V15C9%2015.5523%209.44772%2016%2010%2016C10.5523%2016%2011%2015.5523%2011%2015V9ZM7%2011C7%2010.4477%206.55228%2010%206%2010C5.44772%2010%205%2010.4477%205%2011V13C5%2013.5523%205.44772%2014%206%2014C6.55228%2014%207%2013.5523%207%2013V11ZM19%2011C19%2010.4477%2018.5523%2010%2018%2010C17.4477%2010%2017%2010.4477%2017%2011V13C17%2013.5523%2017.4477%2014%2018%2014C18.5523%2014%2019%2013.5523%2019%2013V11Z'%20fill='white'/%3e%3c/svg%3e" alt="" />
              </div>
              <div className='bg-n-9/40 p-[.8rem] sm:p-[1.2rem] rounded-[12px] backdrop-blur-lg'>
                <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23FFF'%20fill-rule='evenodd'%20d='M1%207C1.55228%207%202%207.44772%202%208L2%2012C2%2012.5523%201.55228%2013%201%2013%20.44772%2013%200%2012.5523%200%2012L0%208C0%207.44772.44772%207%201%207ZM5.5%203C6.05228%203%206.5%203.44772%206.5%204L6.5%2016C6.5%2016.5523%206.05229%2017%205.5%2017%204.94772%2017%204.5%2016.5523%204.5%2016L4.5%204C4.5%203.44772%204.94772%203%205.5%203ZM10%200C10.5523%200%2011%20.44772%2011%201L11%2019C11%2019.5523%2010.5523%2020%2010%2020%209.4477%2020%209%2019.5523%209%2019L9%201C9%20.44772%209.4477%200%2010%200ZM14.5%203C15.0523%203%2015.5%203.44772%2015.5%204L15.5%2016C15.5%2016.5523%2015.0523%2017%2014.5%2017%2013.9477%2017%2013.5%2016.5523%2013.5%2016L13.5%204C13.5%203.44772%2013.9477%203%2014.5%203ZM19%207C19.5523%207%2020%207.44772%2020%208L20%2012C20%2012.5523%2019.5523%2013%2019%2013%2018.4477%2013%2018%2012.5523%2018%2012L18%208C18%207.44772%2018.4477%207%2019%207Z'%20transform='translate(2%202)'/%3e%3c/svg%3e" alt="" />
              </div>
              <div className='bg-conic-gradient rounded-[15px] p-[1px] overflow-hidden'>
                <div className='bg-black p-[.8rem] sm:p-[1.2rem] rounded-[15px]'>
                  <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1%2012C1%205.92487%205.92487%201%2012%201C18.0751%201%2023%205.92487%2023%2012C23%2018.0751%2018.0751%2023%2012%2023C5.92487%2023%201%2018.0751%201%2012ZM12%2015C13.6569%2015%2015%2013.6569%2015%2012C15%2010.3431%2013.6569%209%2012%209C10.3431%209%209%2010.3431%209%2012C9%2013.6569%2010.3431%2015%2012%2015ZM15.4291%204.77031C14.9302%204.53333%2014.3337%204.74562%2014.0967%205.24448C13.8598%205.74334%2014.0721%206.33985%2014.5709%206.57683C16.6003%207.54091%2018%209.60796%2018%2011.9999C18%2012.5522%2018.4477%2012.9999%2019%2012.9999C19.5523%2012.9999%2020%2012.5522%2020%2011.9999C20%208.80713%2018.1296%206.05317%2015.4291%204.77031ZM6%2011.9999C6%2011.4476%205.55228%2010.9999%205%2010.9999C4.44772%2010.9999%204%2011.4476%204%2011.9999C4%2014.9112%205.55568%2017.4581%207.87631%2018.8564C8.34935%2019.1415%208.9639%2018.989%209.24894%2018.516C9.53398%2018.043%209.38157%2017.4284%208.90852%2017.1434C7.16348%2016.0919%206%2014.1813%206%2011.9999Z'%20fill='white'/%3e%3c/svg%3e" alt="" /></div>
              </div>
              <div className='bg-n-9/40 p-[.8rem] sm:p-[1.2rem] rounded-[12px] backdrop-blur-lg'>
                <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1%2012C1%205.92487%205.92487%201%2012%201C18.0751%201%2023%205.92487%2023%2012C23%2018.0751%2018.0751%2023%2012%2023C5.92487%2023%201%2018.0751%201%2012ZM12%2015C13.6569%2015%2015%2013.6569%2015%2012C15%2010.3431%2013.6569%209%2012%209C10.3431%209%209%2010.3431%209%2012C9%2013.6569%2010.3431%2015%2012%2015ZM15.4291%204.77031C14.9302%204.53333%2014.3337%204.74562%2014.0967%205.24448C13.8598%205.74334%2014.0721%206.33985%2014.5709%206.57683C16.6003%207.54091%2018%209.60796%2018%2011.9999C18%2012.5522%2018.4477%2012.9999%2019%2012.9999C19.5523%2012.9999%2020%2012.5522%2020%2011.9999C20%208.80713%2018.1296%206.05317%2015.4291%204.77031ZM6%2011.9999C6%2011.4476%205.55228%2010.9999%205%2010.9999C4.44772%2010.9999%204%2011.4476%204%2011.9999C4%2014.9112%205.55568%2017.4581%207.87631%2018.8564C8.34935%2019.1415%208.9639%2018.989%209.24894%2018.516C9.53398%2018.043%209.38157%2017.4284%208.90852%2017.1434C7.16348%2016.0919%206%2014.1813%206%2011.9999Z'%20fill='white'/%3e%3c/svg%3e" alt="" />
              </div>
              <div className='bg-n-9/40 p-[.8rem] sm:p-[1.2rem] rounded-[12px] backdrop-blur-lg'>
                <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%209L14.126%209C14.5701%2010.7252%2016.1362%2012%2018%2012C20.2091%2012%2022%2010.2091%2022%208C22%205.79086%2020.2091%204%2018%204C16.1362%204%2014.5701%205.27477%2014.126%207L3%207C2.44772%207%202%207.44772%202%208C2%208.55228%202.44772%209%203%209Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21%2015L9.87398%2015C9.42994%2013.2748%207.86384%2012%206%2012C3.79086%2012%202%2013.7909%202%2016C2%2018.2091%203.79086%2020%206%2020C7.86384%2020%209.42994%2018.7252%209.87398%2017L21%2017C21.5523%2017%2022%2016.5523%2022%2016C22%2015.4477%2021.5523%2015%2021%2015Z'%20fill='white'/%3e%3c/svg%3e" alt="" />
              </div>
            </div>
          </div>

          <div className='w-full h-full flex flex-col items-center justify-center  relative bg-black p-[1.5rem] overflow-hidden rounded-[10px]'>
            <img src={service3} width={520} height={400} className='w-[80%] object-cover scale-125' alt="" />
            <div className='absolute top-0 left-1'>
              <div class="flex gap-0 mt-[2rem]">
                <div class="translate-y-[2rem]">
                  <svg
                    class='fill-[#252134] -scale-x-100'
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="37"
                  >
                    <path

                      d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"
                    />
                  </svg>
                </div>
                <div class="flex justify-between bg-[#252134] pl-6 pt-4 pb-1 pr-4 rounded-r-lg rounded-tl-lg relative">
                  <div class="flex flex-col">
                    <p class="p text-white">Video Generated !</p>
                    <div class="bg-[#AC6AFF] w-fit rounded-[10px] p-[2px] absolute bottom-[-1.5rem]">
                      <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%3e%3cpolygon%20fill='%23FFFFFF'%20points='38.831%2015.118%2038.823%209.905%2029.203%203.617%2029.203%207.639%2035.548%2011.817%2035.553%2015.019%2032.605%2017.015%2030.594%2015.548%2030.594%2013.063%2027.317%2010.821%2027.317%2015.344%2022.122%2018.532%2022.113%2026.952%2018.44%2029.02%2016.554%2027.543%2016.554%2025.105%2018.786%2023.576%2018.786%2023.556%2018.786%2019.783%2014.769%2022.471%2011.698%2020.473%208.893%2022.31%2013.277%2025.311%2013.277%2027.154%2010.117%2029.291%206.894%2027.109%206.894%2019.848%2011.679%2016.608%2011.684%2013.492%2017.82%2017.445%2022.978%2014.011%2019.834%2012.177%2017.776%2013.564%2013.294%2010.6%2018.349%207.654%2022.727%2010.22%2022.727%206.393%2018.354%203.828%208.411%209.625%208.404%2014.84%203.617%2018.082%203.617%2028.874%208.404%2032.116%208.411%2037.332%2018.032%2043.617%2018.032%2039.598%2011.686%2035.42%2011.681%2032.218%2014.629%2030.222%2016.64%2031.689%2016.64%2034.174%2019.917%2036.416%2019.917%2031.892%2025.186%2028.705%2025.245%2020.285%2028.795%2018.217%2030.68%2019.694%2030.68%2022.131%2028.448%2023.661%2028.448%2023.68%2028.448%2027.454%2032.465%2024.765%2035.536%2026.764%2038.341%2024.927%2033.958%2021.923%2033.958%2020.083%2037.117%2017.946%2040.34%2020.128%2040.34%2027.389%2035.556%2030.629%2035.551%2033.744%2029.414%2029.79%2024.256%2033.201%2027.401%2035.033%2029.459%2033.672%2033.941%2036.636%2028.886%2039.583%2024.507%2037.016%2024.507%2040.842%2028.881%2043.406%2038.823%2037.612%2038.831%2032.396%2043.617%2029.154%2043.617%2018.361'/%3e%3c/svg%3e" class="w-[37px]" alt="" />
                    </div>
                  </div>

                  <p class="ml-[1rem] mt-[1.56rem] text-n-4 text-[.7rem] font-bold tracking-wider">Just Now</p>

                </div>
              </div>
            </div>

            <div className='flex items-center translate-y-[-2rem] w-full gap-2'>
              <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cpath%20d='M8.006%202.802l.036.024%2010.549%207.032.805.567c.227.183.494.437.648.808a2%202%200%200%201%200%201.532c-.154.371-.421.625-.648.808-.217.175-.5.364-.805.567L8.006%2021.198l-.993.627c-.285.154-.676.331-1.132.303a2%202%200%200%201-1.476-.79c-.276-.365-.346-.788-.375-1.111S4%2019.502%204%2019.054V4.99v-.043l.029-1.174c.03-.323.1-.746.375-1.11a2%202%200%200%201%201.476-.79c.456-.027.847.149%201.132.304s.62.378.993.627z'%20fill='%23fff'%20/%3e%3c/svg%3e" alt="" />
              
              <div className='w-full bg-white h-[2px]'>
                <div className='w-[67%] h-full bg-[#AC6AFF]'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Services;