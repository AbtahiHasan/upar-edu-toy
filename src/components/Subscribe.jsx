

const Subscribe = () => {
    return (
        <section style={{background: "url('/subscribe.jpg')", backgroundSize: "cover"}} className="mt-[140px] border-t-4 py-20 px-5 relative">
              <h2 className='whitespace-nowrap text-center font-bold text-2xl md:text-4xl mb-10'>Subscribe To newsletter</h2>
             <p className="text-base text-center mt-10">Sign up for newsletter</p>

                <form className="h-[50px] max-w-[500px] mx-auto grid grid-cols-10 mt-10 border-[#242424] border">
                    <input className="h-full w-full px-5 outline-none col-span-7" type="email" placeholder="Your Email Address"/>
                    <button className="h-full bg-[#242424] text-white p-2 col-span-3 w-full">Submit</button>
                </form>
            
        </section>
    );
};

export default Subscribe;