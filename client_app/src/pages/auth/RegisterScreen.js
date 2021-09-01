import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import palette from '../../styles/palette';
import RegisterForm from './components/RegisterForm';

const RegisterScreen = ({ navigation }) => {
    return(
        <View style={ styles.container }>
            <RegisterForm navigation={ navigation }/>
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

export default RegisterScreen;