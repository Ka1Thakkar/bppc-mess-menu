import Image from 'next/image';
import gc_members from '@/data/gc_members'
import background from '@/public/assets/Pattern.png'
import { AiFillPhone } from 'react-icons/ai';
import { Lilita_One } from 'next/font/google';
import Navbar2 from '@/components/Navbar2';
import BottomBar from '@/components/BottomBar';
import Link from 'next/link';

const lilita = Lilita_One({weight:['400'], subsets:['latin']})

const GCMembers = () => {
    return (
        <main className=" min-h-screen bg-black relative overflow-x-hidden">
            <Image src={background} alt='background image' quality={100} style={{objectFit:'cover', maskRepeat: 'true'}} className='absolute h-screen w-screen bg-bggray' />
            <div className='absolute w-screen h-screen bg-gradient-to-b from-transparent to-black'></div>
            <Navbar2 />
            <section className='flex flex-col justify-center absolute w-screen min-h-screen pt-10 lg:pt-0 pb-44 xl:pb-0'>
                <h1 className={lilita.className + ' text-6xl md:text-7xl text-center lg:text-8xl text-white font-black pt-10 lg:pt-0 pb-10'}>GC Members</h1>
                <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-10 lg:px-32 xl:px-40 gap-y-5 flex flex-col gap-5'>
                    {gc_members.map((member,key)=>(
                        <div className=' bg-bggray p-5 rounded-xl flex justify-between w-full items-center'>
                            <div className=''>
                                <h1 className='text-white text-lg lg:text-2xl font-bold'>{member.name}</h1>
                                <p className='text-textgreen font-medium lg:text-xl'>{member.position}</p>
                            </div>
                            <div className='lg:text-3xl text-2xl text-blue-500'>
                                <Link href={'tel:+91' + member.contact}>
                                <AiFillPhone />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <BottomBar />
            </section>
        </main>
    );
}
 
export default GCMembers;