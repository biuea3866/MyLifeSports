import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyPageScreen from '../../pages/user/MyPageScreen';
import MyRentalScreen from '../../pages/user/MyRentalScreen';
import MyPostScreen from '../../pages/user/MyPostScreen';
import InformationScreen from '../../pages/user/InformationScreen';

const Stack = createStackNavigator();

const MyPageStackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="MyPage"
                children={
                    () => <MyPageScreen />
                }
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="MyRental"
                children={
                    () => <MyRentalScreen />
                }
            />
            <Stack.Screen 
                name="Information"
                children={
                    () => <InformationScreen />
                }
            />
            <Stack.Screen 
                name="MyPost"
                children={
                    () => <MyPostScreen />
                }
            />
        </Stack.Navigator>
    );
};

export default MyPageStackNavigation;