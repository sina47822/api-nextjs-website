import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { CardMinHero } from '@/constant/cardminhero'

type Props ={
  id:number,
  url:string,
  label: string,
  buttontext:string,
  underline:string,
};

const CardHero = ({id, url , label,buttontext,underline} :Props) => {
  return (
    <div>
        <li className='drop-shadow-md'>
            <Link key={id} href={url} className="">
              <div className='flex flex-col bg-red-100 rounded-lg p-3 py-2'>
              <div className='flex items-center justify-between px-3'>
                  <div className=''>
                  <p>{label}</p>
                  </div>
                  <div>
                  <Button className='rounded-xl bg-green-700 hover:bg-green-600'>{buttontext}</Button>
                  </div>
              </div>
              <div>
                  <p className='text-sm pt-2'>
                    {underline}                  
                  </p>
              </div>
              </div>
            </Link>
        </li>
    </div>
  )
}

export default CardHero
