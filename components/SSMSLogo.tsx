'use client'
import Image from "next/image";
import logo from '@/public/assets/download.png'
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem, Button, Divider} from "@nextui-org/react";
import Link from "next/link";

const SSMSLogo = () => {
    return (
        // <Image src={logo} alt="SSMS logo" className="rounded-full h-[50px] w-[50px] lg:h-[60px] lg:w-[60px]" />
        <Dropdown className="gap-2">
            <DropdownTrigger>
                <Button 
                variant="bordered" 
                >
                <Image src={logo} alt="SSMS logo" className="rounded-full h-[50px] w-[50px] lg:h-[60px] lg:w-[60px]" />
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" className="bg-darkgreen text-black rounded-lg text-lg px-5 py-5">
                <DropdownItem className=" border-b-4 border-b-black pb-2"><Link href={"/gc-members"}><button>GC Members</button></Link></DropdownItem>
                {/* <DropdownItem className=" pt-2"><Link href={"/"}><button>Developers</button></Link></DropdownItem> */}
            </DropdownMenu>
        </Dropdown>
    );
}
 
export default SSMSLogo;