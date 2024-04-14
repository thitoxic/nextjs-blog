import React from "react";
import { CONSTANTS } from "../constants/constants";
import Link from "next/link";

const Blogs = () => {
  const showBlogs = () => {
    return CONSTANTS.sampleBlogs.map((blog) => {
      return (
        <>
          <div key={blog.id} className="blogContainer p-4">
            <Link
              href={`/blogs/${blog.id}`}
              className="block p-6 border border-stone-100 rounded-lg shadow hover:bg-gray-100 bg-stone-100 hover:bg-stone-300"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                {blog.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-500">
                {blog.description}
              </p>
            </Link>
          </div>
        </>
      );
    });
  };
  return <>{showBlogs()}</>;
};

export default Blogs;
