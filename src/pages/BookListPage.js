import React from 'react';
import PageWrapper from '../hoc/PageWrapper';
import BookListComp from '../components/BookListComp/BookListComp';
import GoBackButton from '../components/GoBackButton';

const BookListPage = () => {
    return (
        <div className="book-list-page">
            <GoBackButton />
            <h1 className='title'>Available Books</h1>
            <BookListComp />
        </div>
    );
};

export default PageWrapper(BookListPage);