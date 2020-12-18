import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3000'});

export const createRecognition = (sender_id, receiver_id, message, value_id) => {
    return api.post('/v1/recognitions/', { sender_id, receiver_id, message, value_id });
};