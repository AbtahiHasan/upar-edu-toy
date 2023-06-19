import { useEffect, useState } from "react";
import TobularFormToyCard from "../components/TobularFormToyCard";
import { FiSearch } from "react-icons/fi";
import useTitle from "../hooks/useTitle";

const AllToys = () => {
    useTitle("All Toys")
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/toys")
        .then(res => res.json())
        .then(data => setToys(data))
    }, [])
    const search = (e) => {
        e.preventDefault()
        
        fetch(`http://localhost:3000/search?query=${e.target.search_input.value}`)
        .then(res => res.json())
        .then(data => setToys(data))
    }
    return (
        <main className="container">
            <form onSubmit={search} className="overflow-hidden relative  my-10 h-[45px] max-w-[500px] min-w-[280px] rounded-full mx-auto">
                    <input name="search_input" className="h-full rounded-full border outline-none w-full px-5" type="text" autoComplete="off" placeholder="Search...." />
                    <button className="bg-[#00abe4] w-[55px] flex justify-between items-center text-center absolute right-0 top-0 h-full px-3 text-white" type="submit"><FiSearch/></button>
            </form>
            <div className='mt-[50px] overflow-x-auto'>
                <table className='my-10 min-w-[960px] w-full mx-auto'>
                    <thead className="bg-slate-200">
                        <tr>
                            <th className='p-4'>Seller</th>
                            <th className='p-4'>Toy Name</th>
                            <th className='p-4'>Sub-category</th>
                            <th className='p-4'>Price</th>
                            <th className='p-4'>Avilable Quantity</th>
                            <th className='p-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <TobularFormToyCard key={toy._id} toy={toy} />)
                        }
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default AllToys;