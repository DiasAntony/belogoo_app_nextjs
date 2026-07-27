import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  id: string;
  title?: string;
  content?: string;
  img?: string;
  edit?: boolean;
}

const PostCard = ({
  id,
  title = "Noteworthy technology acquisitions 2021",
  content = "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  img = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
  edit = false,
}: Props) => {
  function truncateString(str: string) {
    if (str.length > 103) {
      return str.slice(0, 103) + "...";
    }
    return str;
  }

  return (
    <div
      key={id}
      className="card-animated animate-fade-in-up flex flex-col h-full w-full"
    >
      <Link href={`/home/${id}`} className="block relative w-full aspect-[16/9] overflow-hidden group-card">
        <Image
          src={img}
          width={640}
          height={360}
          alt={title}
          className="transition-transform duration-700 ease-in-out group-hover:scale-110 object-cover w-full h-full"
        />
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-300 hover:text-blue-500 line-clamp-2">
          {title}
        </h5>

        <p className="mb-6 font-normal text-sm text-gray-600 dark:text-gray-400 flex-grow line-clamp-3">
          {truncateString(content)}
        </p>
        
        <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <Link
            href={"/home/" + id}
            className="btn-animated inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 flex-1 justify-center"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          {edit && (
            <Link
              href={"/home/" + id + "/edit"}
              className="btn-animated inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700 dark:bg-slate-600 dark:hover:bg-slate-500 flex-1 justify-center"
            >
              Edit
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
