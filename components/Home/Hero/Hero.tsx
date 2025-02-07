'use client';
import CardHero from '@/components/Helper/CardHero';
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import { CardMinHero } from '@/constant/cardminhero';
import axios from 'axios';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { toast } from 'sonner';

const Hero = () => {

    const [promt, setPromt] = useState('');
    const [image, setImage]= useState('');
    const [loading, setLoading]= useState(false);

    const [firstPart, setFirstPart] = useState("");
    const [thirdPart, setThirdPart] = useState("");
    const [cityCode, setCityCode] = useState("");

  return (
    <div className='relative mx-auto'>
      {/* content */}
      <div className='relative z-10 flex flex-col items-center justify-center'>
        <Image src="/images/Homepage-Mobile.webp" width={2000} height={300} alt={'Homepage'} className='md:hidden'/>
        <Image src="/images/Homepage-Desktop.webp" width={2000} height={200} alt={'Homepage'}  className='md:flex hidden'/>
        <div className=' w-[80%] flex flex-col'>
          <div className='flex flex-col items-center bg-white dark:bg-gray-950 drop-shadow-lg rounded-lg mt-[-40px] py-5 z-20'>
            <div className='flex items-center mx-auto justify-center w-[90%]'>
              <div className='flex-col py-10 px-5 hidden md:flex'>
                <h1 className='text-2xl text-bold'>
                  آیتول همه خدمات خودرو
                </h1>
                <p className='text-sm text-gray-400 pt-2'>
                پلاک خود را وارد کرده، از وضعیت پرداختی‌های خودرویتان مطلع شوید.
                </p>
              </div>
              <div className='flex flex-col p-4'>
                <div className='text-left pb-4'>
                  <h1 className=''>
                  مشاهده اطلاعات خودرو با ثبت پلاک:
                  </h1>
                </div>
                <div aria-hidden="true" className="flex rounded-lg drop-shadow-xl" dir='ltr'>
                  <div className="iran-flag-place bg-gray-900 p-2 rounded-lg" >
                    <Image src="/images/iran-flag-dark.svg" width={20} height={35} alt="پرچم ایران"  />
                  </div>
                  <input type="tel" 
                    placeholder="--"
                    value={firstPart}
                    onChange={(e) => setFirstPart(e.target.value)}
                    className="text-center bg-white w-[7%] text-2xl placeholder:text-black"
                    maxLength={2}
                  />
                  <div aria-hidden="true" className="bg-white pb-1 flex items-center" >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="16" height="16" fill="white"/>
                      <path d="M8.75338 10.5953C8.47339 10.9347 7.95333 10.9347 7.67334 10.5953L4.82794 7.1454C4.45137 6.68883 4.77613 6 5.36796 6H11.0588C11.6506 6 11.9753 6.68883 11.5988 7.1454L8.75338 10.5953Z" fill="#858585"/>
                    </svg>
                    <span className="empty text-black text-xl" >_</span>
                  </div>
                  <input type="tel"
                    placeholder="---"
                    value={thirdPart}
                    maxLength={3}
                    onChange={(e) => setThirdPart(e.target.value)}
                    className="text-center bg-white w-[7%] text-xl placeholder:text-black"
                  />
                  <div className="bg-white py-2">
                    <Separator orientation="vertical" className='text-gray-500 bg-white mx-2'/>
                  </div>
                  <div className="flex flex-col bg-white w-[7%] justify-center">
                    <svg width="36" height="8" viewBox="0 0 36 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M36 0.5H34.5V7.5H36V0.5Z" fill="#CCCCCC"/>
                      <path d="M32.5 0.5H31V2.5H22V0.5H20.5V6H16V7.5H22V4H32.5V0.5Z" fill="#CCCCCC"/>
                      <path d="M14 0.5H12.5V7.5H14V0.5Z" fill="#CCCCCC"/>
                      <path d="M10.5 0.5H9V6H1.5V0.5H0V7.5H10.5V0.5Z" fill="#CCCCCC"/>
                      <path d="M4.5 0.5V2H6V0.5H4.5Z" fill="#CCCCCC"/>
                      <path d="M27.5 6V7.5H29V6H27.5Z" fill="#CCCCCC"/>
                      <path d="M31 6V7.5H32.5V6H31Z" fill="#CCCCCC"/>
                    </svg>
                    <input type="tel"
                    placeholder="--"
                    value={cityCode}
                    maxLength={2}
                    onChange={(e) => setCityCode(e.target.value)}
                    className='bg-white text-xl placeholder:text-black text-center'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=''>
              <ul className='flex items-center justify-center mt-6 gap-5 flex-wrap'>
              {CardMinHero.map((link)=>{
                return (
                  <CardHero id={link.id} url={link.url} label={link.label} buttontext={link.buttontext} underline={link.underline} />
                )
              })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
