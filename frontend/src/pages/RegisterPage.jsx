import React from 'react';
import Register from '../components/auth/Register';
import NavBar from '../components/common/NavBar';
import SideDrawer from '../components/common/SideDrawer';

const RegisterPage = () => {
    return (
        <>
            <NavBar />
            <SideDrawer />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                <Register />
            </div>
        </>
    )
}

export default RegisterPage


// vh - viewport height