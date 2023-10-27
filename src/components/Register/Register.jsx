import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='form-container'>
             <h3 className='form-title'>Please Login</h3>
        
         <form>

         <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" placeholder='enter your email' required />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" placeholder='enter your password' required />
           </div>

           <div className="form-control">
             <label htmlFor="password">Confirm Password</label>
             <input type="password" name="confirm" id="" placeholder='Confirm password' required />
             </div>
           
             <input className='btn-submit' type="submit" value="Login" />
         </form>

         </div>

    );
};

export default Register;