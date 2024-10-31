import { createSlice } from '@reduxjs/toolkit';

const borrowingHistoriesSlice = createSlice({
    name: 'borrowingHistories',
    initialState: {
        list: [],
        loading: false,
        fetchedBooks: [],
    },
    reducers: {
        setBorrowingHistories: (state, action) => {
            state.list = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        addFetchedBook: (state, action) => {
            state.fetchedBooks.push(action.payload);
        },
        clearBorrowingHistories: (state) => {
            state.list = [];
            state.loading = false;
            state.fetchedBooks = [];
        },
    },
});

export const { setBorrowingHistories, setLoading, addFetchedBook, clearBorrowingHistories } = borrowingHistoriesSlice.actions;

export default borrowingHistoriesSlice.reducer;
