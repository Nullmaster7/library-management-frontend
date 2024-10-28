import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Button } from '@mui/material';

const BookDetail = () => {
    const book = useSelector((state) => state.books.selectedBook);

    if (!book) return <p>Select a book to view its details.</p>;

    return (
        <Card sx={{ opacity: 0.8, height: 300, maxWidth: 500, margin: 'auto', p: 2 }}>
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
                    <strong>Average Rating:</strong> {book.averageRating || 'N/A'}
                </Typography>
                {book.currentOwner && (
                    <Typography sx={{ mb: 2 }} color="subtitle text-secondary">
                        <strong>Current Owner:</strong> {book.currentOwner.name}
                    </Typography>
                )}
                <Button
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        margin: '20px auto',
                    }}
                    variant="contained"
                    color="primary"
                >
                    Lend the book
                </Button>
            </CardContent>
        </Card>
    );
};

export default BookDetail;
