import React from 'react';
import { 
    StyleSheet,
    Text, 
    TouchableOpacity 
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { logout } from '../../../modules/user';
import palette from '../../../styles/palette';

const LogoutButton = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const onLogout = e => {
        e.preventDefault();

        dispatch(logout());

        navigation.navigate('SignIn');
    };

    return(
        <TouchableOpacity style={ styles.container }
                          onPress={ onLogout }
        >
            <Text style={ styles.text }>
                Logout
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 50,
        borderRadius: 30,
        borderColor: palette.blue[4],
        borderWidth: 2,
        backgroundColor: palette.white[0],
        marginTop: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        color: palette.blue[4],
    },
});

export default LogoutButton;