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

    return (
        <Card sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
            <CardContent>
                <Typography variant="h5">{user.name}</Typography>
                <Typography variant="subtitle1">Books Currently Borrowed:</Typography>
                <List>
                    {user.currentlyBorrowedBooks && user.currentlyBorrowedBooks.length > 0 ? (
                        user.currentlyBorrowedBooks.map((book) => (
                            <ListItem key={book.id}>
                                <ListItemText primary={book.title} />
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleReturnBook(book.id)}
                                >
                                    Return
                                </Button>
                            </ListItem>
                        ))
                    ) : (
                        <Typography>No books currently borrowed.</Typography>
                    )}
                </List>
                <Typography variant="subtitle1" sx={{ marginTop: 2 }}>Books Previously Borrowed:</Typography>
                <List>
                    {user.previouslyBorrowedBooks && user.previouslyBorrowedBooks.length > 0 ? (
                        user.previouslyBorrowedBooks.map((book) => (
                            <ListItem key={book.id}>
                                <ListItemText
                                    primary={`${book.title} - Rating: ${book.rating || 'N/A'}`}
                                />
                            </ListItem>
                        ))
                    ) : (
                        <Typography>No previous borrowings.</Typography>
                    )}
                </List>
            </CardContent>
        </Card>
    );
};

export default UserDetail;
