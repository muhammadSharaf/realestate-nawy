import React from 'react';
import ApartmentDetails from "@/types/Apartment.type";
import Image from "next/image";

import DEFAULT_APARTMENT from '../../../public/images/apartment_placeholder.jpeg';
import Link from "next/link";

interface Apartment {
    apartment: ApartmentDetails
}

const Apartment: React.FC<Apartment> = ({apartment}) => {
    return (
        <Link href={'/apartments/' + apartment.id}>
            <div className={"bg-white border rounded-2xl overflow-hidden"}>
                <Image src={DEFAULT_APARTMENT} height={200} objectFit="cover" className={"w-full"} alt={'Apartment thumbnail'} />
                <div className={"flex flex-col p-4 gap-1"}>
                    <h1>{apartment.location}</h1>
                    <h1>{`Price ${apartment.totalPrice}`}</h1>
                    <div className={"flex gap-4 mt-8"}>
                        <h1>{`Beds ${apartment.beds}`}</h1>
                        <h1>{`Baths ${apartment.baths}`}</h1>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Apartment;
