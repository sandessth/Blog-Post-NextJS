"use client";
import React from "react";
import Inputfield from "../blog/components/inputfield";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiUser } from "react-icons/fi";
import { BsLock } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/Ai";

const SignUp = () => {
  const initialvalues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your Name."),
    username: Yup.string().required("Please enter your username."),
    email: Yup.string().required("Please enter valid email address."),
    password: Yup.string().required("Please enter correct password"),
    confirmpassword: Yup.string()
      .required("Please confirm password")
      .oneOf([Yup.ref("password")], "Password must match"),
    checkbox: Yup.boolean().oneOf(
      [true],
      "Please accept all the terms and conditions."
    ),
  });
  const router = useRouter();

  const handleSubmit = async (values: typeof initialvalues) => {
    try {
      const response = await axios.post("http://localhost:4000/users", {
        email: values.email,
        password: values.password,
      });
      toast.success("Successfully created your account.");
      router.push("/signin");
      localStorage.setItem("session-token", response.data.accessToken);
    } catch (error) {
      toast.error("Could not sign up");
    }
  };

  return (
    <div className="bgimg h-screen flex justify-center items-center ">
      <Formik
        initialValues={initialvalues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center items-center w-full h-100vph backdrop-blur-sm text-black font-medium border-solid black rounded">
          <Form className="w-[30%] h-50vph bg-white bg-opacity-10 border-l-2 border-r-2 p-5 flex flex-col justify-center">
            <h1 className="text-3xl mb-4 mt-4 text-bold text-center">
              Sign Up
            </h1>
            <Inputfield
              type="text"
              name="name"
              label="Name"
              icon={<FiUser />}
            />
            <Inputfield
              type="text"
              name="username"
              label="Username"
              icon={<FiUser />}
            />
            <Inputfield
              type="text"
              name="email"
              label="Email"
              icon={<AiOutlineMail />}
            />
            <Inputfield
              type="password"
              name="password"
              label="Password"
              icon={<BsLock />}
            />
            <Inputfield
              type="password"
              name="confirmpassword"
              label="Confirm Password"
              icon={<BsLock />}
            />

            <button
              type="submit"
              className="border-2 w-full mb-6 border-black p-1 rounded-md text-lg backdrop-blur-md hover:scale-95 mt-3"
            >
              Sign Up
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default SignUp;
