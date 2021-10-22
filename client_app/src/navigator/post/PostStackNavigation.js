import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from '../../pages/post/PostScreen';
import PostWriteScreen from '../../pages/post/PostWriteScreen';
import PostDetailScreen from '../../pages/post/PostDetailScreen';
import MapToWhereScreen from '../../pages/map/MapToWhereScreen';

const Stack = createStackNavigator();

const PostStackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Post"
                          component={ PostScreen }
                          options={{
                              headerShown: false,
                          }}
            />
            <Stack.Screen name="PostWrite"
                          component={ PostWriteScreen }
            />
            <Stack.Screen name="PostDetail" 
                          component={ PostDetailScreen }
            />
            <Stack.Screen name="MapToWhere"
                          component={ MapToWhereScreen }
            />
        </Stack.Navigator>
    );
};

export default PostStackNavigation;