import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="max-w-[1320px] mx-auto px-4">
            <div className="flex items-center justify-between py-[6px] relative">
           
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://i.ibb.co.com/3mdg2Nx7/16.png" className="h-8" alt="Logo" />
                    <span className="self-center text-2xl font-semibold">Espresso Emporium</span>
                </div>

             
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                    <ul className="flex font-medium space-x-8">
                        <li>
                            <NavLink to={"/"} className="text-xl hover:text-[#331A15]">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Login"} className="text-xl hover:text-[#331A15]">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Register"} className="text-xl hover:text-[#331A15]">Register</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-2xl focus:outline-none"
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Overlay (when menu is open) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Left-Side Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-40 bg-white shadow-md p-5 transform transition-transform duration-300 z-20 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close Button */}
                <button
                    className="text-2xl mb-5 focus:outline-none"
                    onClick={() => setIsOpen(false)}
                >
                    <X size={30} />
                </button>

                {/* Mobile Menu Links */}
                <ul className="flex flex-col space-y-4">
                    <li>
                        <NavLink to={"/"} className="text-xl hover:text-[#331A15]" onClick={() => setIsOpen(false)}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Login"} className="text-xl hover:text-[#331A15]" onClick={() => setIsOpen(false)}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Register"} className="text-xl hover:text-[#331A15]" onClick={() => setIsOpen(false)}>Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
