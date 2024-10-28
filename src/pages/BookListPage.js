// BookListPage: This page will list all available books.

// BookListPage.js
import React from 'react';
import BookListComp from '../components/BookListComp/BookListComp';

const BookListPage = () => {
    return (
        <div className="book-list-page">
            <h1>Available Books</h1>
            <BookListComp />
        </div>
    );
};

export default BookListPage;


// BookListComp: Component to display books in a grid.

// BookListComp.js: Fetch and display the list of books from the Redux store.
// BookDetailPage: Implement routing to render the details of a selected book.
// BookDetailsComp.js: Fetch and display the book's details from the Redux store.