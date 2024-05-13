import { useContext, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateBlog = () => {
    const {id} = useParams();
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date())
    // const [value, onChange] = useState([]);
    const [blog, setBlog] = useState({})
    console.log(blog)
    // fetch blogs from DB
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/blog/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data);
                console.log(data)
            })
    }, [id])

    const handleUpdate = async (e) => {
        e.preventDefault()
        const form = e.target
        const blog_title = form.title.value
        const image = e.target.image.value;
        const category = form.category.value
        const description = form.description.value
        const blogData = {
            blog_title, image, category, description,
        }
        try {
            const { data } = await axios.put(
                `${import.meta.env.VITE_API_URL}/updateBlog/${id}`,
                blogData
            )
            console.log(data)
            toast.success('Blog updated successfully')
            // navigate('/my-posted-blog')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="container mx-auto ">
            <div className="mt-24">
                <h1 className="text-center text-4xl md:text-5xl font-bold"> Add your Blog</h1>
                <form onSubmit={handleUpdate}
                    className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="category">Category</label>
                            <select id="category" className="input input-bordered border-[#912BBC] w-full" required>
                                <option value="">Select a Category</option>
                                <option value="Travel & Adventure">Travel & Adventure</option>
                                <option value="Food & Recipes">Food & Recipes</option>
                                <option value="Creativity & Inspiration">Creativity & Inspiration</option>
                            </select>
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Title</label>
                            <input type="text" placeholder="Type here" name="title" className="input input-bordered caret-[#912BBC] border-[#912BBC]  w-full " 
                            required 
                            defaultValue={blog.blog_title}
                             />
                
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Image</label>
                            <input type="text" placeholder="Use image URL" name="image" className="input input-bordered caret-[#912BBC] border-[#912BBC] w-full " 
                            defaultValue={blog.image}
                            />
                        </div>
                        <div className="p-6 flex flex-col">
                            <label className='text-xl font-normal'>Date</label>

                            {/* Date Picker Input Field */}
                            <ReactDatePicker
                                className='input input-bordered caret-[#912BBC] border-[#912BBC] w-full'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Email Address</label>
                            <input type="email" defaultValue={user?.email} placeholder="email" name="email" className="input input-bordered caret-[#912BBC] border-[#912BBC] w-full " />
                        </div>


                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">description</label>
                            <textarea
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-[#912BBC] rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                name='description'
                                id='description'
                                defaultValue={blog.description}
                            ></textarea>
                        </div>

                    </div>
                    <div className="w-2/4 mx-auto">
                        <button className="btn border-none bg-[#912BBC] w-full text-xl text-white ">Add Place</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;