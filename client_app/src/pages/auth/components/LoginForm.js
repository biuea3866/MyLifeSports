import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledBorderButton from '../../../styles/common/StyledBorderButton';
import StyledFullButton from '../../../styles/common/StyledFullButton';
import StyledTextInput from '../../../styles/common/StyledTextInput';
import palette from '../../../styles/palette';

const LoginForm = ({ navigation }) => {
    const onPressSignUpScreen = e => {
        e.preventDefault();

        navigation.navigate('SignUp');
    };

    const onPressMainNavigator = e => {
        e.preventDefault();

        navigation.navigate('Tab');
    };

    return(
        <View style={ styles.loginBox }>
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
            <StyledFullButton 
                onPress={ onPressMainNavigator }
                text="Sign in"
            />
            <StyledBorderButton
                onPress= { onPressSignUpScreen } 
                text="Sign up"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    loginBox: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
});

export default LoginForm;