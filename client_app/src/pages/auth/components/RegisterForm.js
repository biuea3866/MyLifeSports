import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../../modules/auth';
import StyledFullButton from '../../../styles/common/StyledFullButton';
import StyledTextInput from '../../../styles/common/StyledTextInput';
import palette from '../../../styles/palette';

const RegisterForm = ({ navigation }) => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({
        form: auth.register,
    }));

    const onChange = e => {
        const inputAccessoryViewID = e.target._internalFiberInstanceHandleDEV.memoizedProps.inputAccessoryViewID;
        const value = e.nativeEvent.text;
        
        dispatch(
            changeField({
                form: 'register',
                key: inputAccessoryViewID,
                value
            })
        );
    };

    const toPressSignUp = e => {
        e.preventDefault();

        const { 
            email, 
            password, 
            passwordConfirm,
            nickname,
            phoneNumber
        } = form;

        if([email, 
            password, 
            passwordConfirm, 
            nickname, 
            phoneNumber].includes('')
        ) {
            // add error state
            return;
        }

        if(password !== passwordConfirm) {
            dispatch(changeField({ form: 'register', key: 'password', value: '' }));
            dispatch(changeField({ form: 'register', key: 'passwordConfirm', value: '' }));

            return;
        }

        navigation.navigate(
            'SignIn', {
                name: 'SignIn'
            },
        );
    };

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    return(
        <View style={ styles.container }>
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
            <StyledTextInput 
                inputAccessoryViewID="passwordConfirm"
                placeholder="Re-Password"
                placeholderTextColor={ palette.gray[5] }
                onChange={ onChange }
                value={ form.passwordConfirm }
            />
            <StyledTextInput 
                inputAccessoryViewID="nickname"
                placeholder="Nickname"
                placeholderTextColor={ palette.gray[5] }
                onChange={ onChange }
                value={ form.nickname }
            />
            <StyledTextInput 
                inputAccessoryViewID="phoneNumber"
                placeholder="Phone-Number"
                placeholderTextColor={ palette.gray[5] }
                onChange={ onChange }
                value={ form.phoneNumber }
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