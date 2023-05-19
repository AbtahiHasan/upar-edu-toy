import image1 from "/children/image-1.jpg"
import image2 from "/children/image-2.jpg"
import image3 from "/children/image-3.jpg"
import image4 from "/children/image-4.jpg"
import image5 from "/children/image-5.jpg"

const AgeBy = () => {
    const childrens = [
        {
            image: image1,
            name: "0-2 years"
        },
        {
            image: image2,
            name: "3-4 years"
        },
        {
            image: image3,
            name: "5-7 years"
        },
        {
            image: image4,
            name: "8-10 years"
        },
        {
            image: image5,
            name: "10+ years"
        }
    ]

    
    return (
        <main className="mt-[140px] border-t-4 border-[#00abe4] p-5 relative">
                <h2 className='text-center font-bold text-4xl mb-10 absolute -top-5 transform left-1/2 -translate-x-1/2'><span className='bg-[#00abe4] text-white py-3 px-2'>By</span><span className='border-2 bg-white border-[#00abe4] text-[#00abe4] py-3 px-2'>Age</span></h2>
                <section className="grid grid-cols-5 gap-3 mt-10">
                    {
                        childrens.map((children, i) => {
                            return (
                                <article data-aos="fade-up" className="p-5 rounded border" key={i}>
                                    <img className="h-[200px] rounded" src={children.image} alt="child image" />
                                    <h2 className="text-xl font-bold text-center mt-5">{children.name}</h2>
                                </article>
                            )
                        })
                    }
                </section>
        </main>
    );
};

export default AgeBy;