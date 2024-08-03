'use client';

import React from 'react';
import {useFormStatus} from "react-dom";

const ButtonAction: React.FC = () => {
    const {pending} = useFormStatus();

    return (
        <button type={"submit"} disabled={pending}
                className={"my-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"}>
            {pending ? 'Submitting...' : 'Submit'}
        </button>
    );
};

export default ButtonAction;
