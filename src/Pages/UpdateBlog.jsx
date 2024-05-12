
const UpdateBlog = () => {
    return (
        <div className="container mx-auto ">
            <div className="mt-24">
                <h1 className="text-center text-4xl md:text-5xl font-bold"> Update your Blog</h1>
                <form className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="country">Category</label>
                            <select id="country" className="input input-bordered border-[#912BBC] w-full" required>
                                <option value="">Select a Category</option>
                                <option value="Bangladesh">Travel & Adventure</option>
                                <option value="Thailand">Food & Recipes</option>
                                <option value="Indonesia">Creativity & Inspiration</option>
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

                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">description</label>
                            <input type="text" placeholder="Type here" name="short_description" className="input input-bordered caret-[#912BBC] border-[#912BBC] w-full " />
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