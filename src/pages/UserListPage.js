import React from 'react'
import PageWrapper from '../hoc/PageWrapper';
import UserListComp from '../components/UserListComp/UserListComp';
import GoBackButton from '../components/GoBackButton';

const UserListPage = () => {
    return (
        <div >
            <GoBackButton />
            <h1 className='title'>Users</h1>
            <UserListComp />
        </div>
    )
}

export default PageWrapper(UserListPage)