import React from 'react';
import { CodeIcon } from '@heroicons/react/solid';
import fotoPerfil from '../assets/image/david-perfil.jpeg'
import { MenuIcon } from '@heroicons/react/outline';

export default function Navbar() {
    return (
        <section className="navbar shadow-2xl">
            <div className="flex py-2 lg:py-6 px-2 lg:px-10 justify-between bg-white shadow-sm items-center">
                <div className="w-1/3 sm:hidden pl-2">
                    <MenuIcon className="h-6 w-6 hover:text-indigo-500 hover:h-7 hover:w-7"/>
                </div>
                <div className="w-1/3 sm:w-1/2 logo flex items-center">
                    <h6 className="font-bold flex text-2xl">Dev<CodeIcon className="h-8 w-8 text-indigo-500" />
                        Lovers</h6>
                </div>

                <div className="w-1/3 sm:w-1/2 flex item-center justify-end">
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
