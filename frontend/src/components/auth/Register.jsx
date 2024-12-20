import React, { useState } from 'react'
import './Register.css'

const Register = () => {
    const [ emailVerificationData, setEmailVerificationData ] = useState({ isVerifying: false, emailForVerification: '', OTP: '' });

    return (
        <div id="registerPage" className='col-md-6'>
            <h3 style={{margin: '0 0 50px 0', textShadow: '3px 3px 3px grey'}}>Register</h3>

            <div className='row'>
                <div className='col-3' >
                    <label htmlFor='username' className='col-form-label'>UserName</label>
                </div>

                <div className='col-9'>
                    <input type='text' id='username' className='form-control'/>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-3' >
                    <label htmlFor='email' className='col-form-label'> Email </label>
                </div>
                <div className='col-9'>
                    <input 
                       type='email' 
                       id='email' 
                       className='form-control'
                       value={emailVerificationData.emailForVerification} 
                       onChange={(e) => setEmailVerificationData({ ...emailVerificationData, emailForVerification : e.target.value})}
                       />
                </div>
            </div>

            {
                    emailVerificationData.emailForVerification ? (
                    <> 
                    {
                        emailVerificationData.isVerifying ?
                        (
                            <>
                             <div className="row mt-3 d-flex justify-content-end " id="fullwidthinput">
                                <div className="col-3">
                                    <input className="form-control" id="emailOtp" placeholder="Enter otp" />
                                </div>
                                <div className="col-3 text-dark">
                                    <button id="resend_otp btn" >Resend OTP</button>
                                </div>
                                <div className="col-3">
                                    <button className="fw-semibold bg-primary">submit OTP</button>
                                </div>
                             </div>
                            </>
                        ) :
                        (
                            <>
                              <div className="me-2 mt-3 d-flex justify-content-end" id="fullwidthinput">                      
                                <button className="col-3 btn btn-danger" >Verify email</button>
                              </div>
                            </>
                        )
                    }                
                    </>
                    ) :   (<></>)
                    
            }

            <div className='row mt-3'>
                <div className='col-3'>
                    <label htmlFor='password' className='col-form-label'>password</label>
                </div>

                <div className='col-9'>
                    <input type='password' id='password' className='form-control'/>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-3'> 
                    <label htmlFor='passconfirm' className='col-form-label'>Confirm password</label>
                </div>

                <div className='col-9'>
                    <input id='passconfirm' className='form-control'/>
                </div>
            </div>

            <div className='mt-3 col-12 d-flex justify-content-end mb-3'>
                <button className='col-3 btn btn-outline-danger'>Register</button>
            </div>

            <div className='mt-2 col-12 d-flex justify-content-end mb-2'>
                <a href='/login' className='fs-5 fw-semibold'>Log In ?</a>
            </div>
        </div>
    )
}

export default Register