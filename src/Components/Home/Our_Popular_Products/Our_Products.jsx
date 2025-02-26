import React from 'react'
import { MdDelete, MdEdit, MdRemoveRedEye } from 'react-icons/md';
import { RiCupLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Our_Products = () => {
    
    return (
        <div className="bg-cover 2xl:bg-[url('https://i.ibb.co.com/j0J5JcS/1.png')] xl:bg-[url('https://i.ibb.co.com/j0J5JcS/1.png')]   lg:bg-none md:bg-none sm:bg-none">
            <div className="text-center pb-10 md:mt-[120px] mt-16 max-w-[1320px] mx-auto">
                <p className="railwayFont font-normal text-xl text-[#1B1A1A] mb-2">
                    --- Sip & Savor ---
                </p>
                <h3 className="text-[#331A15] md:text-[55px] text-4xl font-normal md:mb-4 mb-2">
                    Our Popular Products
                </h3>
                <Link
                    to="/Add_New_Coffee"
                    className="btn rounded-none mt-4 border-2 border-[#331A15] hover:text-black bg-[#E3B577] hover:bg-[#e3b477ef] text-2xl font-normal"
                >
                    <span className="text-white ">Add Coffee</span>
                    <RiCupLine className="text-chocolate" />
                </Link>

                <div className=''>
                    <div className="bg-[#F5F4F1] p-8  flex gap-3 flex-col sm:flex-row items-center rounded-md">
                        <div>
                            <img src={"https://i.ibb.co.com/bMrc8SPp/1.png"} alt="coffee" className="max-w-44" />
                        </div>
                        <div className="flex-grow text-xl font-raleway text-[#5C5B5B] space-y-2">
                            <p> <span className="font-semibold text-[#1B1A1A]">Name:</span> </p>
                            <p><span className="font-semibold text-[#1B1A1A]">Chef:</span> </p>
                            <p> <span className="font-semibold text-[#1B1A1A]">Price:</span></p>
                        </div>
                        <div className="flex gap-4 sm:flex-col">
                            <Link
                                to={"/Coffee_Details"}
                                className="bg-[#D2B48C] w-10 h-10 flex justify-center items-center text-white rounded"
                            >
                                <MdRemoveRedEye size={25} />
                            </Link>
                            <Link
                                to={"/Update_Existing_Coffee"}
                                className="bg-[#3C393B] w-10 h-10 flex justify-center items-center text-white rounded"
                            >
                                <MdEdit size={25} />
                            </Link>
                            <button

                                className="bg-[#EA4744] w-10 h-10 flex justify-center items-center text-white rounded active:scale-95 transition-all"
                            >
                                <MdDelete size={25} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Our_Products;