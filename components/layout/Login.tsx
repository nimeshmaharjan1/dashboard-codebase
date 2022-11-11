import { signIn } from "next-auth/react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { login } from '../../services/login';
import styles from '../../styles/Login.module.css';
import { addAuthToLocalStorage } from '../../utils/localStorage.util';
import getConfig from 'next/config';


const { publicRuntimeConfig } = getConfig();

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const Submit = async () => {
    const [response, error] = await login(formData);
    if (!error) {
      addAuthToLocalStorage(
        response?.data.access_token,
        response?.data.refresh_token
      );
      router.push('/');
    } else {
      alert(error);
    }
  };


  // Google Handler function
  async function handleGoogleSignin(e: any) {
    e.preventDefault();
    signIn('google', { callbackUrl: publicRuntimeConfig.CALLBACK_URL })
  }

  // Facebook Login 
  async function handleFacebookSignin(e: any) {
    e.preventDefault()
    signIn('facebook', { callbackUrl: publicRuntimeConfig.CALLBACK_URL })
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-1/4 text-center text-5xl font-thin my-4 text-indigo-500">
        LOGIN
      </div>
      <input
        className="w-1/4 my-4 border-solid border-2 border-indigo-500 leading-loose tracking-wide p-2 rounded-md"
        type="text"
        placeholder="Enter your username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        className="w-1/4 my-4 border-solid border-2 border-indigo-500 leading-loose tracking-wide p-2 rounded-md"
        type="password"
        placeholder="Enter your password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button className="btn" onClick={Submit}>
        Login
      </button>
      <div>
        <button type='button' onClick={handleGoogleSignin}>
          Sign In with Google <Image src={'/assets/google.svg'} width={25} height={20} ></Image>
        </button>
      </div>
      <div>
        <button type='button' onClick={handleFacebookSignin}>
          Sign In with Facebook <Image src={'/assets/facebook.svg'} width={25} height={25} className={styles.facebookLogo}></Image>
        </button>
      </div>
    </div>
  );
};

export default Login;
