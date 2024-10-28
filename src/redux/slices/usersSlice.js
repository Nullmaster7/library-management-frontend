import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, fetchUserDetails } from '../../services/userService';
import { returnBook } from '../../services/bookService';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        selectedUser: null,
        loading: false,
        error: null,
    },
    reducers: {
        setUsers: (state, action) => { state.list = action.payload; },
        setSelectedUser: (state, action) => { state.selectedUser = action.payload; },
        setLoading: (state, action) => { state.loading = action.payload; },
        setError: (state, action) => { state.error = action.payload; },
    },
});

export const { setUsers, setSelectedUser, setLoading, setError } = usersSlice.actions;

export const loadUsers = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const users = await fetchUsers();
        dispatch(setUsers(users));
    } catch (error) {
        dispatch(setError("Error fetching users"));
    } finally {
        dispatch(setLoading(false));
    }
};

export const loadUserDetails = (userId) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const userDetails = await fetchUserDetails(userId);
        dispatch(setSelectedUser(userDetails));
    } catch (error) {
        dispatch(setError("Error fetching user details"));
    } finally {
        dispatch(setLoading(false));
    }
};

export const returnUserBook = (userId, bookId) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        await returnBook(userId, bookId); // Call service to update backend
        dispatch(loadUserDetails(userId)); // Reload user details to reflect returned book
    } catch (error) {
        dispatch(setError("Error returning book"));
    } finally {
        dispatch(setLoading(false));
    }
};

export default usersSlice.reducer;
