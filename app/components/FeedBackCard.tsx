import React from "react";

interface Props {
  email: string;
  subject: string;
  message: string;
  date: Date;
}

const FeedBackCard = ({ email, subject, message, date }: Props) => {
  return (
    <div className="card-animated p-6 flex flex-col h-full animate-scale-in">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {subject}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-4">
          {message}
        </p>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center text-xs">
        <span className="font-medium text-blue-600 dark:text-blue-400 truncate max-w-[60%]">
          {email}
        </span>
        <span className="text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
          {new Date(date).toLocaleDateString("en-us", {
            month: "short",
            day: "numeric",
            year: "numeric"
          })}
        </span>
      </div>
    </div>
  );
};

export default FeedBackCard;
