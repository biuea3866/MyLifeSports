import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../pages/auth/LoginScreen';
import RegisterScreen from '../pages/auth/RegisterScreen';
import HomeScreen from '../pages/home/HomeScreen';

const Stack = createStackNavigator();

const StackNavigatior = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="SignIn"
                    component={ LoginScreen }
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={ RegisterScreen }
                    options={{
                        title: 'Sign Up'
                    }}
                />
                <Stack.Screen
                    name="Tab"
                    component={ HomeScreen }
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigatior;