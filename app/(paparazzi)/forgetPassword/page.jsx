"use client";

import React, { Suspense, useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { auth } from "@/app/config/firebaseConfig";

const ForgetPassword = () => {
  const emailRef = useRef();

  return (
    <div className="min-h-screen px-4 flex flex-col py-16">
      <img
        src="/paparazzi-logo.png"
        alt="Paparazzi House Logo"
        className="h-36 mx-auto"
      />

      <h2 className="mt-20 text-center text-3xl max-sm:text-2xl max-sm:font-medium font-semibold">
        Forget your account Password
      </h2>
      <div className="mt-8 bg-[#252525] shadow p-8 max-md:p-4 rounded-lg max-w-md mx-auto w-full">
        <Suspense>
          <Form emailRef={emailRef}>
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
                  placeholder="example@gmail.com"
                  required
                  className="mt-3 appearance-none block w-full px-3 py-2 border border-yellow-500 rounded-md shadow-sm bg-transparent outline-none sm:text-sm"
                />
              </div>
            </div>

            <div className="pt-2 text-sm text-yellow-500 hover:text-yellow-600 transition-colors flex items-center justify-between">
              <Link href="/signup">
                <span>Don't have an Account?</span>
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className=" bg-yellow-500 hover:bg-yellow-600 w-full text-black font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Log in
              </button>
            </div>
          </Form>
        </Suspense>
      </div>
    </div>
  );
};

export default ForgetPassword;
function Form({ children, emailRef }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailVal = emailRef.current.value;

    sendPasswordResetEmail(auth, emailVal)
      .then(() => {
        alert("Password reset email sent!");
        const redirect = searchParams.get("redirect");
        router.push(redirect || "/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
