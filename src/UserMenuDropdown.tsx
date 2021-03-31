import React from 'react';
import { Menu, Transition } from '@headlessui/react';

interface Props {}

const UserMenuDropdown: React.FC<Props> = () => {
    const logout = () => {
        console.log('Logged Out');
        return;
    };

    return (
        <div className='flex items-center justify-center'>
            <div className='relative inline-block text-left'>
                <Menu>
                    {({ open }) => (
                        <>
                            <Menu.Button className='inline-flex justify-center w-full text-sm font-medium leading-5 transition duration-150 ease-in-out  hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800'>
                                <div className='h-10 w-10 bg-gray-400 rounded-full'></div>
                            </Menu.Button>

                            <Transition
                                show={open}
                                enter='transition ease-out duration-100'
                                enterFrom='transform opacity-0 scale-95'
                                enterTo='transform opacity-100 scale-100'
                                leave='transition ease-in duration-75'
                                leaveFrom='transform opacity-100 scale-100'
                                leaveTo='transform opacity-0 scale-95'
                            >
                                <Menu.Items
                                    static
                                    className='absolute right-0 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-lg outline-none'
                                >
                                    <div className='px-4 py-3'>
                                        <p className='text-xs text-gray-700 leading-tight'>
                                            Signed in as
                                        </p>
                                        <p className='text-sm font-medium leading-5 text-gray-900 truncate'>
                                            imran@example.com
                                        </p>
                                    </div>

                                    <div className='py-1'>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <span
                                                    className={`${
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700'
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
                                                >
                                                    Account settings
                                                </span>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <span
                                                    className={`${
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700'
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
                                                >
                                                    Your Orders
                                                </span>
                                            )}
                                        </Menu.Item>
                                    </div>

                                    <div className='py-1'>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <span
                                                    className={`${
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700'
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
                                                    onClick={logout}
                                                >
                                                    Logout
                                                </span>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
            </div>
        </div>
    );
};

export default UserMenuDropdown;
