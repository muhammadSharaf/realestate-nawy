import React from 'react';
import TextInput from "@/components/elements/inputs/TextInput";
import Header from "@/components/elements/header/Header";
import ButtonAction from "@/components/elements/buttons/ButtonAction";
import {onAddApartment} from "@/actions/adminActions";

const Admin: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <Header title={'Add new Apartment'}/>
            <form className={"flex flex-col w-1/2 my-12 gap-4"} action={onAddApartment}>
                <TextInput name={'location'} label={'Location'}/>
                <TextInput name={'totalPrice'} label={'Total price'}/>
                <TextInput name={'beds'} label={'Number of Beds'}/>
                <TextInput name={'baths'} label={'Number of Baths'}/>

                <ButtonAction/>
            </form>
        </main>
    );
};

export default Admin;
