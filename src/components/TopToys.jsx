import { useEffect, useState } from "react";
import TopToysCard from "./TopToysCard";



const TopToys = () => {

    const [latestToys, setLatestToys] = useState([])

    useEffect(() => {
        fetch("https://upar-edu-toy.vercel.app/top-toys")
        .then(res => res.json())
        .then(data => setLatestToys(data))
    }, [])
    return (
        <main className="mt-[140px] border-t-4 border-[#00abe4] p-5 relative">
            <h2 className='whitespace-nowrap text-center font-bold text-2xl mb-10 absolute -top-5 transform left-1/2 -translate-x-1/2'><span className='bg-[#00abe4] text-white py-3 px-2'>Top Rated</span><span className='border-2 bg-white border-[#00abe4] text-[#00abe4] py-3 px-2'>Toys</span></h2>
            <section className="grid md:grid-cols-3 gap-5 mt-10">
                {
                    latestToys.map(toy => <TopToysCard key={toy._id} toy={toy}/>)
                }
            </section>
        </main>
    );
};

export default TopToys;