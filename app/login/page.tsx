'use client'
import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login= () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);
const { loginMessage, handleSignin } = useLogin({ email, password });

const handleLogin = async () => {
  handleSignin();
};

const handleTogglePassword = (field: string) => {
  if (field === "password") {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  } else if (field === "showPassword") {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }
}

 return (
    <div className="bg-white flex w-screen h-screen">
      <div className="p-10 flex mb-24 items-center justify-center mt-3 ml-12 bg-white w-1/2">
        <div className="text-center">
          <div className="text-black text-5xl mb-8 ml-48 font-normal font-['Sanchez']">Login</div>
          <div className="text-neutral-500 text-3xl ml-48 font-normal mb-12 font-['Abel']">Welcome to Gaugeguardian</div>
          <form action="#" method="POST" className="space-y-8 ml-48 "  >
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
              className="w-full md:w-[520px] h-[55px] text-black text-xl font-normal  font-['Sanchez'] px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:border-primary"
             
              required
             
            />

            <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full md:w-[520px] h-[55px] text-black text-xl font-normal  font-['Sanchez'] px-4 py-2 border border-gray-300 rounded-md rounded-2xl focus:outline-none focus:border-primary pr-12"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
             <span
              className="absolute top-[13px] right-12 cursor-pointer"
              onClick={() => handleTogglePassword("password")}
            >
              {showPassword ?  <FaEye />:<FaEyeSlash />  }
            </span>

            </div>

            <div>
             {loginMessage === 'Login successful' ? (
              <span className="text-green-600">Login successful</span>
              ) : (
              <span className="text-red-600">{loginMessage}</span>
              )}
            </div>

            <button 
            onClick={handleLogin}
            type="button"
            className="w-[516px] h-[58px] bg-orange-500 bottom-12 text-white py-2 ext-white text-xl font-normal font-['Sanchez'] rounded hover:bg-orange-600">
             Login
            </button>
       
         
          </form>
          <p className={" text-black-500  ml-10 text-black text-xl mt-24 font-normal font-['Sanchez']"}>
            Dont have an account? <a href="/signup" className={'text-blue-500'} > Signup </a>
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
              Our vision is to enable meteorologists in Kenya to provide accurate data disaster
              and weather forecasts in disaster-prone areas.
            </p>
          </div>
          
          <div className="w-96 h-1.5 relative bg-white ml-64 mt-12"></div>
          </div>
        </div>
        );
      };
 export default Login;



