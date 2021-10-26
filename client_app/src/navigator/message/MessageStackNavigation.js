import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MessageScreen from '../../pages/message/MessageScreen';
import MessageRoom from '../../pages/message/MessageRoom';

const Stack = createStackNavigator();

const MessageStackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="MessageRooms"
                          component={ MessageScreen }
                          options={{ headerShown: false }}
            />
            <Stack.Screen name="MessageRoom"
                          component={ MessageRoom }
            />
        </Stack.Navigator>
    );
};

export default MessageStackNavigation;