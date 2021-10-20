import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyPageScreen from '../../pages/user/MyPageScreen';
import MyRentalScreen from '../../pages/user/MyRentalScreen';
import MyPostScreen from '../../pages/user/MyPostScreen';
import InformationScreen from '../../pages/user/InformationScreen';
import PaymentScreen from '../../pages/payment/PaymentScreen';

const Stack = createStackNavigator();

const MyPageStackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="MyPage"
                          component={ MyPageScreen }
                          options={{
                              headerShown: false
                          }}
            />
            <Stack.Screen name="MyRental"
                          component={ MyRentalScreen }
            />
            <Stack.Screen name="Information"
                          component={ InformationScreen }
            />
            <Stack.Screen name="MyPost"
                          component={ MyPostScreen }
            />
            <Stack.Screen name="Payment"
                          component={ PaymentScreen }
            />
        </Stack.Navigator>
    );
};

export default MyPageStackNavigation;