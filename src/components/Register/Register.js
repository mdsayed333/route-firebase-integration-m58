import React from 'react';

const Register = () => {
   return (
      <div>
         <h2>Please Register now.</h2>
         <form>
            <input type="text" placeholder='Your name' />
            <br/>
            <input type="email" placeholder='your email'/>
            <br/>
            <input type="password" placeholder='Password' />
            <br/>
            <input type="submit" value='Register'/>
         </form>
      </div>
   );
};

export default Register;