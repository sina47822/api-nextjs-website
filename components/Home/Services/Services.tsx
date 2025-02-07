import { ServicesCat } from '@/constant/services'
import React from 'react'
import ServicesCard from './ServicesCard';
import Link from 'next/link';

type Props ={
    id: number;
    url: string;
    label: string;
  };
const Services = ({id,url,label}: Props) => {
  return (
    <div className='pt-16 pb-16'>
        <div className='flex flex-col xl:w-[60%] lg:w-[70%] w-[95%] md:w-[80%] sm:w-[90%] mx-auto'>
            <ul className='flex flex-col gap-10'>
                {ServicesCat.map((link) => {
                    return (
                        <li>
                            <Link key={link.id} href={link.url} className="">
                                {link.label}
                                <ul className='flex flex-wrap pb-10 pt-10 items-center justify-center gap-10'>
                                {link.card.map((cardlink) => {
                                    return (
                                        <ServicesCard id={cardlink.id} label={cardlink.label} iconurl={cardlink.iconurl} url={cardlink.url}/>
                                    )
                                })}
                                </ul>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
      
    </div>
  )
}

export default Services
