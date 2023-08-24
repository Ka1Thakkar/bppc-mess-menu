'use client'
import Image from "next/image";
import logo from '@/public/assets/download.png'
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem, Button, Divider} from "@nextui-org/react";
import Link from "next/link";

const SSMSLogo = () => {
    return (
        <Dropdown className="gap-2">
            <DropdownTrigger>
                <Button 
                variant="bordered" 
                >
                <Image src={logo} alt="SSMS logo" className="rounded-full h-[50px] w-[50px] lg:h-[75px] lg:w-[75px]" />
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" className="bg-black text-white rounded-lg text-lg px-5 py-5">
                <DropdownItem className=" border-b-2 border-b-white pb-2"><Link href={"/"}><button>Feedback</button></Link></DropdownItem>
                <DropdownItem className=" pt-2"><Link href={"/"}><button>Developers</button></Link></DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
 
export default SSMSLogo;