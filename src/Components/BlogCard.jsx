import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const BlogCard = ({ blog }) => {
    const { user } = useContext(AuthContext);
    const [wishlistBlogs, setWishlistBlogs] = useState([]);
    // console.log(user);
    const { _id, category, blog_title, description, image } = blog;
    // console.log(_id);

    const handleWishlist = async () => {
        if (!user) {
            toast.error('You need to be logged in to add to wishlist');
            return;
        }

        if (wishlistBlogs.includes(_id)) {
            toast.error('This blog is already in your wishlist');
            return;
        }

        const blog_id = _id;
        const email = user.email;
        const wishlist = {
            blog_id,
            email,
        };

        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/wishlist`,
                wishlist
            );
            console.log(data);
            setWishlistBlogs((prev) => [...prev, blog_id]);
            toast.success('Added to wishlist successfully');
        } catch (err) {
            console.log(err);
            toast.error('Failed to add to wishlist');
        }
    };

    return (
        <div className='mx-auto'>
            <div className="p-4 hover:-translate-y-5 duration-700 relative m-4 max-w-sm border-solid border-2 border-[#912BBC] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="mt-6">
                    <span className="block text-md font-medium tracking-widest uppercase text-cyan-600">{category}</span>
                    <h2 className="mt-1 text-2xl font-semibold tracking-wide">{blog_title}</h2>
                    <p className="mt-4 text-gray-700 text-lg">{description.substring(0, 70)} . . . .</p>
                </div>
                <div className="mt-8 flex justify-around">
                    <Link to={`/blogdetails/${_id}`}>
                        <button type="button" className="btn bg-[#912BBC] border-none text-xl w-full px-9 font-semibold rounded-md text-white">
                            Details
                        </button>
                    </Link>
                    <button
                        type="button"
                        className="btn bg-[#912BBC] border-none text-xl  px-8 font-semibold rounded-md text-white"
                        onClick={handleWishlist}
                    >
                        Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
