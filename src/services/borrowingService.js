import axios from 'axios';

export const fetchCurrentOwner = async (bookId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/${bookId}/currentOwner`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch current owner: ' + error.message);
    }
};
