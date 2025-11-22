import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
   const { createUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
       
        setUser(user);
        //  console.log(user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold">Login now!</h1>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">

          <form onSubmit={handleSubmit}>
            <input type="text" name='name' className="input" placeholder="Name" />
            <input type="email" name='email' className="input" placeholder="Email" />
            <input type="text" name='photo_url' className="input" placeholder="photo_url" />
            <input type="password" name='password' className="input" placeholder="Password" />
            <div><a className="link link-hover">Already Have an account?</a></div>
            <button type='submit' className='btn btn-primary'>Register</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Register;
