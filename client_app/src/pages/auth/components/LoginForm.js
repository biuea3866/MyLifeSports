import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import StyledBorderButton from '../../../styles/common/StyledBorderButton';
import StyledFullButton from '../../../styles/common/StyledFullButton';
import StyledTextInput from '../../../styles/common/StyledTextInput';
import palette from '../../../styles/palette';
import { changeField, initializeForm } from '../../../modules/auth';

const LoginForm = ({ navigation }) => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({
        form: auth.login,
    }));

    const onChange = e => {
        const inputAccessoryViewID = e.target._internalFiberInstanceHandleDEV.memoizedProps.inputAccessoryViewID;
        const value = e.nativeEvent.text;

        dispatch(
            changeField({
                form: 'login',
                key: inputAccessoryViewID,
                value
            }),
        );
    };

    const onPressSignUpScreen = e => {
        e.preventDefault();

        navigation.navigate('SignUp');
    };

    const onPressMainNavigator = e => {
        e.preventDefault();

        navigation.navigate('Tab');
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);
    
    return(
        <View style={ styles.loginBox }>
            <StyledTextInput 
                inputAccessoryViewID="email"
                placeholder="E-mail"
                placeholderTextColor={ palette.gray[5] }
                onChange={ onChange }
                value={ form.email }
            />
            <StyledTextInput 
                inputAccessoryViewID="password"
                placeholder="Password"
                placeholderTextColor={ palette.gray[5] }
                onChange={ onChange }
                value={ form.password }
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