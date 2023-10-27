import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Register = () => {

    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)

      const handleSignUp= (event) => {

          event.preventDefault();
          const email= event.target.email.value;
          const password= event.target.password.value;

          const confirm= event.target.confirm.value;

          console.log(email, password, confirm)
          setError(' ')
          
          if(password !== confirm) {
            setError('Your Password Did Not Match')
            return;
          }
          else if (password.length < 6) {
            setError('PassWord Must Be 6 Character or longer')
          }

       
           createUser(email, password)
           .then( (result)=> {
              const loggedUser= result.user;
              console.log(loggedUser)
             event.target.reset()

           } )

           .catch(error => {
              console.log(error)
              setError(error.message)
           })



      }


    return (
        <div className='form-container'>
             <h3 className='form-title'>Please Login</h3>
        
         <form onSubmit={handleSignUp}>

         <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" placeholder='enter your email' required />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" placeholder='enter your password' required />
           </div>

           <div className="form-control">
             <label htmlFor="confirm">Confirm Password</label>
             <input type="password" name="confirm" id="" placeholder='Confirm password' required />
             </div>
           
             <input className='btn-submit' type="submit" value="Register" />
         </form>

         <p> <small> Already Have An Account?  <Link to='/login' >Please Login</Link>  </small> </p>

         <p className='text-error'>{error}</p>

         </div>

    );
};

export default Register;