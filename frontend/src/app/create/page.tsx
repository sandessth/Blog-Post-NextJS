import React from "react";

function Create() {
  return (
    <div className="col-span-full">
      <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
        About
      </label>
      <div className="mt-2">
        <textarea
          //   value={about}
          //   onChange={(event) => setAbout(event.target.value)}
          id="about"
          name="about"
          className="block dark:bg-slate-200/20 dark:text-slate-100 w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
        ></textarea>
      </div>
      <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-slate-400">
        Write a few sentences about yourself.
      </p>
    </div>
  );
}

export default Create;
