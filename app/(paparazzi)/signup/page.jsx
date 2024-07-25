'use client'
import { useRef } from 'react'
import { auth } from '../../config/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Link from 'next/link';
import createUser from '@/app/_actions/create-user';
import { useRouter } from 'next/navigation'

const Signup = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameVal = nameRef.current.value;
    const emailVal = emailRef.current.value;
    const passwordVal = passwordRef.current.value;

    createUserWithEmailAndPassword(auth, emailVal, passwordVal)
      .then((userCredential) => {
        const user = userCredential.user;
        // Clear the input fields

        updateProfile(user, { displayName: nameVal })
        .then(() => {
          // displayName should be set now
          console.log("User created with displayName:", user.displayName);

          // Clear the input fields
          nameRef.current.value = '';
          emailRef.current.value = '';
          passwordRef.current.value = '';

          createUser(user.uid, nameVal, emailVal).then((res) => {
            router.push('/');
          });
        })
        .catch((error) => {
          console.log("Error setting displayName:", error);
        });

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });


  }


  return (
    <div className="min-h-screen px-5 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-semibold ">Create a new Account</h2>
        <div className="mt-8 bg-[#252525] py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium ">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  ref={nameRef}
                  autoComplete="name"
                  placeholder='John Doe'

                  required
                  className="mt-3 appearance-none block w-full px-3 py-2 border border-yellow-500 rounded-md shadow-sm bg-transparent outline-none sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium ">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  ref={emailRef}
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
                  autoComplete="new-password"
                  placeholder='****'
                  ref={passwordRef}
                  required
                  className="mt-3 appearance-none block w-full px-3 py-2 border border-yellow-500 rounded-md shadow-sm bg-transparent outline-none sm:text-sm"
                />
              </div>
            </div>

            <div className=' pt-6 text-sm '>
              <Link href='/login'><span>Already have an Account?</span></Link>
            </div>
            <div>
              <button
                type="submit"
                className=" bg-yellow-500 hover:bg-yellow-600 w-full  text-black font-semibold py-2 px-4 mt- rounded-md "
              >
                Sign up
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup
