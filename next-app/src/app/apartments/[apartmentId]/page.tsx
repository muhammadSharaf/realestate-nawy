import React from 'react';
import ApartmentDetails from "@/types/Apartment.type";
import DEFAULT_APARTMENT from "../../../../public/images/apartment_placeholder.jpeg";
import Image from "next/image";

const Apartments = async (props: any) => {
    const {apartmentId} = props.params;

    const response = await fetch(`http://express:3000/apartments/${apartmentId}`);
    const apartment: ApartmentDetails = await response.json();

    return (<div className={"min-h-screen p-8"}>
        <Image src={DEFAULT_APARTMENT} height={200} alt={'Apartment thumbnail'} />
        <div className={"flex flex-col p-4 gap-1"}>
            <h1>{apartment.location}</h1>
            <h1>{`Price ${apartment.totalPrice}`}</h1>
            <div className={"flex gap-4"}>
                <h1>{`Beds ${apartment.beds}`}</h1>
                <h1>{`Baths ${apartment.baths}`}</h1>
            </div>
        </div>
    </div>);
};

export default Apartments;
