import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StyledBorderButton from '../../../styles/common/StyledBorderButton';
import StyledFullButton from '../../../styles/common/StyledFullButton';
import StyledTextInput from '../../../styles/common/StyledTextInput';
import palette from '../../../styles/palette';
import { changeField, info, initializeForm, login } from '../../../modules/auth';
import ErrorMessage from '../../../styles/common/ErrorMessage';
import { check } from '../../../modules/user';

const LoginForm = ({ navigation }) => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const { 
        form,
        auth,
        authError, 
        user,
    } = useSelector(({ 
        auth,
        user
     }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));

    const onChange = e => {
        const inputAccessoryViewID = e.target._internalFiberInstanceHandleDEV.memoizedProps.inputAccessoryViewID;
        const value = e.nativeEvent.text;

        dispatch(changeField({
                form: 'login',
                key: inputAccessoryViewID,
                value
            }),
        );
    };

    const toSignUpScreen = e => {
        e.preventDefault();

        navigation.navigate('SignUp');
    };

    const onLogin = e => {
        e.preventDefault();

        const { 
            email,
            password
        } = form;
        
        dispatch(login({ 
            email, 
            password
        }));
    };

    useEffect(() => {
        if(auth) {
            const { userId } = auth;

            dispatch(check(userId));
        }

        if(authError) {
            setError("Not valid user, check again email and password");

            return;
        }
    }, [auth, authError, dispatch]);

    useEffect(async () => {
        if(user) {
            try {
                setError(null);
        
                dispatch(initializeForm('login'));
            
                await AsyncStorage.setItem('user', JSON.stringify(user))
            
                dispatch(initializeForm('auth'));

                navigation.navigate('Tab');
            } catch(e) {
                console.log(e);
            }
        }
    }, [user]);

    useEffect(async () => {
        if(auth) {
            if(auth.token) {
                const { token } = auth;
                const { userId } = auth;

                await AsyncStorage.setItem('token', JSON.stringify(token));
                
                dispatch(info(userId));
            }
        }
    }, [dispatch, auth]);
    
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
            { error && <ErrorMessage text={ error } /> }
            <StyledFullButton 
                onPress={ onLogin }
                text="Sign in"
            />
            <StyledBorderButton
                onPress= { toSignUpScreen } 
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