import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import TobularFormMyToyCard from "../components/TobularFormMyToyCard";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";
import Select from 'react-select'

const MyToys = () => {
    useTitle("My Toys")
    const [deleteOk, setDeleteOk] = useState(0)
    const [toys, setToys] = useState([])
    const {user} = useAuth()
    const [selectedOption, setSelectedOption] = useState("descending");



    useEffect(() => {
        fetch(`https://upar-edu-toy.vercel.app/seller?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [deleteOk]);
    const deleteToy = (id) => {
        const isConfirmDelete = confirm("Are you suru you went to Delete")

        if(isConfirmDelete) {
            fetch(`https://upar-edu-toy.vercel.app/delete/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then((data) =>  {
            if(data.deletedCount > 0) {
                setDeleteOk(deleteOk + 1)
                Swal.fire({
                    title: '',
                    text: "delete Successfully!",
                    icon: 'success',
                    confirmButtonColor: '#00abe4',
                    confirmButtonText: 'ok'
                  })
            }
        })
        }
        
    }

    const options = [
        { value: 'ascending', label: 'Ascending' },
        { value: 'descending', label: 'Descending' },
      ]
    


    useEffect(() => {
        fetch(`https://upar-edu-toy.vercel.app/sort?sortby=${selectedOption.value}&email=${user.email}`)
        .then(res => res.json())
        .then(data => setToys(data))
    },[selectedOption])


    return (
        <main className="container">
             <section className="ml-auto mt-10 min-w-[200px] md:w-1/3">
                <Select defaultValue={selectedOption}
                onChange={setSelectedOption} options={options}/>
             </section>
            <div className='overflow-x-auto'>
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