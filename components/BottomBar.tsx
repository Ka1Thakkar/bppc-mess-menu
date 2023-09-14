import Link from "next/link";

const BottomBar = () => {
    return (
        <main className="absolute bottom-20 lg:bottom-10 w-full">
            <h1 className="text-base text-white/60 text-center">Developed and maintained by:</h1>
            <h1 className="text-lg text-white font-black text-center pt-1">SSMS Tech Team</h1>
            <Link href={"https://docs.google.com/spreadsheets/d/1o64BYwa-RrD5Ydcft0jKp-WDuC13hSiR/edit?usp=sharing&ouid=106094898154491564206&rtpof=true&sd=true"} target="_blank"><h1 className="text-center text-textgreen pt-2 text-sm font-bold cursor-pointer">Download the menu</h1></Link>
        </main>
    );
}
 
export default BottomBar;