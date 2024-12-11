import { useState } from 'react';
import Header from './Components/Header';
import ButtonGradient from './assets/svg/ButtonGradient';
import Hero from './Components/Hero';
import Benifits from './Components/benefits';
import Collabration from './Components/Collabration';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import Roadmap from './Components/Roadmap';

function App() {

  return (
    <>
      <div className='pt-[4.75rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benifits />
        <Collabration />
        <Services />
        <Pricing />
        <Roadmap />
      </div>

      <ButtonGradient />
    </>
  )
}

export default App
