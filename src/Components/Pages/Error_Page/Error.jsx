import React, { useEffect } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Nav from '../../Common/Navbar/Nav';
import Footer from '../../Common/Footer/Footer';

const Error = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);
    return (
        <div>
            <Nav></Nav>
            <div>
                <Link to="/" className="flex items-center justify-center gap-3 mt-16" >
                    <IoMdArrowBack className="text-2xl" />
                    <span className="text-[30px] font-normal text-[#374151]">
                        Back to home
                    </span>
                </Link>
                <div>
                    <img src="https://i.ibb.co.com/DfzLrX70/404.gif" alt="" className=" mx-auto" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;