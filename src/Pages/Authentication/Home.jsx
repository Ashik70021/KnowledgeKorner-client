import { useLoaderData } from "react-router-dom";
import Carousel from "../../Components/Carousel";
import Newsletter from "../../Components/Newsletter";
import RecentBlog from "../../Components/RecentBlog";

const Home = () => {
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div>
            <Carousel></Carousel>
            <RecentBlog blogs={blogs}></RecentBlog>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;