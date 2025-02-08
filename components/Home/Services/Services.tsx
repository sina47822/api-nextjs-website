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
    <div className='pt-16 pb-16 dark:bg-gray-900'>
        <div className='flex flex-col items-center'>
            <ul className='gird grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-center items-center'>
                {ServicesCat.map((link) => {
                    return (
                        <li key={link.id} className='flex flex-col'>
                            <Link href={link.url} >{link.label}</Link> 
                            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 pb-10 pt-10 gap-5'>
                                {link.card.map((cardlink) => {
                                    return (
                                        <li className='border rounded-lg px-4 py-5 border-blue-300/40 dark:bg-violet-500 dark:hover:bg-violet-600 bg-sky-300 hover:bg-sky-200 '>
                                            <ServicesCard id={cardlink.id} label={cardlink.label} iconurl={cardlink.iconurl} url={cardlink.url} underline={cardlink.underline}/>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Services
