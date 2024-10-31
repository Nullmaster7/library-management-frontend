import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUserDetails, returnUserBook } from '../../redux/slices/usersSlice';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

const UserDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector((state) => state.users.selectedUser);
    const loading = useSelector((state) => state.users.loading);

    useEffect(() => {
        dispatch(loadUserDetails(id));
    }, [dispatch, id]);

    const handleReturnBook = (bookId) => {
        dispatch(returnUserBook(id, bookId));
    };

    if (loading) return <p>Loading...</p>;
    if (!user) return <p>No user selected.</p>;

    const currentlyBorrowedBooks = user.BorrowingHistories?.filter(book => book.returnedAt === null) || [];
    const borrowingHistories = user.BorrowingHistories?.filter(book => book.returnedAt !== null) || [];

    return (
        <Card sx={{ opacity: 0.8, maxWidth: 800, margin: 'auto', padding: 2 }}>
            <CardContent>
                <Typography variant="h5">{user.name}</Typography>

                <Typography sx={{ mt: 3, fontSize: '1rem', fontWeight: 700, color: '#000000' }}>Currently Borrowed:</Typography>
                <List>
                    {currentlyBorrowedBooks.length > 0 ? (
                        currentlyBorrowedBooks.map((history) => (
                            <ListItem key={history.id}>
                                <ListItemText
                                    primary={`${history.Book.title} by ${history.Book.author}`}
                                />
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleReturnBook(history.bookId)}
                                >
                                    Return
                                </Button>
                            </ListItem>
                        ))
                    ) : (
                        <Typography>No books currently borrowed.</Typography>
                    )}
                </List>

                <Typography sx={{ mt: 3, fontSize: '1rem', fontWeight: 700, color: '#000000' }}>Borrowing Histories:</Typography>
                <List>
                    {borrowingHistories.length > 0 ? (
                        borrowingHistories.map((history) => (
                            <ListItem key={history.id}>
                                <ListItemText
                                    primary={
                                        <span>
                                            <strong>{history.Book.title}</strong> by {history.Book.author} <strong> - Rating :</strong> {history.Book.rating ? history.Book.rating : 'No Rating'}
                                        </span>
                                    }
                                    secondary={`Returned on: ${new Date(history.returnedAt).toLocaleDateString()}`}
                                />
                            </ListItem>
                        ))
                    ) : (
                        <Typography >No borrowing history available.</Typography>
                    )}
                </List>
            </CardContent>
        </Card>
    );
};

export default UserDetail;
