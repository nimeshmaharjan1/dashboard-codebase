import { useRouter } from 'next/router';
import { useState } from 'react';
import { login } from '../../services/login';
import { addAuthToLocalStorage } from '../../utils/localStorage.util';

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
    console.log(formData);
    const [response, error] = await login(formData);
    console.log(response, error);
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
    </div>
  );
};

export default Login;
