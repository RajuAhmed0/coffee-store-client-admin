import React, { useEffect, useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Coffee_Details = () => {
 useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);


    // const coffeeInfo = useLoaderData()
    // console.log(coffeeInfo);

    return (
        <div>
            <div className="container mx-auto px-3 lg:px-6 py-16 space-y-10">
                <Link to="/" className="flex items-center gap-3 ">
                    <IoMdArrowBack className="text-2xl" />
                    <span className="text-4xl font-normal text-[#374151] ">
                        Back to home
                    </span>
                </Link>
                <div className="bg-[#F4F3F0] py-16 px-3 text-center lg:text-left lg:px-28 rounded grid grid-cols-1 md:grid-cols-2 gap-5 mx-2 ">
                    <div className="flex items-center">
                        <img
                            src={""}
                            alt="coffee"
                            className="mx-auto"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h3 className="text-4xl text-[#331A15] font-normal ">
                          Cappuccino
                        </h3>
                        <div className="font-raleway space-y-2 text-[#5C5B5B] text-xl">
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Chef:
                                </span>
                            </p>
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Supplier:
                                </span>
                            </p>
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Taste:
                                </span>
                            </p>
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Category:
                                </span>
                            </p>
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Details:
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee_Details;