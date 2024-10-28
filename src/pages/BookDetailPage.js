// BookDetailPage: Accessible when a book is selected.
// BookDetailsComp: Displays details about the selected book.
// Shows book information (author, year, etc.).
// Displays current owner (if any).
// Shows the average rating.
// Option to lend the book to a user.


import React from 'react'
import BookDetail from '../components/BookListComp/BookDetail'
import PageWrapper from '../hoc/PageWrapper';

const BookDetailPage = () => {
    return (
        <div className="book-list-page">
            <h1 className='title'>Book Details</h1>
            <BookDetail />
        </div>
    )
}

export default PageWrapper(BookDetailPage)