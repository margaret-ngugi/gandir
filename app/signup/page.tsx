'use client'
import React, { useState } from "react";
import useRegister from "../hooks/useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
interface FormData {
    first_name: string;
    last_name: string;
    email: string;
    national_Id: string;
    password: string;
}
const Signup = () => {
    const {  user, error ,handleRegister} = useRegister();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        first_name: "",
        last_name: "",
        email: "",
        national_Id: "",
        password: "",
    });
    const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const togglePasswordVisibility = (field: string) => {
        if (field === "password") {
            setShowPassword(!showPassword);
        } else if (field === "confirm_password") {
        }
    };
    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
       
        await handleRegister(formData, "Registration successful.", "User with this email address already exists.");
    };

    return (
        <div className="bg-white flex w-screen h-screen font-[Sanchez]">
            <div className="p-10 flex mb-24 items-center justify-center mt-3 ml-12 bg-white w-1/2">
                <div className="text-center">
                    <div className="text-black text-5xl mb-8 ml-48">Sign up</div>
                    <div className="text-neutral-500 text-3xl ml-48 mb-12">Welcome to Gaugeguardian</div>
                    <form className="space-y-8 ml-48 " onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            value={formData.first_name}
                            onChange={handleInputChange}
                            className="w-full md:w-[520px] h-[55px] text-black text-xl font-normal font-['Sanchez'] px-4 py-2 border border-gray-300 rounded-md rounded-2xl focus:outline-none focus:border-primary"
                            required
                        />
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            className="w-full md:w-[520px] h-[55px] text-black text-xl font-normal font-['Sanchez'] px-4 py-2 border border-gray-300 rounded-md rounded-2xl focus:outline-none focus:border-primary"
                            required
                        />
                        <input
                            type="text"
                            name="national_Id"
                            placeholder="National Id"
                            value={formData.national_Id}
                            onChange={handleInputChange}
                            className="w-full md:w-[520px] h-[55px] text-black text-xl font-normal font-['Sanchez'] px-4 py-2 border border-gray-300 rounded-md rounded-2xl focus:outline-none focus:border-primary"
                            required
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full md:w-[520px] h-[55px] text-black text-xl font-normal font-['Sanchez'] px-4 py-2 border border-gray-300 rounded-md rounded-2xl focus:outline-none focus:border-primary"
                            required
                        />
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full md:w-[520px] h-[55px] text-black text-xl font-normal font-['Sanchez'] px-4 py-2 border border-gray-300 rounded-md rounded-2xl focus:outline-none focus:border-primary pr-12"
                                required
                            />
                            <span
                                className="absolute top-[13px] right-24 cursor-pointer"
                                onClick={() => togglePasswordVisibility("password")}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        <button type="submit" className="w-[516px] h-[58px] bg-orange-500 top-24 text-white py-2 ext-white text-xl font-normal font-['Sanchez'] rounded hover:bg-orange-600">
                            Create Account
                        </button>
                    </form>
                    {error && (
                        <div className="text-red-500 ml-16 mt-2 ">{error}</div>)}
                    {user && (
                        <div className="text-green-500 ml-16 mt-2">{user.message}</div>
                    )}
                    <p className=" text-black-500 ml-10 text-black text-xl mt-24 font-normal font-['Sanchez']">
                        Already have an account? <Link href="/login"><span className='text-blue-500'>Login</span></Link>
                    </p>
                </div>
            </div>
            <div className="bg-blue-500 w-[696px] h-[982px]text-white p-10 flex flex-col ml-48">
                <div className="text-left mb-4 mt-48 mr-12 text-white">
                    <h2 className="text-5xl mb-2 ml-12">Making</h2>
                    <h2 className="text-5xl mb-2 ml-12">Calibration</h2>
                    <h2 className="text-5xl mb-2 ml-12">Process Easier</h2>
                </div>
                <div className="ml-36 mb-12 text-white">
                    <p className="text-2xl mt-4 ml-4">
                        Our vision is to enable meteorologists in Kenya to provide accurate data 
                        and weather forecasts in disaster-prone areas.
                    </p>
                </div>
                <div className="w-96 h-1.5 relative bg-white ml-64 mt-12"></div>
            </div>
        </div>
    );
};
export default Signup;
