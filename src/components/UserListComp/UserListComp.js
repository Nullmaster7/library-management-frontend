import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { loadUsers, setSelectedUser } from '../../redux/slices/usersSlice';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const UserListComp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.users.list);
    const loading = useSelector((state) => state.users.loading);

    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90, headerClassName: 'data-grid-header', cellClassName: 'data-grid-cell' },
        { field: 'name', headerName: 'Name', width: 350, headerClassName: 'data-grid-header', cellClassName: 'data-grid-cell' }
    ];

    const handleRowClick = (params) => {
        dispatch(setSelectedUser(params.row));
        navigate(`/users/${params.id}`);
    };

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            {loading ? (
                <Typography className="loading-text">Loading...</Typography>
            ) : (
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={5}
                    onRowClick={handleRowClick}
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        '& .MuiDataGrid-row:hover': {
                            cursor: 'pointer',
                        },
                        '& .MuiDataGrid-cell': {
                            backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        },
                        '& .MuiDataGrid-columnHeaders': {
                            backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        },
                    }}
                />
            )}
        </Box>
    );
};

export default UserListComp;
