import React from 'react';
import ApartmentDetails from "@/types/Apartment.type";
import Apartment from "@/components/apartments/Apartment";
import Header from "@/components/elements/header/Header";

const Apartments: React.FC = async () => {

    const response = await fetch(`http://express:3000/apartments`);
    const apartments: ApartmentDetails[] = await response.json();

    const renderApartments = apartments.map((apartment: ApartmentDetails) => <li key={apartment.id}>
        <Apartment apartment={apartment} />
    </li>);

    return (<div className={"min-h-screen p-8"}>
            <ul className={"grid grid-cols-5 gap-4"}>
                {apartments.length === 0 && <Header title={'No available apartments'} />}
                {renderApartments}
            </ul>
        </div>);
};

export default Apartments;
