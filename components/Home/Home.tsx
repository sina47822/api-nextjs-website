'use client';
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import RecentImage from './RecentImage/RecentImage'
import About from './About/About'
import Price from './Price/Price'
import Reviews from './Reviews/Reviews'
import Faq from './Faq/Faq'
import AOS from "aos";
import "aos/dist/aos.css";
import Services from './Services/Services';

const Home = () => {
    useEffect(()=>{
        const initAOS = async()=>{
            await import ("aos");
            AOS.init({
                duration:1000,
                easing:'ease',
                once:true,
                anchorPlacement:"top-bottom",
            });
        };
        initAOS();
    }, []);
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services id={0} url={''} label={''} />
    </div>
  )
}

export default Home
