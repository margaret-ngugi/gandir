'use client'

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import cookie from 'cookiejs';


interface LoginData {
  email: string;
  password: string;
}

const useLogin = (initialLoginData: LoginData) => {
  const router = useRouter();
  const [user, setUser] = useState({ token: '' });
  const [loginMessage, setLoginMessage] = useState('');


  const handleSignin = async () => {
    try {
      const response = await axios.post('/api/login-users', {
        email: initialLoginData.email,
        password: initialLoginData.password,
      });


      if (response.data.token) {
        cookie.set('loginToken', response.data.token);
        setUser(response.data);
  
        setLoginMessage('Login successful');


        setTimeout(() => {
          setLoginMessage('');
          router.push('/home');
        }, 3000);
      } else {
        setLoginMessage('Invalid credentials');


        setTimeout(() => {
          setLoginMessage('');
        }, 3000);
      }
    } catch (error) {
      console.error("Invalid credentials:", error);
      setLoginMessage('Invalid credentials');


      setTimeout(() => {
        setLoginMessage('');
      }, 3000);
    }
  };


  return { user, handleSignin, loginMessage };
};


export default useLogin;