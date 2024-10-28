import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import booksReducer from './slices/booksSlice';

const store = configureStore({
    reducer: {
        users: usersReducer,
        books: booksReducer,
    },
});

export default store;
