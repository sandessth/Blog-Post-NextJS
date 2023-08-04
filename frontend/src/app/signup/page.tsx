"use client";
import React from "react";
import Inputfield from "../blog/components/inputfield";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAttachEmail } from "react-icons/Md";

const SignUp = () => {
  const initialvalues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please Enter Your Name"),
    username: Yup.string().required("Please Enter Your User Name"),
    email: Yup.string().required("Please Enter A  Valid E-mail Address"),
    password: Yup.string().required("Please Enter A Correct Password"),
    confirmpassword: Yup.string()
      .required("Please Confirm  Your Password")
      .oneOf([Yup.ref("password")], "Passwords Must Match"),
    checkbox: Yup.boolean().oneOf(
      [true],
      "Please  Read And Accept All The Terms And Conditions"
    ),
  });
  const router = useRouter();

  const handleSubmit = async (values: typeof initialvalues) => {
    try {
      const response = await axios.post("http://localhost:4000/users", {
        email: values.email,
        password: values.password,
      });
      toast.success("Successfully Created Your Account.");
      router.push("/signin");
      localStorage.setItem("session-token", response.data.accessToken);
    } catch (error) {
      toast.error("Could Not Sign Up");
    }
  };

  return (
    <div className="bgimg h-screen flex justify-center items-center ">
      <Formik
        initialValues={initialvalues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center items-center w-full h-100vph backdrop-blur-sm text-black font-medium font-serif">
          <Form className="w-[30%] h-100vph bg-black bg-opacity-10 border-2 border-black border-solid rounded p-10 flex flex-col justify-center m-0">
            <h1 className="text-3xl mb-4 mt-4 text-bold text-center">
              Register
            </h1>
            <Inputfield
              type="text"
              name="name"
              label="Name"
              icon={<FaUserAlt />}
            />
            <Inputfield
              type="text"
              name="username"
              label="User Name"
              icon={<FaUserAlt />}
            />
            <Inputfield
              type="text"
              name="email"
              label="E-mail"
              icon={<MdAttachEmail />}
            />
            <Inputfield
              type="password"
              name="password"
              label="Password"
              icon={<RiLockPasswordFill />}
            />
            <Inputfield
              type="password"
              name="confirmpassword"
              label="Confirm Password"
              icon={<RiLockPasswordFill />}
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
