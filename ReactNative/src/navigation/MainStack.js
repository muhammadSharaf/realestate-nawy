import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS, ScreensContainer} from './SCREENS';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={SCREENS.MAIN.HOME}
        component={ScreensContainer[SCREENS.MAIN.HOME]}
      />
      <Stack.Screen
        name={SCREENS.APARTMENT.DETAILS}
        component={ScreensContainer[SCREENS.APARTMENT.DETAILS]}
      />
    </Stack.Navigator>
  );
}
