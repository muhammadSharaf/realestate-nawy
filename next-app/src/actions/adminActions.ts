'use server';

import ApartmentDetails from "@/types/Apartment.type";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

export const onAddApartment = async (formData: FormData) => {
    const apartment: ApartmentDetails = {
        location: formData.get('location') as string,
        totalPrice: parseInt(formData.get('totalPrice') as string),
        beds: parseInt(formData.get('beds') as string),
        baths: parseInt(formData.get('baths') as string),
    }

    //TODO validate input

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
