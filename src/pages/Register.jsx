
import { Link } from 'react-router-dom';
import bgImage from '/toyBanner.jpeg'



const Register = () => {
    


    return (
        <main className='w-full'>
                <div className='absolute w-full h-[88vh]  -z-20'>
                    <img className='w-full object-cover h-full ' src={bgImage} alt="" />       
                </div>
            
           <section className='container flex  items-center w-full h-[70vh] gap-5'>
           <section className='p-[25px] mt-20 w-full md:ml-auto md:w-1/2'>
                <h2 className='text-3xl font-bold'>Create An Account</h2>

                <p className='mt-[8px]'>Already have an account? <Link to="/login" className='text-[#1f32dd]'>Login</Link></p>     
                <form>
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

                    <button type='submit' className='bg-[#00abe4]  p-2  rounded-xl text-white w-full  text-[21px] '>Sign Up</button>         
                    
                    

                </form>
            </section>
           </section>

        </main>
        
    );
};

export default Register;