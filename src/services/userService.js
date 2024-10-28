import axios from 'axios';

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
};

export const fetchUserDetails = async (userId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch user details');
    }
};
