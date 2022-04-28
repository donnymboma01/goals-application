import React, { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

const Login = () =>{

    const[formData,setFormData] = useState({
        email:'',
        password:''
    });

    const { email, password } = formData;

    const onSubmitForm = (event) =>{
        event.preventDefault();
    };

    return(
        <>
              <section className='heading'>
                <h1>
                    <FaSignInAlt/> Login
                </h1>
                <p>Please create an account before login</p>
            </section>  

            <section className='form'>
                <form onSubmit={onSubmitForm}>
                    <div className='form-group'>
                            <input 
                                type='email' 
                                className='form-control' 
                                id='email' 
                                name='email' 
                                value={email} 
                                placeholder='Enter your email'
                                onChange={(event) =>{setFormData(event.target.value)}} 
                            />
                        </div>
                        <div className='form-group'>
                            <input 
                                type='password' 
                                className='form-control' 
                                id='password' 
                                name='password' 
                                value={password} 
                                placeholder='Enter your password' 
                                onChange={(event) =>{setFormData(event.target.value)}} 
                            />
                        </div>
                        <div className='form-group'>
                            <button type='submit' className='btn btn-block' >Submit</button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Login;