"use client";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Inputfield from "@/components/layout/inputfield";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const SignIn = () => {
  // console.log(localStorage.getItem("session-token"));
  const initialvalues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Please Enter A Valid E-mail Address"),
    password: Yup.string().required("Please Enter A Correct Password"),
    checkbox: Yup.boolean().oneOf(
      [true],
      "Please Read And Accept All The Terms And Conditions"
    ),
  });
  const router = useRouter();

  const handleSubmit = async (values: typeof initialvalues) => {
    try {
      const response = await axios.post("http://localhost:4000/signin", {
        email: values.email,
        password: values.password,
      });
      toast.success("Successfuly Signed In");
      console.log(response.data);
      router.push("/");
      localStorage.setItem("session-token", response.data.accessToken);
    } catch (error) {
      toast.error("Please Try Again");
    }
  };

  return (
    <div className="flex justify-center items-center py-5 ">
      <Formik
        initialValues={initialvalues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => {
          return (
            <div className="flex flex-col justify-center items-center w-full h-100vph text-black font-medium font-serif">
              <Form className="w-[30%] h-120vph bg-black bg-opacity-10 border-2 border-black border-solid rounded p-10 flex flex-col justify-center m-0 pt-10 pb-10">
                <h1 className="text-3xl mb-8 text-bold text-center">Sign In</h1>
                <Inputfield
                  type="text"
                  name="email"
                  label="E-mail Address"
                  icon={<FaUserAlt />}
                />
                <Inputfield
                  type="password"
                  name="password"
                  label="Password"
                  icon={<RiLockPasswordFill />}
                />
                <p className="text-center mb-8">Forgot Password?</p>

                <button
                  type="submit"
                  className="border-2 w-full mb-6 border-black p-1 rounded-md text-lg"
                >
                  Sign In
                </button>
                <Link href="/signup" passHref>
                  <p className="text-bold text-center underline">
                    Don't have an Account? <br />
                    Register Here!
                  </p>
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
