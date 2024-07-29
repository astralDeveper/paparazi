'use client'
import React , {useRef , useState} from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebaseConfig';
import Link from 'next/link';

const Login = () => {

  const emailRef = useRef()
  const passwordRef = useRef()




  function handleSubmit(e) {
    e.preventDefault();
    const emailVal = emailRef.current.value;
    const passwordVal = passwordRef.current.value;


    signInWithEmailAndPassword(auth, emailVal, passwordVal)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
          // Clear the input fields
    emailRef.current.value = '';
    passwordRef.current.value = '';

    window.location.href = '/'
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  

  }


  return (
    <div className="min-h-screen px-4 flex flex-col py-16">
      <img src="/paparazzi-logo.png" alt="Paparazzi House Logo" className="h-36 mx-auto" />

      <h2 className="mt-20 text-center text-3xl max-sm:text-2xl max-sm:font-medium font-semibold">Log in to your account</h2>
      <div className="mt-8 bg-[#252525] shadow p-8 max-md:p-4 rounded-lg max-w-md mx-auto w-full">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                ref={emailRef}
                autoComplete="email"
                placeholder='example@gmail.com'
                required
                className="mt-3 appearance-none block w-full px-3 py-2 border border-yellow-500 rounded-md shadow-sm bg-transparent outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                 placeholder='****'
                 ref={passwordRef}
                required
                 className="mt-3 appearance-none block w-full px-3 py-2 border border-yellow-500 rounded-md shadow-sm bg-transparent outline-none sm:text-sm"
              />
            </div>
          </div>

          
          <div className='pt-2 text-sm text-yellow-500 hover:text-yellow-600 transition-colors'>
            <Link href='/signup'><span>Don't have an Account?</span></Link>
          </div>
          <div >
            <button type="submit" className=" bg-yellow-500 hover:bg-yellow-600 w-full text-black font-semibold py-2 px-4 rounded-md transition-colors">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login
