import React, { useEffect, useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Coffee_Details = () => {
 useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);


    const coffeeInfo = useLoaderData()
    console.log(coffeeInfo);

    return (
        <div>
            <div className="container mx-auto px-3 lg:px-6 py-16 space-y-10">
                <Link to="/" className="flex items-center gap-3 ">
                    <IoMdArrowBack className="text-2xl" />
                    <span className="text-4xl font-normal text-[#374151] ">
                        Back to home
                    </span>
                </Link>
                <div className="bg-[#F4F3F0] py-16 px-3  lg:text-left lg:px-28 rounded grid grid-cols-1 md:grid-cols-2 gap-5 mx-2 ">
                    <div className="flex items-center">
                        <img
                            src={coffeeInfo.photo}
                            alt="coffee"
                            className="mx-auto xl:w-[351px] "
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h3 className="text-4xl text-[#331A15] font-normal ">
                          {coffeeInfo.name}
                        </h3>
                        <div className="railwayFont space-y-2 text-[#5C5B5B] 2xl:text-xl xl:text-lg">
                            <p>
                                <span className="font-semibold railwayFont text-[#5C5B5B]">
                                    Chef: {coffeeInfo.chef}
                                </span>
                            </p>
                            <p>
                                <span className="font-semibold railwayFont text-[#5C5B5B]">
                                    Supplier: {coffeeInfo.supplier}
                                </span>
                            </p>
                            <p>
                                <span className="font-semibold railwayFont text-[#5C5B5B]">
                                    Taste: {coffeeInfo.taste}
                                </span>
                            </p>
                            <p>
                                <span className="font-semibold railwayFont text-[#5C5B5B]">
                                    Category: {coffeeInfo.category}
                                </span>
                            </p>
                            <p>
                                <span className="font-semibold railwayFont text-[#5C5B5B]">
                                    Details: {coffeeInfo.details}
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