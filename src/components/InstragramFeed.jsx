import { motion } from "framer-motion"
import img1 from '/gallery/image1.png'
import img2 from '/gallery/image2.png'
import img3 from '/gallery/image3.png'
import img4 from '/gallery/image4.png'
import img5 from '/gallery/image5.png'
import img6 from '/gallery/image6.png'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const InstragramFeed = () => {
    const data = [
        
        {
            image: img2,
            bg: "#FFD3A3"
        },
       
        {
            image: img1,
            bg: "#FF55BB"
        },
        {
            image: img4,
            bg: "#B6EAFA"
        },
        {
            image: img3,
            bg: "#FCFFB2"
        },
        {
            image: img5,
            bg: "#19A7CE"
        },
        {
            image: img6,
            bg: "#F45050"
        },
        {
            image: img3,
            bg: "#FCFFB2"
        },
        {
            image: img4,
            bg: "#B6EAFA"
        },
        {
            image: img5,
            bg: "#19A7CE"
        },
    ]
    return (
        <section className="mt-[140px] border-t-4  border-[#00abe4] p-5 relative">
              <h2 className='whitespace-nowrap text-center font-bold text-2xl mb-10 absolute -top-5 transform left-1/2 -translate-x-1/2'><span className='bg-[#00abe4] text-white py-3 px-2'>INSTAGRAM</span><span className='border-2 bg-white border-[#00abe4] text-[#00abe4] py-3 px-2'>FEED</span></h2>
              <Swiper 
                            slidesPerView={3}
                            spaceBetween={0}
                            pagination={{
                              clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mt-10"
                          >
                {
                    data.map((img, i )=> {
                        return (
                            
                            <SwiperSlide  key={i}  >
                                <motion.div whileHover={{background: "#000000"}} style={{background: img.bg}} className={`w-full rounded h-[200px] flex justify-center items-center`}>

                                <img className="h-[150px] mx-auto" src={img.image} alt="" />
                                </motion.div>
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
        
        </section>
    );
};

export default InstragramFeed;