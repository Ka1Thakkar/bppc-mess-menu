import BackButton from "./BackButton";
import SSMSLogo from "./SSMSLogo";

const Navbar2 = () => {
    return (
        <div className='absolute z-10 right-2 top-5 lg:top-10 flex gap-2 items-center w-screen justify-end'>
            <BackButton />
            <SSMSLogo />
        </div>
    );
}
 
export default Navbar2;