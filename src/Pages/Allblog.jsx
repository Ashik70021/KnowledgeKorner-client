import { Link, useLoaderData } from "react-router-dom";
import BlogCard from "../Components/BlogCard";

const Allblog = () => {
    const blogs = useLoaderData();
    return (
        <div>
            <div className="mt-16 text-center space-y-6 ">
                <h1 className="text-4xl font-bold">All Blog</h1>
                <p className="text-xl text-gray-700">Explore timely topics, engaging stories, and expert perspectives to keep your finger on the pulse of what's happening now.</p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
            {
                blogs.map(blog => <BlogCard
                key={blog._id}
                blog={blog}
                ></BlogCard>)
            }
            </div>
            
        </div>
    );
};

export default Allblog;