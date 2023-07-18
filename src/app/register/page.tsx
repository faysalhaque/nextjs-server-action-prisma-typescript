'use client'

import { createUserAction } from "@/app/_action"
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register(){
  const [ validationError, setValidationError ] = useState(null)
  async function action(data: any) {
    const result = await createUserAction(data);
    if(!result.success) {
      setValidationError(result.data)
      toast(result.data, {
        type: "error"
      })
    }
    if(result.success) {
      toast("User created success fully", {
        type: "success"
      })
    }
  }

  return (
    <main className="text-gray-600 body-font">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 rounded-lg p-8 flex flex-col max-w-auto mx-auto mt-10 md:mt-0 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Register
          </h2>
          <ToastContainer />
          <p className="leading-relaxed mb-5 text-gray-600">
            Add your info down below :)
          </p>
          {validationError && (
            <p className="bg-red-100 p-2 text-red-400 mb-2 rounded-sm">{validationError}</p>
          )}
          <form action={action}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>

              <input
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            
            <button className="mt-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Register
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
