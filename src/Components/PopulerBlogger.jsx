
import { useEffect, useState } from 'react';
import img1 from '/images/b1.jpg'


const PopulerBlogger = () => {
    const [blogs, setBlogs] = useState([]);
    console.log(blogs)
    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_URL}/blogs`)
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 4) {
                    data = data.slice(0, 4);
                }
                setBlogs(data);
            })

    }, [])
    return (
        <div className='mt-16'>
            <section className="py-6 sm:py-12 bg-gray-100 text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-4xl font-bold">Populer Blogger</h2>
                        <p className=" text-xl text-gray-600">Explore diverse perspectives, engage with thought-provoking content, and empower yourself with every blog post.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            blogs.map(blog => <article
                                key={blog.id}
                                className="flex flex-col bg-gray-50">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt="" className="object-cover w-full h-52 bg-gray-500" src={blog.author.photo} />
                                </a>
                                <div className="flex flex-col flex-1 p-6">
                                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                    <a rel="noopener noreferrer" href="#" className="text-md tracking-wider uppercase hover:underline text-fuchsia-600">{blog.category}</a>
                                    <h3 className="flex-1 py-2 text-xl font-semibold leading-snug">{blog.author.name}</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-md text-gray-600">
                                        <span>June 1, 2020</span>
                                        <span>2.1K views</span>
                                    </div>
                                </div>
                            </article>

                            )
                        }


                    </div>
                </div>
            </section>
        </div>
    );
};

export default PopulerBlogger;