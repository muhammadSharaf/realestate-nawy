'use server';

import ApartmentDetails from "@/types/Apartment.type";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

export const onAddApartment = async (formData: FormData) => {
    const location = formData.get('location') as string;
    const totalPrice = parseInt(formData.get('totalPrice') as string);
    const beds = parseInt(formData.get('beds') as string);
    const baths = parseInt(formData.get('baths') as string);

    if (!location || isNaN(totalPrice) || isNaN(beds) || isNaN(baths)) {
        return { message: 'Please provide valid inputs for all fields.' };
    }

    const apartment: ApartmentDetails = {
        location,
        totalPrice,
        beds,
        baths,
    }

    const res = await fetch('http://localhost:3000/admin/addApartment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(apartment),
    })

    if (res.status === 201) {
        revalidatePath('/apartments');
        redirect('apartments');
    } else {
        return {message: 'Please verify your inputs'}
    }
}
