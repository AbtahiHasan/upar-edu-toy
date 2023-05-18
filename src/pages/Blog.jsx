import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle("blog")
    return (
        <main>
            <div className='container'>
                <h1 className='text-3xl font-bold text-center my-5'>Question's <span className='text-[#B2A4FF]'>Answer....</span></h1>
                <div className='grid md:grid-cols-2 gap-4 mt-10 mb-20'>
                    <div className='p-3 border-2 rounded-md w-full h-[100%] border-[#00abe4]'>
                        <h1 className='text-xl py-3'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                        <p> </p>
                    </div>
                    <div className='p-3 border-2 rounded-md border-[#00abe4]'>
                        <h1 className='text-xl py-3'>Compare SQL and NoSQL databases?</h1>
                        <p></p>
                    </div>
                    <div className='p-3 border-2 rounded-md border-[#00abe4]'>
                        <h1 className='text-xl py-3'>What is express js? What is Nest JS ?</h1>
                        <p></p>
                    </div>
                    <div className='p-3 border-2 rounded-md border-[#00abe4]'>
                        <h1 className='text-xl py-3'>What is MongoDB aggregate and how does it work ?</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Blog;