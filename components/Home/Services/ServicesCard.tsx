import Link from 'next/link';
import React from 'react'

type Props ={
    id: number;
    url: string;
    label: string;
    iconurl:string;
    underline:string;
  };

const ServicesCard = ({id, url, label, iconurl,underline}: Props) => {
  return (
    <div key={id}>
        <Link  href={url} className="flex">
            <div className='flex '>
                <img src={iconurl} alt={label} width={40} height={40}/>
            </div>
            <div>
                <p className='pr-3 pl-6 flex-wrap text-lg'>{label}</p>
                <span className='text-sm'>{underline}</span>
            </div>
        </Link>
    </div>
  )
}

export default ServicesCard
