import { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'

//component buildup
const SignupComponent = () =>
{
    const [ data , setData ] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : ""
    });

    const [ error , setError ] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget : input }) => {
        setData({ ...data , [input.name] : input.value })
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const URL = "http://localhost:5000/api/user";
            const { data : res } = await axios.post(URL , data);
            navigate("/login");
            console.log(res.message);
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
            <p className='font-bold text-2xl text-center'>User Auth System</p>
            <div className="bg-pink-600 text-white flex flex-col flex-wrap justify-center items-center gap-y-2 rounded-md">
                <h1 className='xyz'>Welcome Back</h1>
                <h3 >please sign up to continue</h3>
                <form className='flex flex-col flex-wrap justify-center items-center gap-y-2' onSubmit={handleSubmit}>
                    {error && <div className='bg-red-500 text-white p-4'> {error} </div>}
                    <input type="text" className="input_style" placeholder='FirstName'name='firstName' onChange={handleChange} value={ data.firstName } required autoComplete='off'/>
                    <input type="text" className="input_style" placeholder='Last Name' name='lastName' onChange={handleChange} value={ data.lastName } required autoComplete='off'/>
                    <input type="email" className="input_style lowercase" placeholder='EMAIL'name='email' onChange={handleChange} value={ data.email } required autoComplete='off'/>
                    <input type="password" className="input_style lowercase" placeholder='Password' name='password' onChange={handleChange} value={ data.password } required autoComplete='off'/>
                    <input type="submit" className="input_style bg-blue-700 text-white capitalize" value="Sign Up" />
                </form>
                <Link to="/login">
                    <p className='mb-2 italic'>Already a User?</p>
                    <input type="button" value="Sign In" className="bg-blue-700 px-4 py-2 text-white outline-none border-2 border-blue-700 font-bold  rounded-md mb-2" />
                </Link>
            </div>
        </main>
    )
}
export default SignupComponent ;