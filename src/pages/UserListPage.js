import React from 'react'
import PageWrapper from '../hoc/PageWrapper';
import UserListComp from '../components/UserListComp/UserListComp';

const UserListPage = () => {
    return (
        <div >
            <h1 className='title'>Users</h1>
            <UserListComp />
        </div>
    )
}

export default PageWrapper(UserListPage)

// UserListComp.js: Fetch and display the list of users from the Redux store.
// UserDetailPage: Implement routing to render the details of a selected user.
// UserDetailsComp.js: Fetch and display the user's details from the Redux store.