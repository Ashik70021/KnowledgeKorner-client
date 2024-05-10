import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
    const items = useLoaderData();
    const { id } = useParams();
    const item = items.find(item => item._id === id)
    console.log(item, id)
    return (
        <div className="my-16 grid grid-cols-12 container mx-auto">
            {/* left side */}
            <div className="col-span-9 bg-red-500">
                <div className=" p-4 shadow-md bg-gray-50 text-gray-800">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-800">{item.category}</a>
                        </div>
                        <a rel="noopener noreferrer" href="#">See All</a>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-[500px] bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-2xl font-semibold text-cyan-600">{item.title}</h3>
                            </a>
                            <p className="text-xl leading-snug text-gray-600">{item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="col-span-3 bg-blue-600">
                <h1>small</h1>
            </div>
        </div>
    );
};

export default BlogDetails;