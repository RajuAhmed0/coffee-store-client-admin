import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className="w-full 2xl:h-[120px] xl:h-[100px] lg:h-[80px] md:h-[60px] h-[40px] bg-[url('https://i.ibb.co.com/B2VDkX69/15.jpg')] bg-cover bg-center">
                <div className="flex items-center gap-4 justify-center h-full ">
                    <img className="xl:w-[75px] lg: md:w-[50px] w-[30px]" src="https://i.ibb.co.com/5xvvj0Qc/logo1.png" alt="Logo" />
                    <Link to={"/"} ><h1 className="lg:text-[60px] md:text-[40px] text-[25px] text-white font-bold">Espresso Emporium</h1></Link>
                </div>
            </div>
        </div>

    );
};

export default Nav;