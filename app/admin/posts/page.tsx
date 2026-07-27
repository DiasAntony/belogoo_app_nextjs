import React from "react";
import Post from "@/models/post";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { decrypt } from "@/libs/session";
import PostCard from "@/app/components/PostCard";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const gg = (await cookies()).get("session");

  if (!gg) {
    return redirect("/signin");
  }

  const decrp = await decrypt(gg?.value);

  if (decrp?.role !== 1) {
    return redirect("/error/other");
  }
  const post = await Post.find()
    .sort({ timestamp: -1 })
    .limit(parseInt((await searchParams).page) ?? 9)
    .select({ title: 1, thumbnail: 1, description: 1 });

  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {post.map((e, i) => {
          return (
            <PostCard
              key={i}
              id={e._id}
              img={e.thumbnail}
              title={e.title}
              content={e.description}
              edit={true}
            />
          );
        })}
      </div>
      {post.length > 9 && (
        <div className="flex justify-center mt-12 mb-8">
          <Link 
            href={"?page=" + parseInt((await searchParams).page) + 6}
            className="btn-animated text-white bg-blue-600 hover:bg-blue-700 text-center font-medium rounded-lg text-sm px-8 py-3 dark:bg-cyan-600 dark:hover:bg-cyan-700 shadow-md"
          >
            Load more
          </Link>
        </div>
      )}
    </div>
  );
};

export default page;
