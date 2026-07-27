"use client";
import React, { MouseEvent, useState } from "react";
import { navToOtp } from "../signup/actions";
import { useRouter } from "next/navigation";
import { PiSpinnerGapThin } from "react-icons/pi";

const SignInCom = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

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

    if (data.email.length < 3) {
      return setError("EnterValid Email");
    }

    if (data.password.length < 6) {
      return setError("password should be atleast 7 char");
    }
    setLoading(true);
    setError("");
    const res = await fetch("api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    setLoading(false);

    if (res.status == 200) {
      return router.push("/home");
    } else if (res.status == 201) {
      return navToOtp(result.user);
    } else {
      setError(result.error);
    }
    console.log("res", res);

    console.log(result);
  };

  return (
    <form className="max-w-lg flex flex-col gap-3 animate-scale-in">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={onChange}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:border-blue-400"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={data.password}
          onChange={onChange}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:border-blue-400"
        />
      </div>
      <button
        type="button"
        onClick={submitHandler}
        className="btn-animated block text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-2 dark:bg-cyan-600 dark:hover:bg-cyan-700"
      >
        {loading ? (
          <PiSpinnerGapThin className="inline text-center animate-spin" size={20} />
        ) : (
          "Sign in"
        )}
      </button>
      {error && <p className="text-red-500 text-sm animate-pop-in">{error}</p>}
    </form>
  );
};

export default SignInCom;
