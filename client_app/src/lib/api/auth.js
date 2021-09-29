import client from './client';

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

export const getUser = userId => client.get(`http://10.0.2.2:7000/auth-service/${userId}`);