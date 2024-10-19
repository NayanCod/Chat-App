// import React from 'react'

import axios from "axios";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
    const {authUser, setAuthUser} = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onSubmit = async(data) => {
        try {
            const userInfo = {
                email: data.email,
                password: data.password,
            };
            const res = await axios.post("/api/user/login", userInfo);
            console.log(res);
            if(res.data){
                toast.success("Successfully logged in");
            }
            localStorage.setItem("messanger", JSON.stringify(res.data));
            setAuthUser(res.data);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
        
      }
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="border border-blue-800 px-6 py-4 rounded-lg">
            <h1 className="text-3xl text-blue-800 font-semibold">Login</h1>
            <div className="mb-4">
                <h1 className="text-2xl">
                    Login with your <span className="text-blue-800 font-semibold">Account</span>
                </h1>
                <p>It's free and always will be</p>
            </div>
            <div className="space-y-4">
                {/* email */}
                <label className="border border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2 w-80">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                    >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input {...register("email", { required: true })} type="text" className="grow outline-none bg-slate-900" placeholder="Email" />
                </label>
                {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
                {/* password */}
                <label className="border border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2 w-80">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                    >
                    <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                    />
                    </svg>
                    <input {...register("password", { required: true })} type="password" className="grow outline-none bg-slate-900" placeholder="Password" />
                </label>
                {errors.password && <span className="text-red-600 text-sm">Password is required</span>}
            </div>
            <button className="text-gray-300 bg-blue-800 w-full text-center py-2 rounded-lg my-4 font-semibold hover:bg-blue-700 duration-200">Login</button>
            <p>Don't have an account? <Link to={"/signup"}><span className="text-blue-800 hover:underline cursor-pointer">Signup</span></Link></p>

        </form>
      </div>
    </>
  )
}

export default Login