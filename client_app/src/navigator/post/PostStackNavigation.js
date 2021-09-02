import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from '../../pages/post/PostScreen';
import PostWriteScreen from '../../pages/post/PostWriteScreen';

const Stack = createStackNavigator();

const PostStackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Post"
                children={
                    () => <PostScreen />
                }
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="PostWrite"
                children={
                    () => <PostWriteScreen />
                }
            />
        </Stack.Navigator>
    );
};

export default PostStackNavigation;