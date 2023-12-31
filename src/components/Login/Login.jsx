import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {

    const [show, setShow] = useState(false)

    const {signIn}= useContext(AuthContext);

    const navigate= useNavigate();
    const location= useLocation();

     const from= location.state?.from?.pathname || '/' ;

     const handleLogin= (event) => {
        event.preventDefault();
       
        const email= event.target.email.value;
        const password= event.target.password.value;

        console.log(email,password)

        signIn(email,password)
        .then( (result) => {
            const loggedUser= result.user;
            console.log(loggedUser)
            event.target.reset();
            navigate(from ,{replace: true})
        } )

        .catch(error => {
             console.log(error.message)
        })

        
     }


    return (
        <div className='form-container'>
            <h3 className='form-title'>Please Login</h3>

          <form onSubmit={handleLogin} >

            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" placeholder='enter your email' required />
            </div>

            <div className="form-control">
               <label htmlFor="password">Password</label>
               <input type={show? 'text' : 'password'} name="password" id="" placeholder='enter your password' required />
             
             <p onClick={()=> setShow(!show)}  >

                {
                    show ?  <h5>Hide Password</h5> : <h5>Show Password</h5>
                }

             </p>

             </div>

             <input className='btn-submit' type="submit" value="Login" />

          </form>
          <p> <small> New To This Site?  <Link to='/register' >Please Register First</Link>  </small> </p>


        </div>
    );
};

export default Login;