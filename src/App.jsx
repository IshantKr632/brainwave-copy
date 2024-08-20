import { useState } from 'react';
import Header from './Components/Header';
import ButtonGradient from './assets/svg/ButtonGradient';
import Hero from './Components/Hero';
import Benifits from './Components/benefits';

function App() {

  return (
    <>
      <div className='pt-[4.75rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benifits />
      </div>

      <ButtonGradient />
    </>
  )
}

export default App
