import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const link = <>
        <li className='text-lg '> <NavLink to="/">Home</NavLink> </li>
        <li className='text-lg '> <NavLink to="/allBlog">All Blog</NavLink> </li>
        <li className='text-lg '> <NavLink to="/featuredBlog">Featured Blog</NavLink> </li>
        <li className='text-lg '> <NavLink to="/addBlog">Add Blog</NavLink> </li>
        <li className='text-lg '> <NavLink to="/wishList">Wishlist</NavLink> </li>
        <li className='text-lg '> <NavLink to="/updateBlog">Update Blog</NavLink> </li>
    </>
    return (
        <div className=" text-black bg-[#D875C7] relative z-10">
            <nav className=' navbar pl-0 md:pl-8 pr-2 md:pr-8'>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm !dark:text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>

                    <a className="text-xl md:text-3xl font-bold pl-2 md:pl-4">ExploreEpic</a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>

                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="profile" src={user?.photoURL || "https://i.ibb.co/9N4MfJH/user.png"} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><a>{user?.displayName}</a></li>
                                    <li><a>Settings</a></li>
                                    <li onClick={logOut}><a>Logout</a></li>
                                </ul>
                            </div> :

                            <a href="/login"><button type="button" className="px-6 py-2 font-semibold rounded-full bg-[#912BBC] text-gray-100">Login</button></a>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;