'use client'
import Image from 'next/image'
import { Lilita_One, Montserrat, Pacifico } from 'next/font/google'
import background from '@/public/assets/Pattern.svg'
import data from '@/data/timings'
import SSMSLogo from '@/components/SSMSLogo'
import BottomBar from '@/components/BottomBar'
import logo from '@/public/assets/download.png'
import { useRouter } from 'next/navigation'
import {useEffect, useState} from 'react'

const pacifico = Lilita_One({weight:['400'], subsets:['latin']})

const mont = Montserrat({weight:['400','500','700','600','900','100','200','300','800'], subsets:['latin']})

let selected_day = 0
selected_day = (new Date().getDay() + 6) % 7
let date = new Date().toUTCString().slice(5, 16);
let day = new Date().getDay();
const todayDay= day==1?'monday':day==2?'tuesday':day==3?'wednesday':day==4?'thursday':day==5?'friday':day==6?'saturday':'sunday';
let runCount =0
export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    if(runCount==0){
    router.push(`/${todayDay}`);
    runCount =1;
    }
  },[])
  const breakfast_consts = [
    "CHOICE OF EGG",
    "CORNFLAKES",
    "BREAD + JAM",
    "TEA + COFFEE",
    "MILK",
  ]


  return (
    <main className=' bg-black min-h-screen relative overflow-x-hidden'>
      <div className='absolute top-5 lg:top-10 left-5 lg:left-20 z-50'>
        <Image src={logo} alt="SSMS Logo" className='h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] rounded-full' />
      </div>
      <Image src={background} style={{objectFit: 'cover'}} quality={100} alt='background' className='absolute w-screen min-h-screen md:h-screen bg-bggray' />
      <div className=' absolute min-h-screen w-screen bg-gradient-to-b from-transparent via-black/90 to-black'></div>
      <div className='bg-black bottom-0 absolute h-screen'></div>
      <div className='absolute right-5 top-5 lg:top-10 flex gap-2 pl-5 lg:pl-40'>
        <SSMSLogo />
      </div>
      <section className='absolute w-screen min-h-screen px-10 lg:px-20 xl:px-40 flex flex-col items-center justify-center pt-10 lg:pt-0 pb-28 lg:pb-0'>
      <h1 className={pacifico.className + " text-6xl md:text-7xl text-center lg:text-8xl text-white font-black pt-10 uppercase"}>Mess Timings</h1>
      <div className='pb-10'>
        <h1 className='text-3xl font-medium text-gray-400 pt-2'></h1>
      </div>
      <div className={mont.className + ' flex flex-col lg:grid lg:grid-cols-3 w-full gap-10 text-black pb-20 xl:pb-40'}>
        <div className=' flex flex-col justify-start items-center p-10 border-4 border-textgreen/50 text-white rounded-xl'>
          <h1 className='text-4xl lg:text-5xl pb-5 font-extrabold text-textgreen'>Breakfast</h1>
          <div className='flex flex-col gap-2 text-base md:text-xl font-medium text-center'>{data[0].B.map((menuitem, key) => (
            <h1 key={key}>{menuitem}</h1>
          ))}</div>
        </div>
        <div className=' flex flex-col justify-start items-center p-10 border-4 border-textgreen/50 text-white rounded-xl'>
          <h1 className='text-4xl lg:text-5xl pb-5 font-extrabold text-textgreen'>Lunch</h1>
          <div className='flex flex-col gap-2 text-base md:text-xl font-medium text-center'>{data[0].L.map((menuitem, key) => (
            <h1 key={key}>{menuitem}</h1>
          ))}</div>
        </div>
        <div className=' flex flex-col justify-start items-center p-10 border-4 border-textgreen/50 text-white rounded-xl'>
          <h1 className='text-4xl md:text-5xl pb-5 font-extrabold text-textgreen'>Dinner</h1>
          <div className='flex flex-col gap-2 text-base md:text-xl font-medium text-center'>{data[1].D.map((menuitem, key) => (
            <h1 key={key}>{menuitem}</h1>
          ))}</div>
        </div>
      </div>
      <BottomBar />
      </section>
    </main>
  )
}
