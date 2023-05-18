import { useState } from "react";
import TobularFormToyCard from "../components/TobularFormToyCard";

const AllToys = () => {
    const [toys, setToys] = useState(["0", "0", "0"])

    const deleteToy = () => {
        console.log("delete")
    }
    return (
        <main className="container">
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
                            toys.map(toy => <TobularFormToyCard key={toy._id} toy={toy} deleteToy={deleteToy}/>)
                        }
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default AllToys;