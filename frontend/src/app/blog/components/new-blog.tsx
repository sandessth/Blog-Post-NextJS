import axios from "axios";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPenFancy } from "react-icons/fa";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [value, onChange] = useState<Value>(new Date());

  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const handleCancel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log({ title });
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log({ title });
    if (!title) {
      toast.error("Please enter title.");
      return;
    } else if (!author) {
      toast.error("Please enter your name.");
      return;
    } else !content;
    {
      toast.error("Please enter content.");
    }

    axios
      .post("http://localhost:4000/blog", { title, content })
      .then((response) => {
        console.log(response);
        toast.success("Blog Created Successfully");
        setTitle("");
        setContent("");
        setAuthor("");

        // navigate("/signin");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center p-10 font-mono">
      <main className="w-2/3 border border-2 border-gray-900/10 p-5 bg-gray-300/20 rounded-lg">
        <div className="text-xl text-slate-900/80 hover:text-blue-800 flex justify-center">
          Create Your Blog.....
          <FaPenFancy />
        </div>
        <div className="pt-10 pb-5 flex items-center">
          <label className="block text-sm text-slate-900/80 font-medium leading-6 text-gray-900 dark:text-slate-100">
            Title:&ensp;
          </label>
          <input
            value={title}
            onChange={(event) => setAuthor(event.target.value)}
            id="email"
            name="email"
            type="email"
            className="block w-full dark:bg-slate-200/20 dark:text-slate-100 rounded-md py-1.5 px-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-100"
          />
        </div>

        <div className="pb-5 flex items-center">
          <label className="block text-sm text-slate-900/80 font-medium leading-6 text-gray-900 dark:text-slate-100">
            Author:&ensp;
          </label>
          <input
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            id="email"
            name="email"
            type="email"
            className="block w-full dark:bg-slate-200/20 dark:text-slate-100 rounded-md py-1.5 px-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-100"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-900/80 font-medium leading-6 text-gray-900 dark:text-slate-100">
            Blog:
          </label>
          <div className="mt-2">
            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              id="about"
              name="about"
              className="block dark:bg-slate-200/20 dark:text-slate-100 pb-72 w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
            ></textarea>

            <div className="pb-5  pt-2flex items-center">
              <label className="block text-sm text-slate-900/80 font-medium leading-6 text-gray-900 dark:text-slate-100 pt-4">
                Date Posted:&ensp;
              </label>
              <div>
                <DatePicker
                  className="box-border border-sky-200 border-2 rounded..."
                  onChange={onChange}
                  value={value}
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-2">
              <button
                type="button"
                onClick={handleCancel}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100 px-8 py-2 rounded-md hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="rounded-md bg-slate-600 px-8 py-2 text-sm font-semibold text-white shadow-lg hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}

export default Create;
