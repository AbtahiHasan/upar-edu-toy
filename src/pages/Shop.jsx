import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-toastify";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";


const Shop = () => {
    const [toys, setToys] = useState([])
    const {user} = useAuth()
    const {refetch} = useCart()
    useEffect(() => {
        fetch("https://upar-edu-toy.vercel.app/toys")
        .then(res => res.json())
        .then(data => setToys(data))
    },[])

    const notLoginMassage = () => {
        if(!user) {
          toast("You have to log in first to view details")
        }
    }
  
    const handleCart = (toy) => {
      notLoginMassage()
      const cart = {
          toy_id: toy._id,
          photo_url: toy.photo_url,
          name: toy.name,
          price: toy.price,
          quantity: toy.quantity,
          email: user?.email
      }
      if(user?.email) {
          fetch(`https://upar-edu-toy.vercel.app/add-to-carts`, {
              method: "POST",
              headers: {
                  "content-type": "application/json"
              },
              body: JSON.stringify(cart)
            })
              .then(res => res.json()) 
              .then(data => {
                  if(data.insertedId) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Cart added',
                        showConfirmButton: false,
                        timer: 700
                      })
                      
                  }
              })
          
      }
    }
    return (
        <main className="grid grid-cols-3 gap-5 container mt-[140px]">
            {
                    toys.map(toy => <ToyCard key={toy._id} handleCart={handleCart} toy={toy}/>)
            }
        </main>
    );
};

export default Shop;