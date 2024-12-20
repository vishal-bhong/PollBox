import React from 'react';
import Login from '../components/auth/Login';

const LoginPage = () => {
    return(
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>  
            <Login/>
        </div>
    );
}

export default LoginPage;


// vh - viewport height