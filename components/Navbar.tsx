'use client'
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {BsCalendar4} from 'react-icons/bs'
import Link from "next/link";

const Nav = () => {
    const days = [
        {
            letter : "M",
            link : "/monday"
        },
        {
            letter : "T",
            link : "/tuesday"
        },
        {
            letter : "W",
            link : "/wednesday"
        },
        {
            letter : "T",
            link : "/thursday"
        },
        {
            letter : "F",
            link : "/friday"
        },
        {
            letter : "S",
            link : "/saturday"
        },
        {
            letter : "S",
            link : "/sunday"
        },
    ]
    return (
        <nav className="absolute bottom-0 lg:left-0 lg:top-0 flex lg:flex-col justify-around lg:h-screen w-screen lg:w-auto items-center bg-textgreen rounded-t-lg lg:rounded-tl-none lg:rounded-r-lg border-t-4 lg:border-t-0 border-black">
            {days.map((day, key)=>(
                <Link href={day.link} className="h-full w-full">
                <button className="text-black py-3 px-5 font-bold text-xl hover:bg-black hover:text-textgreen w-full h-full transition-all ease-in-out">
                    {day.letter}
                </button>
                </Link>
            ))}
        </nav>
    );
}
 
export default Nav;