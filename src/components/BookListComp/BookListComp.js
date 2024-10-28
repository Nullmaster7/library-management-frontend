import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks, setSelectedBook } from '../../redux/slices/booksSlice';
import { useNavigate } from 'react-router-dom';

const BookListComp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const books = useSelector((state) => state.books.list);
    const loading = useSelector((state) => state.books.loading);

    useEffect(() => {
        dispatch(loadBooks());
    }, [dispatch]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'author', headerName: 'Author', width: 150 },
        { field: 'year', headerName: 'Published Year', width: 110 },
    ];

    const handleRowClick = (params) => {
        dispatch(setSelectedBook(params.row));
        navigate(`/books/${params.id}`);
    };

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <DataGrid
                    rows={books}
                    columns={columns}
                    pageSize={5}
                    onRowClick={handleRowClick}
                />
            )}
        </Box>
    );
};

export default BookListComp;
