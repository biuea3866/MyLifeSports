import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MessageScreen from '../../pages/message/MessageScreen';
import RoomScreen from '../../pages/message/RoomScreen';

const Stack = createStackNavigator();

const MessageStackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="MessageRooms"
                          component={ MessageScreen }
                          options={{ headerShown: false }}
            />
            <Stack.Screen name="MessageRoom"
                          component={ RoomScreen }
            />
        </Stack.Navigator>
    );
};

export default MessageStackNavigation;