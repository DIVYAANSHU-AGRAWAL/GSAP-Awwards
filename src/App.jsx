import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap/all";
import MessageSection from "./sections/MessageSection";
import FlavourSection from "./sections/FlavourSection";
import { useGSAP } from "@gsap/react";
import Nutrition from "./sections/Nutrition";
import {Route,Routes} from 'react-router-dom';
import FlavourSlider from "./components/FlavourSlider";
import BenefitSection from "./sections/BenefitSection";
import Footer from "./sections/Footer";




gsap.registerPlugin(ScrollTrigger,ScrollSmoother); //Now we can use ScrollTrigger anywhere

const App = () => {

  useEffect(()=>{
    document.title = "Spylt Desi by Divyaanshu"
  })

  useGSAP(()=>{
    ScrollSmoother.create({
      smooth: 3,
      effects: true
    });
  });

  // Wrap main inside scroll smoother two divs with id's
  return (
    <main>
      <Navbar />
        <div id="smooth-wrapper">               
        <div id ="smooth-content">
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='flavors' element={<FlavourSection/>}></Route>
        <Route path='nutrients' element={<Nutrition/>}></Route>
        <Route path='message' element={<MessageSection/>}></Route>
        <Route path='benefits' element={<BenefitSection/>}></Route>
      </Routes>
      <MessageSection/>
      <BenefitSection/>
      <FlavourSection/>
      <Nutrition/>
      <Footer/>
      </div>
      </div>
    </main>
  );
};

export default App;
