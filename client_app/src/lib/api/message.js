import client from './client';
import qs from 'qs';

export const initRoom = ({
    user_a,
    user_b
}) => client.post('http://10.0.2.2:8000/message-service/room/init-room', {
    user_a,
    user_b
});

export const sendMessage = ({
    sender,
    receiver,
    content
}) => client.post('http://10.0.2.2:8000/message-service/message', {
    sender,
    receiver,
    content
});

export const getRoom = roomId => client.get(`http://10.0.2.2:8000/message-service/${roomId}/room`);

export const getRooms = nickname => client.get(`http://10.0.2.2:8000/message-service/${nickname}/rooms`);

export const getRoomsByKeyword = keyword => client.get(`http://10.0.2.2:8000/message-service/${keyword}/keyword/rooms`);

export const deleteRoom = roomId => client.delete(`http://10.0.2.2:8000/message-service/${roomId}/room`);

export const checkRoom = ({
    user_a,
    user_b
}) => client.get(`http://10.0.2.2:8000/message-service/room/check?${qs.stringify({ user_a, user_b })}`);