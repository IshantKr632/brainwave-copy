import { useState } from 'react';
import Header from './Components/Header';
import ButtonGradient from './assets/svg/ButtonGradient';
import Hero from './Components/Hero';


function App() {

  return (
    <>
      <div className='pt-[4.75rem] overflow-hidden'>
        <Header />
        <Hero />
      </div>

      <ButtonGradient />
    </>
  )
}

export default App
