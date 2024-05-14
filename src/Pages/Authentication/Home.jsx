import { useLoaderData } from "react-router-dom";
import Carousel from "../../Components/Carousel";
import Newsletter from "../../Components/Newsletter";
import RecentBlog from "../../Components/RecentBlog";
import PopulerBlogger from "../../Components/PopulerBlogger";

const Home = () => {
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div>
            <Carousel></Carousel>
            <RecentBlog blogs={blogs}></RecentBlog>
            <PopulerBlogger></PopulerBlogger>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;