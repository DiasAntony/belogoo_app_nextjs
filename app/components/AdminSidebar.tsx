"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUsers, FaRegFileAlt, FaCommentDots, FaTachometerAlt } from "react-icons/fa";

const AdminSidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/admin", icon: <FaTachometerAlt size={18} /> },
    { name: "Users", href: "/admin/users", icon: <FaUsers size={18} /> },
    { name: "Posts", href: "/admin/posts", icon: <FaRegFileAlt size={18} /> },
    { name: "Feedbacks", href: "/admin/feedbacks", icon: <FaCommentDots size={18} /> },
  ];

  return (
    <aside className="w-64 h-[calc(100vh-80px)] hidden md:block sticky top-20 left-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-sm z-10 animate-fade-in">
      <div className="py-6 px-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 px-4">Admin Panel</h2>
        <nav className="flex flex-col gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/admin" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  isActive
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <span className={isActive ? "text-blue-600 dark:text-blue-400" : ""}>{link.icon}</span>
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;
