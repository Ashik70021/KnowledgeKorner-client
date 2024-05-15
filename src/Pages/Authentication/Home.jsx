
import Carousel from "../../Components/Carousel";
import Newsletter from "../../Components/Newsletter";
import RecentBlog from "../../Components/RecentBlog";
import PopulerBlogger from "../../Components/PopulerBlogger";

const Home = () => {

    return (
        <div>
            <Carousel></Carousel>
            <RecentBlog></RecentBlog>
            <PopulerBlogger></PopulerBlogger>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;