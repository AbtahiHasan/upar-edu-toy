
import { Link } from 'react-router-dom';
import bgImage from '/toyBanner.jpeg'
import {  updateProfile } from 'firebase/auth';

import { useAuth } from '../context/AuthProvider';
import { useState } from 'react';
    
    


const Register = () => {
    
  
    const {createUser} = useAuth()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const hendleForm = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const profileUrl = form.profile.value;


        setError(null)
        setSuccess(null)

        if(!name || !profileUrl || !email || !password) {
            setError("Cannot leave any field empty")
            return
        } 
        
        if(password.length < 6) {
            setError("password at least 6 character")
            return
        }
       
        

        createUser(email, password) 
        .then ((result) => {
            updateProfile(result.user, {
                displayName: name,
                photoURL: profileUrl
            })
           form.reset()

           setSuccess("Registration successfull")

        }) 
        .catch(error => {
            
        })
    }





    return (
        <main className='w-full'>
                <div className='absolute w-full h-[88vh]  -z-20'>
                    <img className='w-full object-cover h-full ' src={bgImage} alt="" />       
                </div>
            
           <section className='container flex  items-center w-full h-[70vh] gap-5'>
           <section className='p-[25px] mt-20 w-full md:ml-auto md:w-1/2'>
                <h2 className='text-3xl font-bold'>Create An Account</h2>

                <p className='mt-[8px]'>Already have an account? <Link to="/login" className='text-[#1f32dd]'>Login</Link></p>     
                <form onSubmit={hendleForm}>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className='border rounded w-full p-2 text-base outline-none' autoComplete='off' placeholder='Name' />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="profile">Profile pic url</label>
                        <input type="text" name="profile" id="profile" className='border w-full rounded p-2 text-base outline-none' autoComplete='off' placeholder='Profile pic url' />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className='border w-full rounded p-2 text-base outline-none' autoComplete='off' placeholder='email' required/>
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="password" >Password</label>
                        <input type="password" name="password" id="password" className='border w-full rounded p-2 text-base outline-none' autoComplete='off' placeholder='password' />
                    </div> 
                    <p className='text-[#da4747]'>{error && error}</p>
                    <p className='text-[#399d23]'>{success && success}</p>

                    <button type='submit' className='bg-[#00abe4]  p-2  rounded-xl text-white w-full  text-[21px] '>Sign Up</button>         
                    
                    

                </form>
            </section>
           </section>

        </main>
        
    );
};

export default Register;