import Carousel from "../../Components/Carousel";
import Newsletter from "../../Components/Newsletter";
import RecentBlog from "../../Components/RecentBlog";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <RecentBlog></RecentBlog>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;