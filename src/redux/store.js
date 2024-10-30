import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/booksSlice';
import usersReducer from './slices/usersSlice';
import borrowingHistoriesReducer from './slices/borrowingHistoriesSlice';

const store = configureStore({
    reducer: {
        books: booksReducer,
        users: usersReducer,
        borrowingHistories: borrowingHistoriesReducer,
    },
});

export default store;
