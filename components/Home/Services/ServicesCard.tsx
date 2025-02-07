import Link from 'next/link';
import React from 'react'

type Props ={
    id: number;
    url: string;
    label: string;
    iconurl:string;
  };

const ServicesCard = ({id, url, label, iconurl}: Props) => {
  return (
    <div>
        <li className='border rounded-lg px-10 py-5  mx-3 border-blue-300/40 '>
        <Link key={id} href={url} className="">
            <div className='flex max-w-[160px] min-w-[160px] max-h-[40px] min-h-[40px]'>
                <img src={iconurl} alt={label} width={40} height={40}/>
                <p className='pr-3 pl-6 flex-wrap'>{label}</p>
            </div>
        </Link>
        </li>
    </div>
  )
}

export default ServicesCard
