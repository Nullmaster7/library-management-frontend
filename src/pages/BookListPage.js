// BookListPage: This page will list all available books.

import React from 'react';
import PageWrapper from '../hoc/PageWrapper';
import BookListComp from '../components/BookListComp/BookListComp';

const BookListPage = () => {
    return (
        <div className="book-list-page">
            <h1 className='title'>Available Books</h1>
            <BookListComp />
        </div>
    );
};

export default PageWrapper(BookListPage);



// BookListComp.js: Fetch and display the list of books from the Redux store.
// BookDetailPage: Implement routing to render the details of a selected book.
// BookDetailsComp.js: Fetch and display the book's details from the Redux store.