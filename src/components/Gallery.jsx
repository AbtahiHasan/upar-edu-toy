import img1 from '/gallery/image1.png'
import img2 from '/gallery/image2.png'
import img3 from '/gallery/image3.png'
import img4 from '/gallery/image4.png'
import img5 from '/gallery/image5.png'
import img6 from '/gallery/image6.png'

const Gallery = () => {
    const data = [
        {
            image: img1,
            bg: "#FF55BB"
        },
        {
            image: img2,
            bg: "#FFD3A3"
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
        {
            image: img6,
            bg: "#F45050"
        }
    ]
    return (
        <main className='mt-[140px] border-t-4 border-[#00abe4] p-5 relative'>
            <h2 className='text-center font-bold text-4xl mb-10 absolute -top-5 transform left-1/2 -translate-x-1/2'><span className='bg-[#00abe4] text-white py-3 px-2'>Toys</span><span className='border-2 bg-white border-[#00abe4] text-[#00abe4] py-3 px-2'>Gallery</span></h2>
            <section className='grid md:grid-cols-3 gap-5 mt-10'>
                {
                    data.map((img, i )=> {
                        return (
                            <article data-aos="fade-up" key={i} style={{background: img.bg}} className={`w-full rounded h-[400px] flex justify-center items-center`}>
                            
                                <img className="h-[300px]" src={img.image} alt="" />
                            </article>
                        )
                    })
                }
            </section>
        </main>
    );
};

export default Gallery;