import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import logo from "/logo.png"
import { useState } from "react";


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="container flex justify-between py-4">
            <div className="flex items-center gap-3">
            <img className="h-[35px]" src={logo} alt="" /> <h3 className="text-2xl font-bold">UparEduToy</h3>
            </div>
            <span className="md:hidden text-xl">
                    {
                       toggle ? <IoMdClose onClick={() => setToggle(!toggle)} /> : <HiOutlineMenuAlt2  onClick={() => setToggle(!toggle)} />
                    }
                </span>
                <ul className={`flex items-center duration-200 z-50 flex-col py-5 md:p-0 text-white bg-opacity-80 md:text-black top-14 bg-black md:bg-transparent w-full md:w-auto md:flex-row gap-3 absolute md:static ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active px-5 rounded-full" : " px-5 rounded-full"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "active px-5 rounded-full" : " px-5 rounded-full"}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className={({ isActive }) => isActive ? "active px-5 rounded-full" : " px-5 rounded-full"}>Register</NavLink>
                    </li>
                    
                    
                </ul>
        </nav>
    );
};

export default Navbar;