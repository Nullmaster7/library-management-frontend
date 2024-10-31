import React from 'react'
import UserDetail from '../components/UserListComp/UserDetail'
import PageWrapper from '../hoc/PageWrapper';
import GoBackButton from '../components/GoBackButton';

const UserDetailPage = () => {
    return (
        <div className="book-list-page">
            <GoBackButton />
            <h1 className='title'>User's Details</h1>
            <UserDetail />
        </div>
    )
}

export default PageWrapper(UserDetailPage)