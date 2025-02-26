import React from 'react';

const Instagram = () => {
    const images = [
        "https://i.ibb.co.com/g2D2tj0/Rectangle-9.png",
        "https://i.ibb.co.com/v43R369W/Rectangle-10.png",
        "https://i.ibb.co.com/4w2XnSFw/Rectangle-11.png",
        "https://i.ibb.co.com/1JrPz0yL/Rectangle-12.png",
        "https://i.ibb.co.com/B5mKck6t/Rectangle-13.png",
        "https://i.ibb.co.com/W4BdkWLT/Rectangle-14.png",
        "https://i.ibb.co.com/4RB49HKB/Rectangle-15.png",
        "https://i.ibb.co.com/cSRbZv7x/Rectangle-16.png",
    ]
    return (
        <div className='max-w-[1320px] mx-auto xl:px-0 px-3'>
            <div className="container mx-auto  md:py-28 py-12">
                <div className="text-center md:pb-12 pb-6">
                    <p className="railwayFont font-normal md:text-xl text-[#1B1A1A]">
                        Follow Us Now
                    </p>
                    <h1 className="text-[#331A15] md:text-[55px] mt-2 text-4xl font-normal text-chocolate">
                        Follow on Instagram
                    </h1>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:gap-6 gap-3 justify-items-center">
                    {images.map((src, index) => (
                        <div key={index} className="max-w-[312px]">
                            <img src={src} alt='' className=" h-full " />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instagram;