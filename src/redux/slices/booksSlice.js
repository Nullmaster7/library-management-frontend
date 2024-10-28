// booksSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from '../../services/bookService';

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        list: [],
        selectedBook: null,
        loading: false,
    },
    reducers: {
        setBooks: (state, action) => { state.list = action.payload; },
        setSelectedBook: (state, action) => { state.selectedBook = action.payload; },
        setLoading: (state, action) => { state.loading = action.payload; },
    },
});

export const { setBooks, setSelectedBook, setLoading } = booksSlice.actions;

export const loadBooks = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const books = await fetchBooks();
        dispatch(setBooks(books));
    } catch (error) {
        console.error("Error fetching books:", error);
    } finally {
        dispatch(setLoading(false));
    }
};

export default booksSlice.reducer;
