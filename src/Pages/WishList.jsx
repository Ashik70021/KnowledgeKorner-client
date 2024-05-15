import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from 'axios';

const WishList = () => {
    
    const { user } = useContext(AuthContext);
    const wishlists = useLoaderData();
    // const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    // Fetch blogs from DB
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`);
                // setBlogs(data);

                // Filter blogs based on the user's wishlist
                const userWishlist = wishlists.filter(wishlist => wishlist.email === user.email);
                const filteredBlogs = data.filter(blog => userWishlist.some(wishlist => wishlist.blog_id === blog._id));
                setFilteredBlogs(filteredBlogs);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, [user.email, wishlists]);

    // // Handle removing a blog from the wishlist
    // const handleRemoveWishlist = async (blogId) => {
    //     try {
    //         // Make an API call to remove the blog from the wishlist
    //         await axios.delete(`${import.meta.env.VITE_API_URL}/wishlist`, {
    //             data: { email: user.email, blog_id: blogId }
    //         });

    //         // Update the filteredBlogs state to remove the blog
    //         setFilteredBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== blogId));
    //     } catch (error) {
    //         console.error("Error removing from wishlist:", error);
    //     }
    // };

    return (
        <div className="container mx-auto mt-16">
            <div className="mt-8 text-center space-y-6 ">
                <h1 className="text-4xl font-bold">My Added Wishlist</h1>
                <p className="text-xl text-gray-700">Explore timely topics, engaging stories, and expert perspectives to keep your finger on the pulse of what's happening now.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-16">
                {filteredBlogs.map(blog => (
                    <div key={blog._id} className="p-4 hover:-translate-y-5 duration-700 relative m-4 border-solid border-2 border-[#912BBC] max-w-sm rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={blog.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="mt-6">
                            <span className="block text-md font-medium tracking-widest uppercase text-cyan-600">{blog.category}</span>
                            <h2 className="mt-1 text-2xl font-semibold tracking-wide">{blog.blog_title}</h2>
                            <p className="mt-4 text-gray-700 text-lg">{blog.description.substring(0, 100)} . . . .</p>
                        </div>
                        <div className="mt-8 flex justify-around">
                            <Link to={`/blogdetails/${blog._id}`}>
                                <button type="button" className="btn bg-[#912BBC] border-none text-xl w-full px-9 font-semibold rounded-md text-white">Details</button>
                            </Link>
                            <button type="button" className="btn bg-[#912BBC] border-none text-xl px-4 font-semibold rounded-md text-white">Remove Wishlist</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishList;
