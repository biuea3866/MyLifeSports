import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import palette from '../../styles/palette';
import LoginForm from './components/LoginForm';

const LoginScreen = ({ navigation }) => {
    return(
        <View style={ styles.container }>
            <LoginForm navigation={ navigation } />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.gray[1],
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LoginScreen;