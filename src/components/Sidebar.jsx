import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChartBarIcon, CogIcon, HomeIcon, UserIcon, UsersIcon } from '@heroicons/react/outline';

export default function Sidebar() {
    return (
        <aside className=" hidden sm:block w-1/4 lg:w-1/6 sidebar p-6 bg-indigo-500">
            <h6 className="font-bold my-4 text-white">Acciones</h6>
            <ul className="block">
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
                        <div className="item-menu-container">
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
            <h6 className="font-bold my-4 item-menu-text">Configuracion</h6>
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
        </aside>
    );
}
