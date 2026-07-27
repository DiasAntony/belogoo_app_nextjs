import { decrypt } from "@/libs/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import AdminSidebar from "../components/AdminSidebar";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const cookie = (await cookies()).get("session");

  if (!cookie) {
    return redirect("/signin");
  }

  const decrp = await decrypt(cookie?.value);

  if (decrp?.role !== 1) {
    return redirect("/error/other");
  }

  return (
    <div className="flex min-h-[calc(100vh-80px)]">
      <AdminSidebar />
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="mx-auto max-w-7xl animate-fade-in-up">
          {children}
        </div>
      </main>
    </div>
  );
};

export default layout;
