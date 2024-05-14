import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
import { useLoaderData } from 'react-router-dom';

const FeaturedBlog = () => {
    const blogs = useLoaderData();
    console.log(blogs)
    const [newBlogs, setNewblogs] = useState([]);
    console.log(newBlogs)
    useEffect(() => {
        // Sort blogs based on the length of the description in descending order
        const sortedBlogs = blogs.sort((a, b) => b.description.length - a.description.length);
        // Take the top 10 blogs
        const top10Blogs = sortedBlogs.slice(0, 10);
        // Update state with top 10 blogs
        setNewblogs(top10Blogs);
    }, [blogs]);

    const columns = [
        {
            name: 'SI',
            selector: row => row.si,
            sortable: true
        },
        {
            name: "Blog Title",
            selector: row => row.blog_title,
            sortable: true
        },
        {
            name: 'Blog Owner',
            selector: row => row.blog_owner,
            sortable: true
        },
    ];
    const data = newBlogs.map((blog, index) => ({
        si: index + 1,
        blog_title: blog.blog_title,
        blog_owner: blog.author.email,
    }));

    return (
        <div className='mt-24 container mx-auto text-xl'>
            <div className="mt-8 text-center space-y-6 mb-16">
                <h1 className="text-4xl font-bold">Top 10 Blogs</h1>
                <p className="text-xl text-gray-700">Explore timely topics, engaging stories, and expert perspectives to keep your finger on the pulse of what's happening now.</p>
            </div>
            <DataTable
                columns={columns}
                data={data}
                fixedHeader
            ></DataTable>
        </div>
    );
};

export default FeaturedBlog;