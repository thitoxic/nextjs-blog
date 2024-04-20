'use client';
import React, { useEffect, useRef, useState } from "react";
import { CONSTANTS } from "../constants/constants";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import axios from "axios";
const Blogs = () => {
  const { ref: Ref, inView: isShortStoriesVisible } = useInView();
  const [articles, setArticles] = useState([])



const getArticles = () => {
  axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-03-20&sortBy=publishedAt&apiKey=46ad862210b34760a186800d3f3ebf67").then((res)=>{
    setArticles(res.data.articles.splice(0, 50))
  })
}

useEffect(()=>{
  getArticles()
}, [])

  const showBlogs = () => {
    return articles.map((blog) => {
      return (
        <>
          <div key={blog.url} className="blogContainer p-4">
            <Link
              href={`/blogs/${blog.url}`}
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

  const showShortStories = () => {
    return CONSTANTS.sampleBlogs.map((blog) => {
      return (
        <>
          <div key={blog.id} className="popout p-4">
            <Link
              href={`/blogs/${blog.id}`}
              className="block p-6 border h-full border-stone-100 rounded-lg shadow hover:bg-gray-100 bg-stone-100 hover:bg-stone-300"
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

  
  return <>
  <div>{showBlogs()}</div>
    <h3 className="font-bold p-5 ">Short stories</h3>
  <div ref={Ref} className="flex flex-column">
    {isShortStoriesVisible ? showShortStories() : ""}
  </div>
  </>;
};

export default Blogs;
