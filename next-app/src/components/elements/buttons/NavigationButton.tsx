import React from 'react';
import Link from "next/link";

interface Props {
    title: string;
    goTo: string;
}

const NavigationButton: React.FC<Props> = ({title, goTo}) => {
    return (<Link href={goTo}
                  className={"px-20 py-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full"}>
            {title}
        </Link>);
};

export default NavigationButton;
