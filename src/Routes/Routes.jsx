
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Authentication/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Allblog from "../Pages/Allblog";
import BlogDetails from "../Pages/BlogDetails";
import AddBlog from "../Pages/AddBlog";
import UpdateBlog from "../Pages/UpdateBlog";
import WishList from "../Pages/WishList";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/blogs`),
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allBlog',
                element: <Allblog></Allblog>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/blogs`),
            },
            {
                path: '/blogdetails/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/blog/${params.id}`)
            },
            {
                path: '/addBlog',
                element: <AddBlog></AddBlog>
            },
            {
                path: '/updateBlog',
                element: <UpdateBlog></UpdateBlog>
            },
            {
                path: '/wishList',
                element: <WishList></WishList>
            },
        ]
    }
])

export default router