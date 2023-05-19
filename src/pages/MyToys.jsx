import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import TobularFormMyToyCard from "../components/TobularFormMyToyCard";

const MyToys = () => {
    const [deleteOk, setDeleteOk] = useState(0)
    const [toys, setToys] = useState([])
    const {user} = useAuth()


    const url = `https://upar-edu-toy.vercel.app/seller?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url, deleteOk]);
    const deleteToy = (id) => {
        const isConfirmDelete = confirm("Are you suru you went to Delete")

        if(isConfirmDelete) {
            fetch(`https://upar-edu-toy.vercel.app/delete/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then((data) =>  {
            console.log(data)
            if(data.deletedCount > 0) {
                setDeleteOk(deleteOk + 1)
            }
        })
        }
        
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
                            toys.map(toy => <TobularFormMyToyCard key={toy._id} toy={toy} deleteToy={deleteToy} setToys={setToys}/>)
                        }
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default MyToys;