import { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import '../App.css'

//component buildup
const LoginComponent = () =>
{
    const [ data , setData ] = useState({
        email : "",
        password : ""
    });

    const [ error , setError ] = useState("");

    const handleChange = ({ currentTarget : input }) => {
        setData({ ...data , [input.name] : input.value })
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const URL = "http://localhost:5000/api/auth";
            const { data : res } = await axios.post(URL , data);
            localStorage.setItem("token" , res.data);
            window.location = "/";
        } catch (error) {
            if(
                error.response 
                && error.response.status > 400 
                && error.response.status <= 500
            )
            {
                setError(error.response.data.message);
            }
        }
    };

    //form buildup
    return(
        <main className='block m-auto sm:w-full md:w-1/2 lg:w-1/2'>
            <div className="bg-pink-600 text-white flex flex-col flex-wrap justify-center items-center gap-y-2 rounded-md mt-2">
                <h1 className='xyz'>Welcome Back</h1>
                <h3 >please sign in to continue</h3>
                <form className='flex flex-col flex-wrap justify-center items-center gap-y-2' onSubmit={handleSubmit}>
                    {error && <div className='bg-red-500 text-white p-4'> {error} </div>}
                    <input type="email" className="input_style lowercase" placeholder='EMAIL'name='email' onChange={handleChange} value={ data.email } required autoComplete='off'/>
                    <input type="password" className="input_style" placeholder='Password' name='password' onChange={handleChange} value={ data.password } required autoComplete='off'/>
                    <input type="submit" className="input_style bg-blue-700 text-white capitalize" value="Sign In" />
                </form>
                <Link to="/">
                    <p className='mb-2 italic'>Not a User?</p>
                    <input type="button" value="Sign Up" className="bg-blue-700 px-4 py-2 text-white outline-none border-2 border-blue-700 font-bold  rounded-md mb-2" />
                </Link>
            </div>
        </main>
    )
};
export default LoginComponent ;