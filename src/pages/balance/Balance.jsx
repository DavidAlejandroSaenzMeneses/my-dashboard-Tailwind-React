import { CurrencyDollarIcon } from '@heroicons/react/outline';
import React from 'react';

export default function Balance() {
    return (
        <div className="bg-gray-200 h-5/6 w-5/6 rounded-xl p-4 mx-auto my-4 shadow-lg">
            <div className="items-center p-2 flex">
                <div><CurrencyDollarIcon className="h-6 w-6 text-indigo-500"/></div>
                <h1 className="text-2xl font-bold py-4 text-indigo-500">Balance General</h1>
            </div>
            <hr className="bg-indigo-500"></hr>
        </div>
    );
}
