// import Image from 'next/image';
// import front_end from '@/data/front-end'
// import back_end from '@/data/back-end'
// import designers from '@/data/designers'
// import background from '@/public/assets/Pattern.png'
// import { AiFillPhone, AiOutlineGithub, AiFillLinkedin, AiFillBehanceCircle } from 'react-icons/ai';
// import { Lilita_One, Montserrat } from 'next/font/google';
// import Navbar2 from '@/components/Navbar2';
// import BottomBar from '@/components/BottomBar';
// import Link from 'next/link';
// import logo from "@/public/assets/download.png"

// const lilita = Lilita_One({weight:['400'], subsets:['latin']})
// const mont = Montserrat({weight:['400','500','700','600','900','100','200','300','800'], subsets:['latin']})

// const Developers = () => {
//     return (
//         <main className=" min-h-screen bg-black relative overflow-x-hidden">
//             <Image src={background} alt='background image' quality={100} style={{objectFit:'cover', maskRepeat: 'true'}} className='absolute h-screen w-screen bg-bggray' />
//             <div className='absolute w-screen h-screen bg-gradient-to-b from-transparent to-black'></div>
//             <div className='absolute top-5 lg:top-10 left-5 lg:left-20 z-50'>
//                 <Image src={logo} alt="SSMS Logo" className='h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] rounded-full' />
//             </div>
//             <Navbar2 />
//             <section className='flex flex-col justify-center absolute w-screen min-h-screen pt-10 lg:pt-40 pb-56 xl:pb-40'>
//                 <h1 className={lilita.className + ' text-6xl md:text-7xl text-center lg:text-8xl text-white font-black pt-10 lg:pt-0 pb-10 uppercase'}>Developers</h1>
//                 <div className=' px-10 lg:px-32 xl:px-40 gap-x-5 grid xl:grid-flow-col gap-y-20'>
//                     <DevComponent vertical='frontend' data={front_end} />
//                     <DevComponent vertical='backend' data={back_end} />
//                     <DevComponent vertical='design' data={designers} />
//                 </div>
//                 <BottomBar />
//             </section>
//         </main>
//     );
// }
 
// export default Developers;

// interface DevCompsProps {
//     vertical : string,
//     data : object[]
// }

// const DevComponent = ({vertical, data} : DevCompsProps) => {
//     return (
//         <div className={mont.className}>
//             <h2 className={mont.className + ' text-textgreen font-extrabold text-center text-4xl lg:text-4xl xl:text-5xl uppercase pb-5'}>{vertical}</h2>
//             <div style={{}} className=' gap-x-5 gap-y-5 flex flex-col'>
//                 {data.map((member,key)=>(
//                     <div key={key} className=' bg-bggray p-5 rounded-xl flex justify-between w-full items-center gap-5'>
//                         <div className=''>
//                             <h1 className='text-white text-lg lg:text-2xl font-semibold'>{member.name}</h1>
//                         </div>
//                         <div className='flex gap-2'>
//                             {member.github && (<div className='lg:text-3xl text-2xl text-gray-400'>
//                                 <Link href={member.github} target='_blank'>
//                                 <AiOutlineGithub />
//                                 </Link>
//                             </div>)}
//                             {member.behance && (<div className='lg:text-3xl text-2xl text-[#2c72ef]'>
//                                 <Link href={member.behance} target='_blank'>
//                                 <AiFillBehanceCircle />
//                                 </Link>
//                             </div>)}
//                             <div className='lg:text-3xl text-2xl text-[#017ab4] brightness-110'>
//                                 <Link href={member.linkedin} target='_blank'>
//                                 <AiFillLinkedin />
//                                 </Link>
//                             </div>
//                         </div>
//                         {/* <div className='lg:text-3xl text-2xl text-blue-300'>
//                             <Link href={'tel:+91' + member.contact}>
//                             <AiFillPhone />
//                             </Link>
//                         </div> */}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }