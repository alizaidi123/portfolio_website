"use client"

import React from 'react'
import { MdRoundedCorner } from 'react-icons/md'
import Projects from '../Projects/page'
import Skills from '../Skills/page'
import About from '../About/page'
import Contacts from '../Contacts/page'
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Hero = () => {
  useEffect (() => {
    AOS.init({
      easing:"ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
  }, [])
  return (
    <main>
    <div data-aos="fade-down" id="hero" className='min-h-screen bg-no-repeat bg-[url(/pic.jpg)] bg-left lg:bg-[30%] bg-cover items-center object-contain' style={{ backgroundSize: "38%" }}>
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[100px} sm:text-[80px] font-bold leading-tight flex justify-center items-center text-center mt-10'>
        <div>
        <p data-aos="fade-down"> "I am </p>
        <p data-aos="fade-down">  Syed Ali </p>
        <p data-aos="fade-down">  Saboor</p>
        <p data-aos="fade-down">  Zaidi" </p>
        </div>
      </div>

    </div>
  </div>
  <About />
  <Projects />
  <Skills />
  <Contacts />
   </main>
    
  ) 
  
}


export default Hero
