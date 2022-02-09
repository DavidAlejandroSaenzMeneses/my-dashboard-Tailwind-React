import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//my components
import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Home from '../pages/home/Home.jsx';
import Balance from '../pages/balance/Balance.jsx';



export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <section className="w-full">
                <div className=" flex h-screen w-screen">
                    <Sidebar  className="left" />
                    <div className="right w-full sm:w-3/4 lg:w-5/6 text-center p-2 bg-gray-100 bg-contain">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/balance" element={<Balance />} />
                        </Routes>
                    </div>
                </div>
            </section>

        </BrowserRouter>
    );
}
