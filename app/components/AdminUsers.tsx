"use client";
import React, { useState } from "react";
import ProfileLinks from "./ProfileLinks";
import UserDelet from "./UserDelet";
import Image from "next/image";
import { FaKey } from "react-icons/fa";
import { PiSpinnerGapThin } from "react-icons/pi";

export interface ProfileVal {
  _id: string;
  avatar?: string;
  lastName: string;
  firstName: string;
  bio: string;
  profession: string;
  linkedin: string;
  twitter: string;
  facebook: string;
  email: string;
}

const AdminUsers = ({
  firstName,
  lastName,
  avatar,
  twitter,
  facebook,
  linkedin,
  bio,
  profession,
  _id,
  email,
}: ProfileVal) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setMessage({ type: "error", text: "Password must be at least 6 characters." });
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await fetch("/api/admin/user/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: _id, newPassword }),
      });

      if (res.ok) {
        setMessage({ type: "success", text: "Password changed successfully!" });
        setNewPassword("");
        setTimeout(() => setIsModalOpen(false), 2000);
      } else {
        setMessage({ type: "error", text: "Failed to change password." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "An error occurred." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="card-animated p-6 text-center flex flex-col justify-between h-full animate-fade-in-up group relative">
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-gray-400 hover:text-blue-500 bg-white dark:bg-gray-800 rounded-full p-2 shadow-sm border border-gray-100 dark:border-gray-700 transition-all"
            title="Change Password"
          >
            <FaKey size={14} />
          </button>
          <UserDelet id={_id.toString()} />
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 mb-4">
            <Image
              className="rounded-full shadow-md object-cover"
              src={avatar || "/profile/nopro.webp"}
              alt={firstName}
              fill
              sizes="96px"
            />
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {firstName} {lastName}
          </h3>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">{profession || "User"}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{email}</p>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-6">
            {bio || "No bio provided."}
          </p>
        </div>

        <div className="mt-auto flex justify-center">
          <ProfileLinks facebook={facebook} twitter={twitter} linkedin={linkedin} />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 w-full max-w-md mx-4 modal-animated p-6" onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Change Password for {firstName}</h3>
            
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Enter new password"
                  required
                />
              </div>
              
              {message.text && (
                <p className={`text-sm ${message.type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                  {message.text}
                </p>
              )}

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-animated px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? <PiSpinnerGapThin className="inline animate-spin" size={18} /> : "Update Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminUsers;
