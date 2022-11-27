import React from "react";
import {BsCheck} from "react-icons/bs";

const Check = ({isCompleted}) => {
    return (
        <div className={'border-2 rounded-lg border-violet-600 w-5 h-5 mr-3'}>
            {isCompleted &&
            <BsCheck size={24} className={'text-amber-400'}/>
            }
        </div>
    )
}

export default Check