import React from 'react';
import { RiCupLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Our_Products = () => {
    return (
        <div>
            <div className="text-center pb-10 md:mt-[120px] mt-16">
                <p className="railwayFont font-normal text-xl text-[#1B1A1A] mb-2">
                    --- Sip & Savor ---
                </p>
                <h3 className="text-[#331A15] md:text-[55px] text-4xl font-normal md:mb-4 mb-2">
                    Our Popular Products
                </h3>
                <Link
                    to="/add-coffee"
                    className="btn rounded-none mt-4 border-2 border-[#331A15] hover:text-black bg-[#E3B577] hover:bg-[#e3b477ef] text-2xl font-normal"
                >
                    <span className="text-white ">Add Coffee</span>
                    <RiCupLine className="text-chocolate" />
                </Link>


            </div>
        </div>
    );
};

export default Our_Products;