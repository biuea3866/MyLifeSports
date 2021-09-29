import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../../modules/auth';
import StyledFullButton from '../../../styles/common/StyledFullButton';
import StyledTextInput from '../../../styles/common/StyledTextInput';
import palette from '../../../styles/palette';
import ErrorMessage from '../../../styles/common/ErrorMessage';

const RegisterForm = ({ navigation }) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { 
        form,
        auth,
        authError 
    } = useSelector(({ auth }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
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

    const toSignUp = e => {
        e.preventDefault();

        const { 
            email, 
            password, 
            passwordConfirm,
            nickname,
            phoneNumber
        } = form;

        if(password !== passwordConfirm) {
            dispatch(changeField({ form: 'register', key: 'password', value: '' }));
            dispatch(changeField({ form: 'register', key: 'passwordConfirm', value: '' }));

            setError('Not match password and re-password')
            
            return;
        }

        dispatch(register({
            email,
            password,
            phoneNumber,
            nickname,
        }));
    };

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if(auth) {
            if(auth.status === "ERROR") {
                setError(auth.message);
    
                return;
            } else if(auth.status === 201) {
                setError(null);

                navigation.navigate('SignIn', {
                        name: 'SignIn'
                    },
                );
            }
        }
        
        if(authError) {
            setError("Not completely fill inputs, check inputs");

            return;
        }
    }, [authError, auth, dispatch]);

    return(
        <View style={ styles.container }>
            <StyledTextInput inputAccessoryViewID="email"
                             placeholder="E-mail"
                             placeholderTextColor={ palette.gray[5] }
                             onChange={ onChange }
                             value={ form.email }
            />
            <StyledTextInput inputAccessoryViewID="password"
                             placeholder="Password"
                             placeholderTextColor={ palette.gray[5] }
                             onChange={ onChange }
                             value={ form.password }
            />
            <StyledTextInput inputAccessoryViewID="passwordConfirm"
                             placeholder="Re-Password"
                             placeholderTextColor={ palette.gray[5] }
                             onChange={ onChange }
                             value={ form.passwordConfirm }
            />
            <StyledTextInput inputAccessoryViewID="nickname"
                             placeholder="Nickname"
                             placeholderTextColor={ palette.gray[5] }
                             onChange={ onChange }
                             value={ form.nickname }
            />
            <StyledTextInput inputAccessoryViewID="phoneNumber"
                             placeholder="Phone-Number"
                             placeholderTextColor={ palette.gray[5] }
                             onChange={ onChange }
                             value={ form.phoneNumber }
            />
            { error && <ErrorMessage text={ error } /> }
            <StyledFullButton onPress={ toSignUp }
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