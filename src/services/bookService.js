import axios from 'axios';

export const fetchBooks = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/books`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch books');
    }
};

export const fetchBookDetails = async (bookId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/books/${bookId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch book details');
    }
};

export const borrowBook = async (userId, bookId) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/${userId}/borrow/${bookId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to borrow the book');
    }
};

export const returnBook = async (userId, bookId) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/${userId}/return/${bookId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to return the book');
    }
};
