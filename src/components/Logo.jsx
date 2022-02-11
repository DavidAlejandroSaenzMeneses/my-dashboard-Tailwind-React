import React from 'react';
import { CodeIcon } from '@heroicons/react/solid';

export default function Logo(props) {
    return (
        <div className="w-full logo flex items-center">
            <h6 className={"font-bold flex text-md lg:text-2xl "+props.styleText} >Dev</h6>
            <CodeIcon className={"h-8 w-8 text-indigo-500 "+props.styleIcon} />
            <h6 className={"font-bold flex text-md lg:text-2xl "+props.styleText} >Lovers</h6>
        </div>
    )
}
