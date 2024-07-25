'use client'
import React , {useRef , useState} from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebaseConfig';
import Link from 'next/link';

const Login = () => {

  const emailRef = useRef()
  const passwordRef = useRef()




  function inputval(e) {
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
    <div className="min-h-screen px-5  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-semibold ">Log in to your account</h2>
        <div className="mt-8 bg-[#252525] py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={inputval}>
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

          
            <div className=' pt-2 text-sm '>
              <Link href='/signup'><span>Don't have an Account?</span></Link>
            </div>
            <div >
              <button
                type="submit"
                className=" bg-yellow-500 hover:bg-yellow-400 w-full  text-black font-semibold py-2 px-4 mt- rounded-md "
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login
