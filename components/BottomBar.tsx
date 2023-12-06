import Link from "next/link";

const BottomBar = () => {
    return (
        <main className="absolute bottom-20 lg:bottom-5 w-full">
            <h1 className="text-base text-white/60 text-center">Developed and maintained by:</h1>
            <h1 className="text-lg text-white font-black text-center pt-1">SSMS Tech Team</h1>
            {/* <a href="../Menu/menu 16th to 31st oct-23-2.pdf" download={"Mess Menu"}><h1 className="text-center text-textgreen pt-2 text-sm font-bold cursor-pointer">Download the menu</h1></a> */}
        </main>
    );
}
 
export default BottomBar;