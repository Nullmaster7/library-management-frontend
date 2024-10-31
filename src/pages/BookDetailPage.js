import React from 'react'
import BookDetail from '../components/BookListComp/BookDetail'
import PageWrapper from '../hoc/PageWrapper';
import GoBackButton from '../components/GoBackButton';

const BookDetailPage = () => {
    return (
        <div className="book-list-page">
            <GoBackButton />
            <h1 className='title'>Book Details</h1>
            <BookDetail />
        </div>
    )
}

export default PageWrapper(BookDetailPage)