"use client";
import { useRouter } from "next/navigation";
import React, { MouseEvent, useState } from "react";
import { PiSpinnerGapThin } from "react-icons/pi";

interface Props {
  postId: string;
}

const AddComment = ({ postId }: Props) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const submitHandler = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (comment.length < 3) {
      return setError("Enter Comment");
    }
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/post/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment, postId }),
      });

      const result = await res.json();

      setLoading(false);

      console.log("res", res);

      if (res.status == 200) {
        setComment("");
        return router.refresh();
      } else if (res.status == 400) {
        return router.push("/signin");
      } else {
        return setError(result.error);
      }
    } catch (error) {
      console.log("error", error);
      return router.push("/signin");
    }
  };

  return (
    <form className="mb-8">
      <div className="mb-4">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows={5}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-4 transition-all duration-300 hover:border-blue-400 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm resize-y"
          placeholder="Write a comment..."
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        {error && <p className="text-red-500 dark:text-red-400 mt-2 text-sm">{error}</p>}
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={submitHandler}
          className="btn-animated text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-6 py-2.5 dark:bg-cyan-600 dark:hover:bg-cyan-700 shadow-md min-w-[140px] flex justify-center items-center"
        >
          {loading ? <PiSpinnerGapThin className="inline animate-spin" size={20} /> : "Post Comment"}
        </button>
      </div>
    </form>
  );
};

export default AddComment;
