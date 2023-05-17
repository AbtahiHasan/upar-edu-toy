import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import bgImage from '/toyBanner.jpeg'
import { useState } from 'react';
import { AiFillEyeInvisible,AiFillEye  } from "react-icons/ai";
import { useAuth } from '../context/AuthProvider';





const Login = () => {
    const [showPassword, setShowPassword] = useState(true)
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'
    const {signIn, signInWithGoogle} = useAuth()
    const [error, setError] = useState(null)

    const hendleForm = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value
        setError(null)

        if(!email || !password) {
            setError("Cannot leave any field empty")
            return
        } 
        signIn(email, password) 
        .then (() => {
            navigate(from, { replace: true })
            form.reset()
        })
        .catch(error => {
            setError(error.message)  
        })
       
        }      
        
        

        const handelGoogle = () => {
            signInWithGoogle()
                .then((result) => {

                    navigate(from)
                })
                .catch((error) => {
                    console.log(error.message)
                })
        }
        
        
        
    
    return (
            <main className='w-full'>
                <div className='absolute w-full h-[88vh]  -z-20'>
                    <img className='w-full object-cover h-full ' src={bgImage} alt="" />       
                </div>
                <section className='container flex flex-col-reverse md:flex-row items-center w-full h-[70vh] gap-5'>
                

                <section className='rounded-xl p-[25px] mt-10 ml-auto md:w-1/2'>
                <h2 className='text-3xl'>Login.</h2>
                <p className='mt-[8px] '>upar edu toy? <Link to="/register" className='text-[#1f32dd]'>Create New Account</Link></p>
                <form onSubmit={hendleForm}>
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
                    <p className='text-[#da4747]'>{error && error}</p> 
                   <div className='flex flex-col md:flex-row items-center gap-5'>
                   <button type='submit' className='bg-[#00abe4]  p-2  rounded-full text-white w-full  text-[21px] '>Login</button>         
                    
                    <button onClick={handelGoogle} className=' p-2 border border rounded-full w-full flex justify-center items-center gap-[6px] '><FcGoogle className='text-[32px]'/><span>Continue with Google</span></button>  
                   </div>

                </form>
                </section>
                
                </section>
            </main>
            
   
        
    );
};

export default Login;