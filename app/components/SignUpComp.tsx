"use client";
import Link from "next/link";
import React, { MouseEvent, useState } from "react";
import { navToOtp } from "../signup/actions";
import { PiSpinnerGapThin } from "react-icons/pi";

const SignUpComp = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (data.firstName.length < 3) {
      return setError("FirstName should be atleast 3 char");
    }

    if (data.lastName.length < 3) {
      return setError("LastName should be atleast 3 char");
    }

    if (data.email.length < 3) {
      return setError("EnterValid Email");
    }

    if (data.password.length < 6) {
      return setError("password should be atleast 7 char");
    }

    setError("");
    setLoading(true);

    const res = await fetch("api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    setLoading(false);

    if (res.status == 200) {
      return navToOtp(result.user.email);
    } else if (res.status == 201) {
      return navToOtp(result.user);
    } else {
      setError(result.error);
    }
    console.log("res", res);

    console.log(result);
  };

  return (
    <div className="p-8 border rounded-xl text-gray-500 max-w-lg mx-auto flex flex-col gap-4 mt-10 animate-scale-in bg-white dark:bg-gray-800 shadow-xl border-gray-200 dark:border-gray-700">
      <form className="w-full flex flex-col gap-4">
        <div className="col-span-2 sm:col-span-1">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-all duration-300 hover:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="..."
            required
            value={data.firstName}
            onChange={onChange}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-all duration-300 hover:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="..."
            required
            value={data.lastName}
            onChange={onChange}
          />
        </div>
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="small-input"
            value={data.email}
            onChange={onChange}
            className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="small-input"
            value={data.password}
            onChange={onChange}
            className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          onClick={submitHandler}
          className="btn-animated block w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 mt-4 dark:bg-cyan-600 dark:hover:bg-cyan-700"
        >
          {loading ? (
            <PiSpinnerGapThin className="inline text-center animate-spin" size={20} />
          ) : (
            "Sign up"
          )}
        </button>
      </form>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-2">
        Already have an account?{" "}
        <Link
          href="/signin"
          className="font-medium text-blue-600 hover:underline dark:text-cyan-500 transition-colors duration-300"
        >
          Login here
        </Link>
      </p>
      {error && <p className="text-red-500 text-sm animate-pop-in">{error}</p>}
    </div>
  );
};

export default SignUpComp;
