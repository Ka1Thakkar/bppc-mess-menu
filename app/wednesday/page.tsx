import data from '@/data/menu'
import { Lilita_One, Montserrat } from 'next/font/google';
const pacifico = Lilita_One({weight:['400'], subsets:['latin']})
import Image from 'next/image';
import background from '@/public/assets/Pattern.png'
import Navbar2 from '@/components/Navbar2';

const mont = Montserrat({weight:['400','500','700','600','900','100','200','300','800'], subsets:['latin']})

const Wednesday = () => {
    const breakfast_consts = [
        "CHOICE OF EGG",
        "CORNFLAKES",
        "BREAD + JAM",
        "TEA + COFFEE",
        "MILK",
    ]
    return (
    <main className='bg-black min-h-screen relative overflow-x-hidden'>
        <Image src={background} style={{objectFit: 'cover'}} quality={100} alt='background' className='absolute w-screen min-h-screen md:h-screen bg-bggray' />
        <div className=' absolute min-h-screen w-screen bg-gradient-to-b from-transparent via-black/90 to-black'></div>
        <div className='bg-black bottom-0 absolute h-screen'></div>
        <Navbar2 />
    <section className='absolute w-screen min-h-screen px-10 lg:px-20 xl:px-40 flex flex-col items-center justify-center pt-10 lg:pt-0'>
      <h1 className={pacifico.className + " text-6xl md:text-7xl text-center lg:text-8xl text-white font-black pt-10"}>{data[2].Day}</h1>
      <div className='pb-10'>
        <h1 className='text-3xl font-medium text-gray-400 pt-2'>{data[2].Date}</h1>
      </div>
      <div className={mont.className + ' flex flex-col lg:grid lg:grid-cols-3 w-full gap-10 text-black pb-20'}>
        <div className=' flex flex-col justify-start items-center p-10 border-4 rounded-xl text-white border-textgreen/50'>
        <h1 className='lg:text-5xl text-4xl pb-5 font-extrabold text-textgreen'>Breakfast</h1>
          <div className=''>
            {breakfast_consts.map((breakfast, i)=>(
              <h1 key={i} className='text-center text-base lg:text-xl'>{breakfast}</h1>
            ))}
          </div>
          <div className='flex flex-col gap-2 text-base lg:text-xl font-medium text-center '>{data[2].B.map((menuitem, key) => (
            <h1 key={key}>{menuitem}</h1>
          ))}</div>
        </div>
        <div className=' flex flex-col justify-start items-center p-10 border-4 border-textgreen/50 text-white rounded-xl'>
          <h1 className='text-4xl lg:text-5xl pb-5 font-extrabold text-textgreen'>Lunch</h1>
          <div className='flex flex-col gap-2 text-base md:text-xl font-medium text-center px-10'>{data[2].L.map((menuitem, key) => (
            <h1 key={key}>{menuitem}</h1>
          ))}</div>
        </div>
        <div className=' flex flex-col justify-start items-center p-10 border-4 border-textgreen/50 text-white rounded-xl'>
          <h1 className='text-4xl md:text-5xl pb-5 font-extrabold text-textgreen'>Dinner</h1>
          <div className='flex flex-col gap-2 text-base md:text-xl font-medium text-center px-10'>{data[2].D.map((menuitem, key) => (
            <h1 key={key}>{menuitem}</h1>
          ))}</div>
        </div>
      </div>
    </section>
    </main>
    );
}
 
export default Wednesday;