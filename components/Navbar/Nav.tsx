'use client';
import { Navlinks } from '@/constant/constant'
import { MenuIcon, PhoneCallIcon, Search, ShoppingCart, User2Icon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ModeToggle } from '../ModeToggle';
import { FaInstagram, FaTelegram } from 'react-icons/fa';
import { Separator } from "@/components/ui/separator"

type Props = {
    openNav:() => void;
};

const Nav = ({openNav}:Props) => {

    const [navBg, setNavBg]=useState(false);
    const [marginTop, setMarginTop] =useState(false);
    const [textScroll, setTextScroll] =useState(false);

    useEffect(()=>{
        const handler = ()=> {
            if(window.scrollY>=90) setNavBg(true), setMarginTop(true), setTextScroll(true);
            if(window.scrollY<90) setNavBg(false), setMarginTop(false), setTextScroll(false);    
        };

        window.addEventListener('scroll', handler);

        return () => window.removeEventListener('scroll', handler);
    }, []);

    const bg_style = navBg?'bg-gray-700/95 shadow-md h-[8vh]':'';
    const margin_style = marginTop?'mt-[-3rem]':'';
    const text_scroll = textScroll?'text-white':'';
  return (
    <div>
      <div className='py-1 bg-gray-200 w-full mx-auto transition-all duration-200 z-[200]'>
        <div className='flex items-center justify-between mr-8 md:mr-16'>
          <div>
            <ModeToggle />
          </div>
          <div className='flex'>
            <Link href={'#'}><FaInstagram className='h-5 w-5 ml-2 text-blue-950' /></Link>
            <Link href={'#'}><FaTelegram className='h-5 w-5 ml-2 text-blue-950' /></Link>
            <Link href={'#'}><PhoneCallIcon className='h-5 w-5 ml-3 md:ml-10 text-blue-950' /></Link>
          </div>
        </div>
      </div>
      <div className={`flex ${bg_style} ${margin_style} items-center justify-between pt-2 fixed z-[100] w-full mx-auto transition-all duration-200`}>
        {/* Button and icons */}
        <div className='flex items-center mr-3 md:mr-16'>
          <div className='flex'>          
            <Search className={`cursor-pointer w-9 h-9 pl-3 text-white`}/>
            <MenuIcon onClick={openNav} className={`cursor-pointer w-9 h-9 pl-3 text-white`}/>
          </div>
          <Separator orientation="vertical" className='py-3' />
          <div><User2Icon className={`cursor-pointer w-9 h-9 pr-3 text-white`}/></div>
        </div>
        <div className='items-center hidden'>
        {/* Navlink */}
          {Navlinks.map((link)=>{
              return ( 
              <Link key={link.id} href={link.url} className="relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                  <p className='px-5'>{link.label}</p>
              </Link>
              )
          })}
        </div>
        {/* LOGO */}
        <h1 className='text-3xl font-bold ml-3 md:ml-16 text-white'>ای پی آی</h1>
      </div>
    </div>
  )
}

export default Nav
