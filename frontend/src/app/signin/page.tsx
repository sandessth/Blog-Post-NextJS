"use client";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Inputfield from "../blog/components/inputfield";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { BsLock } from "react-icons/bs";
import { PiGoogleLogo } from "react-icons/pi";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const initialvalues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Please enter valid email address."),
    password: Yup.string().required("Please enter correct password"),
    checkbox: Yup.boolean().oneOf(
      [true],
      "Please accept all the terms and conditions."
    ),
  });
  const router = useRouter();

  const handleSubmit = async (values: typeof initialvalues) => {
    try {
      const response = await axios.post("http://localhost:4000/signin", {
        email: values.email,
        password: values.password,
      });
      toast.success("Successfully signed in");
      console.log(response.data);
      router.push("/dashboard");
      localStorage.setItem("session-token", response.data.accessToken);
    } catch (error) {
      toast.error("Could not sign in");
    }
  };

  return (
    <div className="bgimg h-screen flex justify-center items-center ">
      <Formik
        initialValues={initialvalues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => {
          return (
            <div className="flex flex-col justify-center items-center w-full h-100vph backdrop-blur-sm text-black font-medium rounded">
              <Form className="w-[30%] h-100vph bg-black bg-opacity-10 border-l-2 border-r-2 p-20 flex flex-col justify-center m-0">
                <h1 className="text-3xl mb-4 text-bold text-center">Sign In</h1>
                <Inputfield
                  type="text"
                  name="email"
                  label="Email Address"
                  icon={<FiUser />}
                />
                <Inputfield
                  type="password"
                  name="password"
                  label="Password"
                  icon={<BsLock />}
                />
                <p className="text-right mb-8">Forgot Password?</p>

                <button
                  type="submit"
                  className="border-2 w-full mb-6 border-black p-1 rounded-md text-lg"
                >
                  Sign In
                </button>
                <Link href="/signup" passHref>
                  <span className="p-6 mb-6 text-underline">
                    Don't have an Account? Sign Up Here!
                  </span>
                </Link>
              </Form>
              <ToastContainer className="ml-auto" />
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignIn;
