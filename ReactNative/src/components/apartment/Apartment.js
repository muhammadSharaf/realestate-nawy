import React from 'react';
import {Text, View} from "react-native";

const Apartment = ({apartment}) => {
    return (
        <View>
            <Text style={{color: 'black'}}>{apartment.location}</Text>
        </View>
    );
};

export default Apartment;
