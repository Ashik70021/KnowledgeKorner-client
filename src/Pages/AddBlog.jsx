import { useContext, useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AuthContext } from "../Provider/AuthProvider";
// import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from "axios";



const AddBlog = () => {
    // const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date())
    

    const handleFormSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const blog_title = form.title.value
        const email = form.email.value
        const date = startDate
        const category = form.category.value
        const description = form.description.value

        const blogData = {
            blog_title, date, category, description,
            author: {
                email,
                name: user?.displayName,
                photo: user?.photoURL,
            }
        }
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/blog`,
                blogData
            )
            console.log(data)
            toast.success('Blog added successfully')
            // navigate('/my-posted-blog')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="container mx-auto ">
            <div className="mt-24">
                <h1 className="text-center text-4xl md:text-5xl font-bold"> Add your Blog</h1>
                <form onSubmit={handleFormSubmit}
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
                            <input type="text" placeholder="Type here" name="title" className="input input-bordered caret-[#912BBC] border-[#912BBC]  w-full " required />
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Image</label>
                            <input type="text" placeholder="Use image URL" name="image" className="input input-bordered caret-[#912BBC] border-[#912BBC] w-full " />
                        </div>
                        <div className="p-6 flex flex-col">
                            <label className='text-xl font-normal'>Date</label>

                            {/* Date Picker Input Field */}
                            <DatePicker
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

export default AddBlog;