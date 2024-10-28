import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        selectedUser: null,
    },
    reducers: {
        setUsers: (state, action) => { state.list = action.payload; },
        setSelectedUser: (state, action) => { state.selectedUser = action.payload; },
    },
});

export const { setUsers, setSelectedUser } = usersSlice.actions;
export default usersSlice.reducer;
