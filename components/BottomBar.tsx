import Link from "next/link";

const BottomBar = () => {
    return (
        <main className="absolute bottom-20 lg:bottom-10 w-full">
            <h1 className="text-base text-white/60 text-center">Developed and maintained by:</h1>
            <h1 className="text-lg text-white font-black text-center pt-1">SSMS Tech Team</h1>
            <Link href={"https://docs.google.com/spreadsheets/d/1wkEz-p_0w1q7lGyHrIe2mj7VFG4kF78F/edit#gid=589421126"} target="_blank"><h1 className="text-center text-textgreen pt-2 text-sm font-bold cursor-pointer">Download the menu</h1></Link>
        </main>
    );
}
 
export default BottomBar;