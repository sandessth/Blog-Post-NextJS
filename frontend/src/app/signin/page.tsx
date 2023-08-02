"use client";

import { useState } from "react";
import InputBar from "../components/layout/input";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="dark:bg-dark">
      {/* <InputBar type={"text"} title="Name" required />
      <InputBar type={"text"} title="Email" required /> */}
      <div className="text-white/80 h-screen">
        <main className="flex justify-center drop-shadow-lg  dark:bg-dark pt-5 mb-5 ">
          <div className="flex justify-center bg-gray-300/20 border-2 border-gray-900/10 rounded-lg dark:bg-gray-800 p-8">
            <div>
              <form className="space-y-6">
                <div>
                  <div className="text-2xl text-slate-600 mb-5 flex justify-center">
                    Sign In
                  </div>
                  <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                    Email Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="block w-full dark:bg-slate-200/20 dark:text-slate-100 rounded-md py-1.5 px-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-100"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-slate-600 hover:text-slate-400"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="block w-full rounded-md border-0 dark:bg-slate-200/20 dark:text-slate-100 py-1.5 px-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 mt-10 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-6">
                <p className=" text-center text-sm text-gray-500 px-6 py-6 dark:text-slate-100">
                  Not a member yet?&nbsp;
                  <a
                    href="/signup"
                    className="font-semibold leading-6 text-l text-slate-600 hover:text-slate-400 ml-2 mr-2"
                  >
                    Sign Up and Explore The World of Wonders.
                  </a>
                  Now!
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SignIn;
