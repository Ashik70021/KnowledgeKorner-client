import { useLoaderData } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Allblog = () => {
    const blogs = useLoaderData();
    return (
        <div>
            <div className="mt-8 text-center space-y-6 ">
                <h1 className="text-4xl font-bold">All Blog</h1>
                <p className="text-xl text-gray-700">Explore timely topics, engaging stories, and expert perspectives to keep your finger on the pulse of what's happening now.</p>
            </div>

            <Tabs>
                <div className="container mx-auto mt-16">
                    <div className="flex items-center justify-center">
                        <TabList>
                            <Tab>TRAVEL & ADVENTURE</Tab>
                            <Tab>FOOD & RECIPES</Tab>
                            <Tab>CREATIVITY & INSPIRATION</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
                            {
                                blogs
                                    .filter(b => b.category === 'Travel & Adventure')
                                    .map(blog => <BlogCard
                                        key={blog._id}
                                        blog={blog}
                                    ></BlogCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
                            {
                                blogs
                                    .filter(b => b.category === 'Food & Recipes')
                                    .map(blog => <BlogCard
                                        key={blog._id}
                                        blog={blog}
                                    ></BlogCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
                            {
                                blogs
                                    .filter(b => b.category === 'Creativity & Inspiration')
                                    .map(blog => <BlogCard
                                        key={blog._id}
                                        blog={blog}
                                    ></BlogCard>)
                            }
                        </div>
                    </TabPanel>
                </div>
            </Tabs>



        </div>
    );
};

export default Allblog;