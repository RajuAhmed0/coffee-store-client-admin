import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(userInfo => {
                console.log(userInfo);
                navigate(location.state ? location.state : "/")
            })
            .catch(err => {
                console.error(err);
            });
    };




    return (
        <div>
            <div className='mt-[38px] max-w-[1140px] mx-auto pb-28'>
                <div className="max-w-[752px] max-h-[750px] mt-11 shadow-xl flex mx-auto font-poppins rounded-md">
                    <div className="bg-white rounded-[5px] p-[73px] mb-[125px] w-[752px]">
                        <h1 className="text-[35px] font-semibold text-center text-[#7e3526]">Login your account</h1>
                        <div className='border my-[50px]'></div>
                        <form className='p-[21px]' onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                
                                <label className="block text-gray-700 font-medium mb-2">Email </label>
                                <input type="email" {...register("email")} className="w-full railwayFont bg-[#F3F3F3] px-[20px] py-[20.5px]" placeholder="Enter your email address" required />
                            </div>
                            <div className="mb-4">
                               
                                <label className="block text-gray-700 font-medium mb-2">Password </label>
                                <input type="password"  {...register("password")} className="w-full railwayFont bg-[#F3F3F3] px-[20px] py-[20.5px]" placeholder="Enter your password" required />
                            </div>
                            <button
                                type="submit" to='/'
                                className="w-full bg-[#7e3526] text-xl font-semibold text-white py-4 rounded-lg hover:bg-gray-800 transition"
                            >
                                Login
                            </button>
                        </form>

                        <div className="text-center my-4">
                            <span className="text-[#7e3526]">or login with</span>
                        </div>


                        <button

                            className="flex items-center gap-2 font-semibold border-2 py-2 w-full hover:bg-[#7e3526] hover:text-white justify-center "
                        >
                            <FcGoogle className="text-3xl" /> Login With Google
                        </button>

                        <p className="text-center mt-6 text-gray-600">
                            Don’t Have An Account?{" "}
                            <Link  to="/register" className="text-[#7e3526] font-medium hover:underline">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;