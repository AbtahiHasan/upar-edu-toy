import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import bgImage from '/math-banner.jpg'
import { useState } from 'react';
import { AiFillEyeInvisible,AiFillEye  } from "react-icons/ai";





const Login = () => {
    const [showPassword, setShowPassword] = useState(true)
    
    
    return (

            <section className='container flex flex-col-reverse md:flex-row items-center w-full gap-5'>
                

                <section className='rounded-xl p-[25px] mt-10 md:w-1/2'>
                <h2 className='text-3xl'>Login.</h2>
                <p className='mt-[8px] '>upar edu toy? <Link to="/register" className='text-[#1f32dd]'>Create New Account</Link></p>
                <form >
                    <div className='flex flex-col my-4'>
                        <label htmlFor="email" className='my-2 text-[17px]'>Email</label>
                        <input type="email" name="email" id="email" className='border-b-2 rounded py-2 px-4 outline-none text-base' autoComplete='off' placeholder='email' required/>
                    </div>
                    <div className='my-4'>
                        <label htmlFor="password" className='my-2 text-[17px] block'>Password</label>
                        <div className='relative w-full'>
                        <input type={showPassword ? "text" : "password"} name="password" id="password" className='border-b-2 w-full rounded py-2 px-4 outline-none text-base' autoComplete='off' placeholder='password' />
                        <span className='absolute top-3 right-3'>
                            {
                               showPassword ? <AiFillEyeInvisible className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}/> : <AiFillEye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}/>
                            }
                        </span>
                        </div>
                    </div>
                    <p className='text-[#da4747]'></p> 
                   <div className='flex flex-col md:flex-row items-center gap-5'>
                   <button type='submit' className='bg-[#00abe4]  p-2  rounded-full text-white w-full  text-[21px] '>Login</button>         
                    
                    <button className=' p-2 border rounded-full w-full flex justify-center items-center gap-[6px] '><FcGoogle className='text-[32px]'/><span>Continue with Google</span></button>  
                   </div>

                </form>
                </section>
                <div>
                <img className='w-full h-[10%] md:h-full' src={bgImage} alt="" />       
                </div>
                </section>
   
        
    );
};

export default Login;