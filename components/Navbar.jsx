import Link from 'next/link';
import Image from 'next/image'
import logo from '../public/assets/logo.png'
import { Menu, Transition } from '@headlessui/react';
import { BsThreeDotsVertical, BsSearch ,BsPerson} from 'react-icons/bs';
import { Fragment } from 'react';


function classNames(...classes) {
    return classes.filter(Boolean).join('');
}



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
                            className='cursor-pointer z-10' />
                    </a>
                </Link>
                <p className='p-4'>Browse</p>
                <div className='p-4'>
                    <Menu as='div' className='relative text-left'>
                        <div className='flex'>
                            <Menu.Button>
                                <BsThreeDotsVertical size={20} />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter='transition ease-out duration-100'
                            enterFrom='transform opacity-0 scale-95'
                            enterTo='transform opacity-100 scale-100'
                            leave='transition ease-in duration-75'
                            leaveFrom='transform opacity-100 scale-100'
                            leaveTo='transform opacity-0 scale-95'
                        >
                            <Menu.Items className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                                <div className='py-1'>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href='#'
                                                className={classNames(
                                                    active
                                                        ? 'bg-gray-500 text-gray-100'
                                                        : 'text-gray-200',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href='#'
                                                className={classNames(
                                                    active
                                                        ? 'bg-gray-500 text-gray-100'
                                                        : 'text-gray-200',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href='#'
                                                className={classNames(
                                                    active
                                                        ? 'bg-gray-500 text-gray-100'
                                                        : 'text-gray-200',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                License
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
            {/* Middle  */}
            <div className='hidden md:flex grow-[2] items-center justify-center'>
                <div className='bg-gray-500 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-xl '>
                    <div>
                        <input
                            type="text"
                            className='bg-transparent border-none
                          text-white focus:outline-none'
                            placeholder='Search' />
                    </div>
                    <div>
                        <BsSearch />
                    </div>
                </div>
            </div>
            {/* Right side */}
            <div className='hidden md:flex grow items-center justify-end'>
                <div className='flex items-center'>
                    <Link href='/'>
                    <button className='px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] mr-2'>
                        Account
                    </button>
                    </Link>
                    <BsPerson size={30}/>
                </div>
            </div>
        </div>
    )
}