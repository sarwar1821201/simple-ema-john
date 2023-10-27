import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {

    const [error, setError] = useState('')

      const handleSignUp= (event) => {

          event.preventDefault();
          const email= event.target.email.value;
          const password= event.target.password.value;

          const confirm= event.target.confirm.value;

          console.log(email, password, confirm)
          
          if(password !== confirm) {
            setError('Your Password Did Not Match')
            return;
          }
          else if (password.length < 6) {
            setError('PassWord Must Be 6 Character or longer')
          }


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