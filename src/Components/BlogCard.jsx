import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const {category,title,description} = blog
    return (
        <div className="p-4 hover:-translate-y-5 duration-700 relative m-4 border-solid border-2 border-[#912BBC] max-w-sm rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="mt-6">
                <span className="block text-md font-medium tracking-widest uppercase text-cyan-600">{blog.category}</span>
                <h2 className="mt-1 text-2xl font-semibold tracking-wide">{blog.title}</h2>
                <p className="mt-4 text-gray-700 text-lg">{blog.description.substring(0, 100)} . . . .</p>
            </div>
            <div className="mt-8 flex justify-around">
                <Link to={`/blogdetails/${blog._id}`}><button type="button" className="btn bg-[#912BBC] border-none text-xl w-full px-9  font-semibold rounded-md text-white">Details</button></Link>
                <Link to={`/viewdetails/${blog._id}`}><button type="button" className="btn bg-[#912BBC] border-none text-xl w-full px-8 font-semibold rounded-md text-white">Wishlist</button></Link>
            </div>
        </div>
    );
};

export default BlogCard;