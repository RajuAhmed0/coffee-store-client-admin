import React from 'react';

const Banner = () => {
    return (
        <div
            className="hero 2xl:h-[800px] xl:h-[600px] lg:h-[500px] md:h-[400px]  md:py-0 py-14  text-center sm:text-left"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/KphNY33r/3.png)",
            }}
        >
            <div className="container mx-auto px-3 md:px-6 grid grid-cols-1 md:grid-cols-2 text-white">
                <div className="hidden md:block select-none"></div>
                <div className="px-4 md:px-0">
                    <h1 className="mb-5 2xl:text-[55px] xl:text-5xl md:text-4xl text-3xl  font-bold">
                        Would you like a Cup of Delicious Coffee?
                    </h1>
                    <p className="md:leading-[30px] mb-5 railwayFont font-normal md:text-base text-sm">
                        It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                    </p>
                    <button className=" bg-[#E3B577] px-[22px] py-[9px] font-normal text-2xl text-[#242222] hover:bg-transparent hover:border-2 hover:text-white">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;