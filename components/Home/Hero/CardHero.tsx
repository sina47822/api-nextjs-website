import React from 'react'
import { Button } from '../../ui/button'
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
    <div key={id} >
      <div className="flex flex-col bg-red-100 dark:bg-gray-800 rounded-lg p-3 py-2">
        <div className="flex items-center justify-between px-3">
          <div>
            <p>{label}</p>
          </div>
          <div>
            <Link href={url} passHref>
              <Button className="rounded-xl bg-green-700 dark:bg-green-400 dark:hover:bg-green-300 hover:bg-green-600">
                {buttontext}
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm pt-2">{underline}</p>
        </div>
      </div>
    </div>
  )
}

export default CardHero
