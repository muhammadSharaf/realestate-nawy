interface ApartmentDetails {
    id?: number;
    location: string;
    image?: string;
    beds: number;
    baths: number;
    totalPrice: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default ApartmentDetails;
