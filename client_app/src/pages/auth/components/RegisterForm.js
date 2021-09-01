import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledFullButton from '../../../styles/common/StyledFullButton';
import StyledTextInput from '../../../styles/common/StyledTextInput';
import palette from '../../../styles/palette';

const RegisterForm = ({ navigation }) => {
    const toPressSignUp = e => {
        e.preventDefault();

        navigation.navigate(
            'SignIn', {
                name: 'SignIn'
            },
        );
    };

    return(
        <View style={ styles.container }>
            <StyledTextInput 
                name="email"
                placeholder="E-mail"
                placeholderTextColor={ palette.gray[5] }
            />
            <StyledTextInput 
                name="password"
                placeholder="Password"
                placeholderTextColor={ palette.gray[5] }
            />
            <StyledTextInput 
                name="passwordConfirm"
                placeholder="Re-Password"
                placeholderTextColor={ palette.gray[5] }
            />
            <StyledTextInput 
                name="nickname"
                placeholder="Nickname"
                placeholderTextColor={ palette.gray[5] }
            />
            <StyledTextInput 
                name="phoneNumber"
                placeholder="Phone-Number"
                placeholderTextColor={ palette.gray[5] }
            />
            <StyledFullButton 
                onPress={ toPressSignUp }
                text="Sign Up"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RegisterForm;