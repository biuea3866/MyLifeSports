import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../../pages/map/MapScreen';

const Stack = createStackNavigator();

const MapStackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Map"
                component={ MapScreen }
                options={{
                    headerShown: false,
                }}
            />
            {/* <Stack.Screen 
                name="Rental"
                children={
                    () => <RentalScreen />
                }
            />
            <Stack.Screen
                name="Payment"
                children={
                    () => <PaymentScreen />
                }
            /> */}
        </Stack.Navigator>
    );
};

export default MapStackNavigation;