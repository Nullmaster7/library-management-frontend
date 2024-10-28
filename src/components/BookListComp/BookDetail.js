import React from 'react';
import { useSelector } from 'react-redux';

const BookDetail = () => {
    const book = useSelector((state) => state.books.selectedBook);

    if (!book) return <p>Select a book to view its details.</p>;

    return (
        <div>
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Published Year:</strong> {book.year}</p>
            <p><strong>Average Rating:</strong> {book.averageRating || 'N/A'}</p>
            {book.currentOwner && <p><strong>Current Owner:</strong> {book.currentOwner.name}</p>}
            <button>Lend this book to a user</button>
        </div>
    );
};

export default BookDetail;
