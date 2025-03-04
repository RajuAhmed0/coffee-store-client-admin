import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../../Firebase/firebase.config';

const Register = () => {

    const { userCreate, profileUpdate, } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        userCreate(data.email, data.password)
            .then(userInfo => {
                console.log(userInfo);

                const mongodbUser = {
                    displayName: userInfo.user.displayName,
                    email: userInfo.user.email,
                    creationTime: userInfo.user.metadata.creationTime,
                    lastSignInTime: userInfo.user.metadata.lastSignInTime
                };

                fetch("http://localhost:4000/users", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(mongodbUser),
                });
            })
            .then(() => {
                navigate(location.state ? location.state : "/login");
            })
            .catch(err => {
                if (err.code === "auth/email-already-in-use") {
                    alert("This email is already in use. Try logging in instead.");
                } else {
                    console.error("Error:", err);
                }
            });
    };







    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                navigate(location.state ? location.state : "/");
            })
            .catch(error => {
                console.log(error);

            });
    };


    return (
        <div className='mt-[38px] max-w-[1140px] mx-auto pb-28'>
            <div className="max-w-[752px] max-h-[850px] mt-11 shadow-xl flex mx-auto font-poppins rounded-md">
                <div className="bg-white rounded-[5px] p-[73px] mb-[125px] w-[752px]">
                    <h1 className="text-3xl font-semibold text-center text-[#7e3526] mb-8">Register for an Account</h1>

                    <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                            <input
                                type="text"
                                {...register("name")}
                                className="w-full railwayFont bg-[#F3F3F3] px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                {...register("email")}
                                className="w-full railwayFont bg-[#F3F3F3] px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Photo URL</label>
                            <input
                                type="photoURL"
                                {...register("photoURL")}
                                className="w-full railwayFont bg-[#F3F3F3] px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your photo URL"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Password</label>
                            <input
                                type="password"
                                {...register("password")}
                                className="w-full railwayFont bg-[#F3F3F3] px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your Password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            value="Register"
                            className="w-full bg-[#7e3526] text-xl font-semibold text-white py-3 rounded-lg hover:bg-black transition duration-200"
                        >
                            Register
                        </button>

                    </form>
                    <div className="text-center my-4">
                        <span className="text-[#7e3526]">or login with</span>
                    </div>


                    <button
                        onClick={handleGoogleLogin}
                        className="flex items-center gap-2 font-semibold border-2 py-2 w-full hover:bg-[#492923] hover:text-white justify-center "
                    >
                        <FcGoogle className="text-3xl" /> Login With Google
                    </button>

                    <div className="text-center mt-6 text-gray-600">
                        Already have an account?{" "}
                        <Link to={"/login"} className="text-[#7e3526] font-medium hover:underline">
                            Login here
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Register;