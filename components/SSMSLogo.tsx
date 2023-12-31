'use client'
import Image from "next/image";
import logo from '@/public/assets/icons8-hamburger-menu-50.png'
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem, Button, Divider} from "@nextui-org/react";
import Link from "next/link";

const SSMSLogo = () => {
    return (
        // <Image src={logo} alt="SSMS logo" className="rounded-full h-[50px] w-[50px] lg:h-[60px] lg:w-[60px]" />
        <Dropdown className="gap-2">
            <DropdownTrigger>
                <Button 
                variant="bordered"
                className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] bg-darkgreen flex justify-center items-center rounded-full"
                >
                <Image src={logo} alt="SSMS logo" className="h-[20px] w-[20px] lg:h-[25px] lg:w-[25px]" />
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" className="bg-darkgreen text-black rounded-lg text-lg px-5 py-5">
                <DropdownItem className=""><Link href={"/gc-members"}><button>GC Members</button></Link></DropdownItem>
                {/* <DropdownItem className=" pt-2"><Link href={"/"}><button>Developers</button></Link></DropdownItem> */}
            </DropdownMenu>
        </Dropdown>
    );
}
 
export default SSMSLogo;