import React from 'react';

const Buttom_Banner = () => {
    return (
        <div className='bg-[#ECEAE3] md:py-14 py-10'>
            <div className="container mx-auto px-3 md:px-6">
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-[39px] xl:gap-5 gap-6 '>
                    <div className="text-center sm:text-left px-8 sm:px-0">
                        <div className="md:mb-4 ">
                            <img
                                src={"https://i.ibb.co.com/jkkdR4VY/1.png"}
                                alt="icon"
                                className="mx-auto sm:mx-0"
                            />
                        </div>
                        <h3 className="font-normal text-[#331A15] text-[35px] md:mb-2 ">
                            Awesome Aroma
                        </h3>
                        <p className="railwayFont font-normal text-[#1B1A1A] leading-[26px]">
                            You will definitely be a fan of the design & aroma of your coffee
                        </p>
                    </div>

                    <div className="text-center sm:text-left px-8 sm:px-0">
                        <div className="mb-4">
                            <img
                                src={"https://i.ibb.co.com/nqC9FSLG/2.png"}
                                alt="icon"
                                className="mx-auto sm:mx-0"
                            />
                        </div>
                        <h3 className="font-normal text-[#331A15] text-[35px] mb-2">
                            High Quality
                        </h3>
                        <p className="railwayFont font-normal text-[#1B1A1A] leading-[26px]">
                            We served the coffee to you maintaining the best quality
                        </p>
                    </div>

                    <div className="text-center sm:text-left px-8 sm:px-0">
                        <div className="mb-4">
                            <img
                                src={"https://i.ibb.co.com/gMtvdLrN/3.png"}
                                alt="icon"
                                className="mx-auto sm:mx-0"
                            />
                        </div>
                        <h3 className="font-normal text-[#331A15] text-[35px] mb-2">
                            Pure Grades
                        </h3>
                        <p className="railwayFont font-normal text-[#1B1A1A] leading-[26px]">
                            The coffee is made of the green coffee beans which you will love
                        </p>
                    </div>

                    <div className="text-center sm:text-left px-8 sm:px-0">
                        <div className="mb-4">
                            <img
                                src={"https://i.ibb.co.com/8nkgwhvP/4.png"}
                                alt="icon"
                                className="mx-auto sm:mx-0"
                            />
                        </div>
                        <h3 className="font-normal text-[#331A15] text-[35px] mb-2">
                            Proper Roasting
                        </h3>
                        <p className="railwayFont font-normal text-[#1B1A1A] leading-[26px]">
                            Your coffee is brewed by first roasting the green coffee beans
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buttom_Banner;