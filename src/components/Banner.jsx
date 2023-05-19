import banner from "/banner.png"
import img from "/gallery/image5.png"

const Banner = () => {
    return (
        <div className="relative">
            <div>
                <img className="w-full object-cover h-[80vh] md:h-auto" src={banner} alt="" />
            </div>

           <section className="absolute top-[15%] md:top-[26%] container left-0 right-0 flex justify-between flex-col md:flex-row">
                <div className="">
                 <h1 className="text-4xl text-white font-bold">Ultimate Educational Toy</h1>
                <h3 className="mt-4 text-2xl font-bold">Discover the Ultimate Educational Toys </h3>
                <button className="text-black px-6 py-2 mt-4 bg-white rounded-full">Explore</button>
                </div>
                <div>
                 <img className="w-full -mt-28" src={img} alt="" />
                </div>
           </section>
           
        </div>
    );
};

export default Banner;