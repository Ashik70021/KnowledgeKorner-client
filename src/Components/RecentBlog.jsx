import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

const RecentBlog = ({ blogs }) => {
    // const { blogs } = blogs;

    if (blogs && blogs.length > 6) {
        blogs = blogs.slice(0, 6);
    }

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