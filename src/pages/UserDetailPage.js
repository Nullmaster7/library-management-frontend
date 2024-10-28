// UserDetailPage: Accessible when a user is selected.
// UserDetailsComp: Displays details about the selected user.
// Lists currently borrowed books.
// Lists previously borrowed books with ratings.
// Option to return a currently borrowed book.

import React from 'react'
import UserDetail from '../components/UserListComp/UserDetail'
import PageWrapper from '../hoc/PageWrapper';

const UserDetailPage = () => {
    return (
        <div className="book-list-page">
            <h1 className='title'>User's Details</h1>
            <UserDetail />
        </div>
    )
}

export default PageWrapper(UserDetailPage)