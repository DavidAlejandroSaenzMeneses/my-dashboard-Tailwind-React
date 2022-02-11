import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChartBarIcon, CogIcon, HomeIcon, UserIcon, UsersIcon } from '@heroicons/react/outline';

//my components
import Logo from './Logo.jsx';

export default function Sidebar() {
    return (
        <aside className=" hidden sm:block overflow-auto h-screen w-1/4 lg:w-1/6 sidebar pl-6 py-6 bg-gradient-to-r from-indigo-600 to-blue-400">
            <div>
                <Logo styleText="text-white" styleIcon="text-yellow-400" />
            </div>
            <div className="menu flex py-4">
                <div className="option-list block w-full my-4">
                    <h6 className="font-bold my-4 text-white">Acciones</h6>
                    <ul className="block w-full">
                        <li className="item1 item-menu group">
                            <NavLink to="/home" activeclass="item-menu-active" className="flex">
                                <div className="item-menu-container">
                                    <HomeIcon className="item-menu-icon" />
                                </div>
                                <p className="item-menu-text">Inicio</p>
                            </NavLink>
                        </li>
                        <li className="item2 item-menu group">
                            <NavLink to="/home" activeclass="item-menu-active" className="flex">
                                <div className="item-menu-container rounded-br-lg">
                                    <UsersIcon className="item-menu-icon" />
                                </div>
                                <p className="item-menu-text">Usuarios</p>
                            </NavLink>
                        </li>
                        <li className="item3 item-menu group">
                            <NavLink to="/balance" activeclass="item-menu-active" className="flex">
                                <div className="item-menu-container">
                                    <ChartBarIcon className="item-menu-icon" />
                                </div>
                                <p className="item-menu-text">Balance</p>
                            </NavLink>
                        </li>
                    </ul>
                    <h6 className="font-bold my-4 item-menu-text rounded-tr-lg">Configuracion</h6>
                    <ul>
                        <li className="item4 item-menu group">
                            <NavLink to="/home" activeclass="item-menu-active" className="flex">
                                <div className="item-menu-container">
                                    <UserIcon className="item-menu-icon" />
                                </div>
                                <p className="item-menu-text">Perfil</p>
                            </NavLink>
                        </li>
                        <li className="item5 item-menu group">
                            <NavLink to="/home" activeclass="item-menu-active" className="flex">
                                <div className="item-menu-container">
                                    <CogIcon className="item-menu-icon" />
                                </div>
                                <p className="item-menu-text">Ajustes</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}
