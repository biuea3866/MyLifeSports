import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity 
} from 'react-native';
import palette from '../../../styles/palette';

const LogoutButton = () => {
    const onLogout = e => {
        e.preventDefault();
    };

    return(
        <TouchableOpacity
            style={ styles.container }
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