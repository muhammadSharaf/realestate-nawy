import HomeScreen from "../screens/main/HomeScreen";
import ApartmentDetailsScreen from "../screens/apartment/ApartmentDetailsScreen";

export const SCREENS = {
    MAIN: {
        HOME: 'HOME_MAIN',
    },
    APARTMENT: {
        DETAILS: 'APARTMENT_DETAILS',
    }
};

export const ScreensContainer = [];

ScreensContainer[SCREENS.MAIN.HOME] = HomeScreen;
ScreensContainer[SCREENS.APARTMENT.DETAILS] = ApartmentDetailsScreen;
