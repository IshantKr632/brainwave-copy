import React from 'react';
import Buttons from './Button';
import { navigation } from './index';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';


const Header = () => {
  const { pathname, hash } = useLocation();
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    if (navActive) {
      setNavActive(false);
      enablePageScroll();
    } else {
      setNavActive(!navActive);
      disablePageScroll();
    }
  }

  const closeNav = () => {
    setNavActive(false);
    enablePageScroll();
  }

  return (
    <div>
      <div className='fixed top-0 left-0 right-0 px-4 py-6 z-[1000] border-b border-b-n-6 bg-n-8 backdrop-blur-sm flex items-center justify-between w-full'>
        <div className='logo inline-flex w-auto h-auto'>
          <img src="https://jsm-brainwave.com/assets/brainwave-DM3_Zh2I.svg" alt="" />
        </div>

        <nav className='hidden lg:flex static bg-transparent'>
          <div className='relative z-2 flex justify-center item-center gap-6'>
            {navigation.map((item) => (
              <a key={item.id} href={item.url} onClick={onclick} className={`${item.onlyMobile ? "lg:hidden" : ""} block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-color-1 xl:px-12 ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"}`}>{item.title}</a>
            ))}
          </div>
        </nav>

        <div className='flex items-center gap-4'>
          <a href="#signup" className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'>New Account</a>
          <Buttons className="hidden lg:flex" href="#login">Sign In</Buttons>
        </div>

        <div className='lg:hidden flex'>
          <Buttons onClick={toggleNav} navActive={navActive}>
            <div className='flex flex-col w-[1.875rem] h-[1.313rem] justify-around px-0 py-0'>
              <div className={`bg-white h-[0.188rem] rounded-[0.625rem] w-full block ${navActive ? "transform rotate-45 translate-y-[4px]" : ""}`}></div>
              <div className={`bg-white h-[0.188rem] rounded-[0.625rem] w-full block ${navActive ? "transform rotate-[-45deg] translate-y-[-5px]" : ""}`}></div>
            </div>
          </Buttons>
        </div>

      </div>

      <div className={`fixed top-[5.8rem] left-0 h-full w-full bg-n-8 z-[100] backdrop-blur-none transition-colors ${navActive ? "" : "left-[-200rem] transition-colors"} text-center py-1`}>
        <div className='flex flex-col h-full items-center text-center'>
          {navigation.map((item) => (
            <a href={item.url} key={item.id} onClick={closeNav} className={`${item.onlyMobile ? "lg:hidden" : ""} ${item.url === hash ? "text-color-1" : "text-n-1"} relative block font-code text-2xl uppercase text-n-1 transition-colors  z-[101] i`}>{item.title}</a>
          ))}
        </div>

        <>
          <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6 z-0"></div>
          <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6 z-0"></div>
        </>

        <>
          <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full z-0"></div>
          <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full z-0"></div>
          <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full z-0"></div>
        </>

        <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 rings">
          <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
