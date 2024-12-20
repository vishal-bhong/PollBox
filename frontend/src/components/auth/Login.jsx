import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div id='logincard' className='col-md-4'>
            <h2 style={{margin: '0 0 50px 0', textShadow: '3px 3px 3px grey'}}>Log In</h2>

            <div className="row">
                <div className="col-3">
                    <label htmlFor="userName" className="col-form-label">UserName</label>
                </div>
                <div className="col-9">
                    <input type="text" className="form-control" id="userName" />
                </div>
            </div>

            <div className="row" style={{marginTop: '30px'}}>
                <div className="col-3">
                    <label htmlFor="password" className="col-form-label">Password</label>
                </div>
                <div className="col-9">
                    <input type="password" className="form-control" id="password" />
                </div>
            </div>

            <div className="col-12 d-flex justify-content-end mb-2 me-4">
                <button type='submit' className='col-5 btn btn-primary' id='loninButton'>Log In</button>
            </div>

            <div className="col-12 d-flex justify-content-end mb-2 me-4">
                <a className="fw-bold" href="/register">Register</a>
            </div> 

            <div className="col-12 d-flex justify-content-end mb-2 me-4">
                <a className="fw-bold" href="/forgotPassword">Forgot password ?</a>
            </div> 
        </div>
    )
}       

export default Login