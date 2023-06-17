

const Subscribe = () => {
    return (
        <section style={{background: "url('/subscribe.jpg')", backgroundSize: "cover"}} className="mt-[140px] border-t-4  border-[#00abe4] p-5 relative">
              <h2 className='text-center font-bold text-4xl mb-10 absolute -top-5 transform left-1/2 -translate-x-1/2'><span className='bg-[#00abe4] text-white py-3 px-2'>Subscribe To</span><span className='border-2 bg-white border-[#00abe4] text-[#00abe4] py-3 px-2'>Newsletter</span></h2>
             <p className="text-base text-center mt-10">Sign up for newsletter</p>

                <form className="h-[50px] max-w-[500px] mx-auto grid grid-cols-10 mt-10 border-[#242424] border">
                    <input className="h-full w-full px-5 outline-none col-span-7" type="email" placeholder="Your Email Address"/>
                    <button className="h-full bg-[#242424] text-white p-2 col-span-3 w-full">Submit</button>
                </form>
            
        </section>
    );
};

export default Subscribe;