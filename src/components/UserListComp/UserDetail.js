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
                <Typography variant="subtitle1">Borrowing Histories:</Typography>
                <List>
                    {user.BorrowingHistories && user.BorrowingHistories.length > 0 ? (
                        user.BorrowingHistories.map((history) => (
                            <ListItem key={history.id}>
                                <ListItemText
                                    primary={`${history.Book.title} - Rating: ${history.rating !== null ? history.rating : 'N/A'}`}
                                />
                                {history.returnedAt === null &&
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleReturnBook(history.bookId)}
                                    >
                                        Return
                                    </Button>}
                            </ListItem>
                        ))
                    ) : (
                        <Typography>No books currently borrowed.</Typography>
                    )}
                </List>
            </CardContent>
        </Card>
    );
};

export default UserDetail;
