import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { borrowBook } from '../../services/bookService';
import { setLoading, loadUsers } from '../../redux/slices/usersSlice';
import { useNavigate } from 'react-router-dom';

const BookDetail = () => {
    const dispatch = useDispatch();
    const book = useSelector((state) => state.books.selectedBook);
    const navigate = useNavigate();
    const users = useSelector((state) => state.users.list);
    const [selectedUserId, setSelectedUserId] = React.useState(null);

    useEffect(() => {
        if (book) {
            dispatch(loadUsers());
        }
    }, [dispatch, book]);

    if (!book) return <p>Select a book to view its details.</p>;

    const handleLendBook = async () => {
        dispatch(setLoading(true));
        try {
            const response = await borrowBook(selectedUserId, book.id);
            console.log('Book borrowed:', response);
            alert('Book borrowed successfully!');
            navigate("/")
        } catch (error) {
            console.error('Error borrowing book:', error);
            alert(error.message);
        } finally {
            dispatch(setLoading(false));
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
    ];

    const handleRowClick = (params) => {
        setSelectedUserId(params.row.id);
    };

    return (
        <Card sx={{ position: 'relative', opacity: 0.8, maxWidth: 800, margin: 'auto', p: 2 }}>

            <CardContent>
                <Typography className='subtitle' sx={{ fontStyle: 'italic', fontSize: '1.2rem', fontWeight: 600, textAlign: 'center', mb: 5 }}>
                    {book.title}
                </Typography>
                <Typography sx={{ mb: 2 }} className='subtitle text-secondary'>
                    <strong>Author:</strong> {book.author}
                </Typography>
                <Typography sx={{ mb: 2 }} color="subtitle text-secondary">
                    <strong>Published Year:</strong> {book.year}
                </Typography>
                <Typography sx={{ mb: 2 }} color="subtitle text-secondary">
                    <strong>Average Rating:</strong> {book.rating || 'N/A'}
                </Typography>

                <div style={{ height: 300, width: '100%', marginBottom: '20px' }}>
                    <DataGrid
                        rows={users}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        onRowClick={handleRowClick}
                        autoHeight
                        sx={{
                            "& .MuiDataGrid-row:hover": {
                                cursor: 'pointer',
                                backgroundColor: '#f5f5f5',
                            },
                        }}
                    />
                </div>

                <Button
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        margin: '20px auto',
                    }}
                    variant="contained"
                    color="primary"
                    onClick={handleLendBook}
                    disabled={!selectedUserId}
                >
                    Lend the book
                </Button>
            </CardContent>
        </Card>
    );
};

export default BookDetail;
