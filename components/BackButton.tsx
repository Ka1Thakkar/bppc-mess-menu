import Link from 'next/link';
import {AiOutlineArrowLeft, AiOutlineHome} from 'react-icons/ai'

const BackButton = () => {
    return (
        <Link href={"/"}>
            <div className='rounded-full bg-darkgreen text-black text-xl lg:text-3xl p-2 h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] flex items-center justify-center'>
                <AiOutlineHome />
            </div>
        </Link>
    );
}
 
export default BackButton;