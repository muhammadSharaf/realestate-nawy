import React from 'react';
import ApartmentDetails from "@/types/Apartment.type";

const Apartments: React.FC = async () => {

    const response = await fetch('http://localhost:3000/apartments');
    const apartments: ApartmentDetails[] = await response.json();

    return (<div className={"flex min-h-screen flex-col items-center justify-between p-24"}>
            <ul>
                {apartments.map((apartment: ApartmentDetails) => <li key={apartment.id}>{apartment.location}</li>)}
            </ul>
        </div>);
};

export default Apartments;
