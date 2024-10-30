import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentOwner } from '../../services/borrowingService';

const borrowingHistoriesSlice = createSlice({
    name: 'borrowingHistories',
    initialState: {
        list: [],
        loading: false,
    },
    reducers: {
        setBorrowingHistories: (state, action) => {
            state.list = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});


export const { setBorrowingHistories, setLoading } = borrowingHistoriesSlice.actions;


export const loadBorrowingHistories = (bookId) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const histories = await fetchCurrentOwner(bookId);
        dispatch(setBorrowingHistories(histories));
    } catch (error) {
        console.error("Error fetching borrowing histories:", error);
    } finally {
        dispatch(setLoading(false));
    }
};


export default borrowingHistoriesSlice.reducer;
