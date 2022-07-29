import Link from 'next/link';	
import Image from 'next/image'
import logo from '../public/assets/logo.png'



export function Navbar() {
    return (
        <div className="fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-index-10">
            {/* Left side */}
            <div className="flex grow items-center justify-start ">
            <Link href='/'>
            <a>
                <Image 
                src={logo}
                alt='/'
                width='36'
                height='36'
                className='cursor-pointer z-10'/>
            </a>
            </Link>
            </div>
            {/* Middle  */}
            {/* Right side */}
        </div>
    )
}