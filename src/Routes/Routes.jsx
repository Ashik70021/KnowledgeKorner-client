
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Authentication/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Allblog from "../Pages/Allblog";
import BlogDetails from "../Pages/BlogDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
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
                element: <Allblog></Allblog>
            },
            {
                path: '/blogdetails/:id',
                element: <BlogDetails></BlogDetails>,
                loader: () => fetch('../../public/fake.json')
            },
        ]
    }
])

export default router