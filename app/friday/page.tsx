"use client";
import data from "@/data/menu";
import { Lilita_One, Montserrat } from "next/font/google";
import { useState, useEffect } from "react";
const pacifico = Lilita_One({ weight: ["400"], subsets: ["latin"] });
import Image from 'next/image';
import background from "@/public/assets/Pattern.png";
import Navbar2 from "@/components/Navbar2";
import BottomBar from "@/components/BottomBar";
import logo from "@/public/assets/download.png";
import { ThreeDots } from "react-loader-spinner";

const mont = Montserrat({
  weight: ["400", "500", "700", "600", "900", "100", "200", "300", "800"],
  subsets: ["latin"],
});

const Monday = () => {
  const [menu, setMenu] = useState([]);
  const [todayMenu, setTodayMenu] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [dayinMenu, setDayinMenu] = useState(true);

  const updateTodayMenu = (menu: any) => {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i] == null) {
        setDayinMenu(false);
      } else if (menu[i].day.trim().toLowerCase() == "friday") {
        setTodayMenu(menu[i]);
        setDayinMenu(true);
        setBreakfast(menu[i].breakfast);
        setLunch(menu[i].lunch);
        setDinner(menu[i].dinner);
        break;
      }
    }
  };
  const apiURL = process.env.NEXT_PUBLIC_API_URL
  const fetchMenu = async (apiURL: any) => {
    const res = await fetch(apiURL);
    const data = await res.json();
    setMenu(data);
    setFetched(true);
  };

  useEffect(() => {
    if (!fetched) {
      fetchMenu(apiURL);
    }
    if (fetched) {
      updateTodayMenu(menu)
    }
  }, [menu]);

  // useEffect(() => {
  //   if (fetched) {
  //     updateTodayMenu(menu);
  //   }
  // }, [menu]);

  return (
    <>
      {!fetched && (
        <main className={pacifico.className + "bg-black min-h-screen relative overflow-x-hidden flex justify-center items-center text-white"}>
          <Image
            src={background}
            style={{ objectFit: "cover" }}
            quality={100}
            alt="background"
            className="absolute w-screen min-h-screen md:h-screen bg-bggray"
          />
          <div className=" absolute min-h-screen w-screen bg-gradient-to-b from-transparent via-black/90 to-black"></div>
          <Navbar2 />
          <div className="absolute top-5 lg:top-10 left-5 lg:left-20 z-50">
            <Image
              src={logo}
              alt="SSMS Logo"
              className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] rounded-full"
            />
          </div>
          <div className="z-50">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#2dd293"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
          <BottomBar />
        </main>
      )}
      {fetched && !dayinMenu && (
        <main className="bg-black min-h-screen relative overflow-x-hidden">
          <Image
            src={background}
            style={{ objectFit: "cover" }}
            quality={100}
            alt="background"
            className="absolute w-screen min-h-screen md:h-screen bg-bggray"
          />
          <div className=" absolute min-h-screen w-screen bg-gradient-to-b from-transparent via-black/90 to-black"></div>
          <Navbar2 />
          <div className="absolute top-5 lg:top-10 left-5 lg:left-20 z-50">
            <Image
              src={logo}
              alt="SSMS Logo"
              className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] rounded-full"
            />
          </div>
          <div className="bg-black bottom-0 absolute h-screen"></div>
          <section className="absolute w-screen min-h-screen px-10 lg:px-20 xl:px-40 flex flex-col items-center justify-center pt-10 lg:pt-0 pb-28 lg:pb-0">
            <h1
              className={
                pacifico.className +
                " text-6xl md:text-7xl text-center lg:text-8xl text-white font-black pt-10"
              }
            >
              FRIDAY
            </h1>
            <div className="pb-10">
              <h1 className="text-3xl font-medium text-gray-400 pt-2">
                {(todayMenu as any).date}
              </h1>
            </div>
            <div
              className={
                pacifico.className +
                " flex flex-col w-full gap-10 pb-20 xl:pb-40"
              }
            >
              <p className="lg:text-4xl md:text-3xl text-2xl text-textgreen text-center">
                Menu will be updated shortly.
              </p>
            </div>
            <BottomBar />
          </section>
        </main>
      )}
      {fetched && dayinMenu && (
        <main className="bg-black min-h-screen relative overflow-x-hidden">
          <Image
            src={background}
            style={{ objectFit: "cover" }}
            quality={100}
            alt="background"
            className="absolute w-screen min-h-screen md:h-screen bg-bggray"
          />
          <div className=" absolute min-h-screen w-screen bg-gradient-to-b from-transparent via-black/90 to-black"></div>
          <Navbar2 />
          <div className="absolute top-5 lg:top-10 left-5 lg:left-20 z-50">
            <Image
              src={logo}
              alt="SSMS Logo"
              className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] rounded-full"
            />
          </div>
          <div className="bg-black bottom-0 absolute h-screen"></div>
          <section className="absolute w-screen min-h-screen px-10 lg:px-20 xl:px-40 flex flex-col items-center justify-center pt-10 lg:pt-0 pb-28 lg:pb-0">
            <h1
              className={
                pacifico.className +
                " text-6xl md:text-7xl text-center lg:text-8xl text-white font-black pt-10"
              }
            >
              FRIDAY
            </h1>
            <div className="pb-10">
              <h1 className="text-3xl font-medium text-gray-400 pt-2">
                {(todayMenu as any).date}
              </h1>
            </div>
            <div
              className={
                mont.className +
                " flex flex-col lg:grid lg:grid-cols-3 w-full gap-10 text-black pb-20 xl:pb-40"
              }
            >
              <div className=" flex flex-col justify-start items-center p-10 border-4 rounded-xl text-white border-textgreen/50">
                <h1 className="lg:text-5xl text-4xl pb-5 font-extrabold text-textgreen">
                  Breakfast
                </h1>

                <div className="flex flex-col gap-2 text-base md:text-xl font-medium text-center uppercase">
                  {breakfast.map((menuitem, key) => (
                    <h1 key={key}>{menuitem}</h1>
                  ))}
                </div>
              </div>
              <div className=" flex flex-col justify-start items-center p-10 border-4 border-textgreen/50 text-white rounded-xl">
                <h1 className="text-4xl lg:text-5xl pb-5 font-extrabold text-textgreen">
                  Lunch
                </h1>
                <div className="flex flex-col gap-2 text-base md:text-xl font-medium text-center uppercase">
                  {lunch.map((menuitem, key) => (
                    <h1 key={key}>{menuitem}</h1>
                  ))}
                </div>
              </div>
              <div className=" flex flex-col justify-start items-center p-10 border-4 border-textgreen/50 text-white rounded-xl">
                <h1 className="text-4xl md:text-5xl pb-5 font-extrabold text-textgreen">
                  Dinner
                </h1>
                <div className="flex flex-col gap-2 text-base md:text-xl font-medium text-center uppercase">
                  {dinner.map((menuitem, key) => (
                    <h1 key={key}>{menuitem}</h1>
                  ))}
                </div>
              </div>
            </div>
            <BottomBar />
          </section>
        </main>
      )}
    </>
  );
};

export default Monday;
