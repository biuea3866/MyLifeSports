import client from './client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = ({ 
    email, 
    password 
}) => client.post('http://10.0.2.2:7000/auth-service/login', { 
    email, 
    password 
});

export const register = ({ 
    email, 
    password, 
    phoneNumber, 
    nickname 
}) => client.post('http://10.0.2.2:7000/auth-service/register', { 
    email, 
    password, 
    phoneNumber, 
    nickname 
});

export const getUser = async userId => client.get(`http://10.0.2.2:7000/auth-service/${userId}`, {
    headers: {
        'Authorization': 'Bearer ' + JSON.parse(await AsyncStorage.getItem('token'))       
    }
});

export const check = async userId => client.get(`http://10.0.2.2:7000/auth-service/${userId}/check`, {
    headers: {
        'Authorization': 'Bearer ' + JSON.parse(await AsyncStorage.getItem('token'))       
    }
});

export const logout = () => client.post('http://10.0.2.2:7000/auth-service/logout');