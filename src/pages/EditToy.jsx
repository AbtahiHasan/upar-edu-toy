import Swal from "sweetalert2";
import { useAuth } from "../context/AuthProvider";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditToy = () => {    
    const {user} = useAuth()
    const {id} = useParams()
    const [toy, setToy] = useState({})
    const {photo_url, name, seller_name, seller_email, rating, sub_category, price, quantity, description} = toy
    const getToy = async () => {
        const res = await fetch(`https://upar-edu-toy.vercel.app/toy/${id}`)
        const data = await res.json()
        setToy(data)
    }

    useEffect(() => {
        getToy()
    }, [id])

    const updateToy = (e) => {
        e.preventDefault()
        const form = e.target 
           const photo_url = form.toy_image.value
           const name = form.name.value
           const seller_name = form.seller_name.value
           const seller_email = form.email.value
           const sub_category = form.sub_category.value
           const price = form.price.value
           const rating = form.rating.value
           const quantity = form.quantity.value
           const description =form.description.value

        const toy = {
            photo_url,
            name,
            seller_name,
            seller_email,
            sub_category,
            price,
            rating,
            quantity,
            description
          }

        fetch(`http://localhost:3000/update/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json()) 
        .then(data => {
            if(data.modifiedCount > 0) {
                Swal.fire({
                    title: '',
                    text: "Data Updated Successfully!",
                    icon: 'success',
                    confirmButtonColor: '#00abe4',
                    confirmButtonText: 'ok'
                  })
                
            }
        })
    }
   
    return (
        <main>
            <hr className="w-full my-3" />
            <form onSubmit={updateToy} className="px-[100px] py-5" >
            <div className="text-center my-3">
                        <h2 className="text-2xl font-bold">Update Toy</h2>
                    </div>      

                <section className="md:grid md:grid-cols-2 gap-3 w-full">
                    
                    <div className="w-full my-2">
                        <span className="block font-bold">Toy Image</span>
                        <input name="toy_image" defaultValue={photo_url} type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="Toy image url"/>
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Name</span>
                        <input name="name" type="text"  defaultValue={name} className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="toy Name"/>
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Seller name</span>
                        <input name="seller_name" value={user?.displayName && user?.displayName} type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" disabled />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Seller Email</span>
                        <input name="email" type="text" value={user?.email && user?.email} className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" disabled />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Sub-Category</span>
                        <input name="sub_category" type="text" defaultValue={sub_category} className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="Sub Category"/>
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Price</span>
                        <input name="price" type="text" defaultValue={price} className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="Price"/>
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Rating</span>
                        <input name="rating" type="text" defaultValue={rating} className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="Rating"/>
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Avillable Quantity</span>
                        <input name="quantity" type="text" defaultValue={quantity} className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="Avillable Quantity"/>
                    </div>
                    <div className="w-full my-2 md:col-span-2">
                        <span className="block font-bold">Detail Description</span>
                        <textarea name="description" defaultValue={description}  className="w-full h-[200px] resize-none px-4 py-3 outline-0 mt-3 rounded border" placeholder="Description"></textarea>
                    </div>

                </section>
            
                <div >
                    <button className="px-4 bg-[#00abe4] block mt-10 py-3 rounded text-white w-full"  type="submit">Update Toy</button>
                </div>
                
            </form>
        </main>
    );
};

export default EditToy;