import client from './client';

export const write = ({
    type,
    title,
    content,
    userId,
    writer,
    rental
}) => client.post(`http://10.0.2.2:8000/post-service/`, {
    type,
    title,
    content,
    userId,
    writer,
    rental
});

export const getAll = () => client.get(`http://10.0.2.2:8000/post-service/`);

export const getPostsByType = type => client.get(`http://10.0.2.2:8000/post-service/posts/type/${type}`);

export const getOne = _id => client.get(`http://10.0.2.2:8000/post-service/${_id}/post`);

export const getPostsByUserId = userId => client.get(`http://10.0.2.2:8000/post-service/${userId}/posts`);

export const getPostsByKeyword = keyword => client.get(`http://10.0.2.2:8000/post-service/posts/keyword/${keyword}`);

export const deleteOne = _id => client.delete(`http://10.0.2.2:8000/post-service/${id}/post}`);

export const comment = ({
    postId,
    userId,
    writer,
    content
}) => client.post(`http://10.0.2.2:8000/post-service/comment`, {
    postId,
    userId,
    writer,
    content
});

export const deleteComment = _id => client.delete(`http://10.0.2.2:8000/post-service/${_id}/comment`);