import React from "react";
import {BsCheck} from "react-icons/bs";
import cn from "classnames";

const Check = ({isCompleted}) => {
    return (
        <div className={cn(`border-2 rounded-lg border-violet-600 w-5 h-5 mr-3
        flex items-center justify-center`,
            {
            'bg-pink-400': isCompleted,
            })}>
            {isCompleted &&
            <BsCheck size={24} className={'text-amber-400'}/>
            }
        </div>
    )
}

export default Check