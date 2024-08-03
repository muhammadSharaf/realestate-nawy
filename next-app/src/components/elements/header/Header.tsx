import React from 'react';

interface Header {
    title: string,
    children?: React.ReactNode,
}

const Header: React.FC<Header> = ({title, children}) => {
    return (
        <h1 className="my-12 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {title}
            {children}
        </h1>
    );
};

export default Header;
