import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from "../../theme/globalStyles";
import Apartment from "../../components/apartment/Apartment";
import {getApartmentsWS} from "../../api/apartmentWebService";

function HomeScreen({navigation}) {

    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        const getApartments = async () => {
            const res = await getApartmentsWS();
            setApartments(prev => [...prev, res.data]);
        }
        getApartments();
    }, []);

    const renderApartments = apartments.map(apartment => {
        return (
            <Apartment key={apartment.id} apartment={apartment} />
        )
    })

    return (
        <SafeAreaView edges={['top', 'left', 'right']} style={globalStyles.screen}>
            {renderApartments}
        </SafeAreaView>
    );
}

export default HomeScreen;
