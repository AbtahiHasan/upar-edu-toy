import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineLogin } from "react-icons/ai";

import logo from "/logo.png"
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const {user, logOut} = useAuth()
    return (
        <nav className="container flex justify-between py-4">
            <Link className="flex items-center gap-3">
            <img className="h-[35px]" src={logo} alt="" /> <h3 className="text-2xl font-bold"><span className="text-[#FF6D60]">Upar</span><span className="text-[#00abe4]">Edu</span><span className="text-[#F7D060]">Toy</span></h3>
            </Link>
            <span className="lg:hidden text-xl">
                    {
                       toggle ? <IoMdClose className="cursor-pointer" onClick={() => setToggle(!toggle)} /> : <HiOutlineMenuAlt2 className="cursor-pointer"  onClick={() => setToggle(!toggle)} />
                    }
                </span>
                <ul className={`flex items-center duration-200 z-50 flex-col py-5 lg:p-0 text-white bg-opacity-80 lg:text-black top-14 bg-black lg:bg-transparent w-full lg:w-auto lg:flex-row gap-3 absolute lg:static ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <NavLink onClick={() => setToggle(!toggle)} to="/" className={({ isActive }) => isActive ? "active px-5 rounded-full" : " px-5 rounded-full"}>Home</NavLink>
                    </li>
                   

                    <li>
                        <NavLink onClick={() => setToggle(!toggle)} to="/all-toys" className={({ isActive }) => isActive ? "active px-5 rounded-full" : " px-5 rounded-full"}>All Toys</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setToggle(!toggle)} to="/my-toys" className={({ isActive }) => isActive ? "active px-5 rounded-full" : " px-5 rounded-full"}>My Toys</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setToggle(!toggle)} to="/add-toy" className={({ isActive }) => isActive ? "active px-5 rounded-full" : " px-5 rounded-full"}>Add Toy</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setToggle(!toggle)} to="/blog" className={({ isActive }) => isActive ? "active px-5 rounded-full" : " px-5 rounded-full"}>Blog</NavLink>
                    </li>
                    
                     <li>{
                            user?.photoURL ? <img className="w-[35px] h-[35px] rounded-full cursor-pointer" src={user?.photoURL} title={user.displayName} alt="" /> : ""
                        }
                    </li>
                    <li>{
                            user ? <button onClick={logOut} className="border-[#00abe4] text-[#00abe4] px-4 py-2 flex items-center gap-2  border rounded p-3"><AiOutlineLogin/> LogOut</button> : <button><Link className="flex items-center gap-2 border rounded p-3 border-[#00abe4] text-[#00abe4]" to="/login"> <AiOutlineLogin/>  Login</Link></button>
                        }
                    </li>
                    
                </ul>
        </nav>
    );
};

export default Navbar;