import BackButton from "./BackButton";
import SSMSLogo from "./SSMSLogo";

const Navbar2 = () => {
    return (
        <div className='absolute z-10 left-0 top-5 lg:top-10 px-5 flex gap-5 items-center w-screen justify-end'>
            <BackButton />
            <SSMSLogo />
        </div>
    );
}
 
export default Navbar2;