import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <div
                className="max-w-[1920px] mx-auto h-[800px] bg-[url('https://i.ibb.co.com/KphNY33r/3.png')] bg-cover"
               >
               
                <div className="pt-[288px] ml-[889px] mr-[335px]">
                    <div className="text-left">
                        <h1 className="text-white text-[55px]">
                            Would you like a Cup of Delicious Coffee?
                        </h1>
                        <p className="text-white  md:text-base text-sm railwayFont mb-8 mt-4">
                            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back! Your companion of every moment!!!
                            Enjoy the beautiful moments and make them memorable.
                        </p>
                        <button className=" px-[22px] py-[9px] bg-[#E3B577] text-[#242222] text-2xl   hover:bg-[#d19c69] transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;