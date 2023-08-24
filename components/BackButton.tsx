import Link from 'next/link';
import {AiOutlineArrowLeft} from 'react-icons/ai'

const BackButton = () => {
    return (
        <Link href={"/"}>
            <div className='rounded-full bg-darkgreen text-black text-xl lg:text-3xl p-2'>
                <AiOutlineArrowLeft />
            </div>
        </Link>
    );
}
 
export default BackButton;