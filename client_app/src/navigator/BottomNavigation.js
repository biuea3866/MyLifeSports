import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import palette from '../styles/palette';
import HomeScreen from '../pages/home/HomeScreen';
import PostStackNavigation from './post/PostStackNavigation';
import MapScreen from '../pages/map/MapScreen';
import MyPageScreen from '../pages/user/MyPageScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = ({ route }) => {
    return(
        <Tab.Navigator
            
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    var iconName;
                    var iconSize;

                    if(route.name === 'Home') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                        iconSize = focused ? 32 : 24;
                    } else if (route.name === 'Post') {
                        iconName = focused ? 'ios-reader' : 'ios-reader-outline';
                        iconSize = focused ? 32 : 24;
                    } else if (route.name === 'Map'){
                        iconName = focused ? 'ios-location' : 'ios-location-outline';
                        iconSize = focused ? 32 : 24;
                    } else if (route.name === 'MyPage'){
                        iconName = focused ? 'ios-person' : 'ios-person-outline';
                        iconSize = focused ? 32 : 24;
                    }

                    return (
                        <Icon 
                            size={ iconSize }
                            name={ iconName } 
                            color={ color }
                        />
                    )
                }
            })}

            tabBarOptions = {{
                activeTintColor: palette.blue[4],
                inactiveTintColor: palette.gray[5],
            }}
        >
            <Tab.Screen 
                name="Home"
                options={{
                    title: 'Life Sport',
                    tabBarLabel: 'Home',
                    headerStyle: {
                        backgroundColor: palette.blue[4],
                    },
                    headerTintColor: palette.white[0],
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }}
                children={
                    () => <HomeScreen />
                }
            />
            <Tab.Screen 
                name="Post"
                options={{
                    headerShown: false,
                }}
                children={
                    () => <PostStackNavigation />
                }
            />
            <Tab.Screen 
                name="Map"
                children={
                    () => <MapScreen />
                }
            />
            <Tab.Screen 
                name="MyPage"
                children={
                    () => <MyPageScreen />
                }
            />
        </Tab.Navigator>
    );
};

export default BottomNavigation;