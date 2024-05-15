import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const RecentBlog = () => {
    const { setLoading, loading } = useContext(AuthContext)
    const [blogs, setBlogs] = useState([]);
    console.log(blogs)
    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_API_URL}/blogs`)
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 6) {
                    data = data.slice(0, 6);
                }
                setBlogs(data);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])


    return (
        <div>
            <div className="mt-16 text-center space-y-6 ">
                <motion.h1 className="text-4xl font-bold" initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: "2",
                        delay: "0.5"
                    }}>
                    Recent Blog
                </motion.h1>
                <motion.h1 className="text-xl text-gray-700"
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: "2",
                        delay: "0.5"
                    }}
                >
                    Explore timely topics, engaging stories, and expert perspectives to keep your finger on the pulse of what's happening now.
                </motion.h1>
            </div>
            {loading && <div className="mx-auto w-full flex justify-center items-center">
                <div className="flex ">
                <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                    <div className="h-48 rounded-t bg-gray-300"></div>
                    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
                        <div className="w-full h-6 rounded bg-gray-300"></div>
                        <div className="w-full h-6 rounded bg-gray-300"></div>
                        <div className="w-3/4 h-6 rounded bg-gray-300"></div>
                    </div>
                </div>
                <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                    <div className="h-48 rounded-t bg-gray-300"></div>
                    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
                        <div className="w-full h-6 rounded bg-gray-300"></div>
                        <div className="w-full h-6 rounded bg-gray-300"></div>
                        <div className="w-3/4 h-6 rounded bg-gray-300"></div>
                    </div>
                </div>
                <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                    <div className="h-48 rounded-t bg-gray-300"></div>
                    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
                        <div className="w-full h-6 rounded bg-gray-300"></div>
                        <div className="w-full h-6 rounded bg-gray-300"></div>
                        <div className="w-3/4 h-6 rounded bg-gray-300"></div>
                    </div>
                </div>
                </div>
            </div>}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
                {
                    blogs.map(blog => <BlogCard
                        key={blog._id}
                        blog={blog}
                    >

                    </BlogCard>)
                }
            </div>

        </div>
    );
};

export default RecentBlog;