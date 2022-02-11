import React from 'react';
import fotoPerfil from '../assets/image/david-perfil.jpeg'
import { MenuIcon } from '@heroicons/react/outline';

//my components
import Logo from './Logo.jsx';

export default function Navbar() {
    return (
        <section className="navbar shadow-2xl">
            <div className="flex py-3 px-2 lg:px-10 justify-between bg-white shadow-sm items-center">
                <div className="w-1/3 sm:hidden pl-2">
                    <div className="flex border border-indigo-500 rounded-sm h-7 w-7 items-center">
                        <MenuIcon className="h-6 w-6 text-indigo-500 mx-auto" />
                    </div>
                </div>
                <div className="flex sm:hidden">
                    <Logo />
                </div>

                <div className="w-1/3 sm:w-full flex item-center justify-end">
                    <div className="flex">
                        <div className="mr-1 p-1">
                            <img className="object-cover  w-10 h-10 rounded-full " src={fotoPerfil} />
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-lg font-bold">David Saenz</p>
                            <p className="text-sm text-gray-400">FullStack Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
