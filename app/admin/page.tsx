import React from "react";
import User from "@/models/user";
import Post from "@/models/post";
import FeedBack from "@/models/feedback";
import dbConnect from "@/libs/dbConn";
import { FaUsers, FaRegFileAlt, FaCommentDots } from "react-icons/fa";

const AdminDashboard = async () => {
  await dbConnect();
  
  const userCount = await User.countDocuments();
  const postCount = await Post.countDocuments();
  const feedbackCount = await FeedBack.countDocuments();

  const stats = [
    { title: "Total Users", count: userCount, icon: <FaUsers size={24} />, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
    { title: "Total Posts", count: postCount, icon: <FaRegFileAlt size={24} />, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30" },
    { title: "Feedbacks", count: feedbackCount, icon: <FaCommentDots size={24} />, color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/30" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="card-animated p-6 flex items-center justify-between"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{stat.title}</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{stat.count}</h3>
            </div>
            <div className={`p-4 rounded-full ${stat.bg} ${stat.color}`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;