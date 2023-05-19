import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useEffect, useState } from "react";

const ToyDetails = () => {
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
    },[id])
    return (
        <main className="container grid md:grid-cols-2 gap-5 h-[60vh] mt-[140px] md:mt-auto">
            <section className="w-full p-3 md:p-20">
                <img className="w-full h-full" src={photo_url} alt="" />
            </section>
            <section className="flex flex-col justify-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="my-3"><span className="font-bold">Seller name: </span>{seller_name}</p>
                <p className="my-3"><span className="font-bold">Seller Email: </span> {seller_email}</p>
                <p className="my-3"><span className="font-bold">Price: </span> ${price}</p>
                <p className="my-3"><span className="font-bold">Sub Category: </span> {sub_category}</p>
                <p className="my-3">
                <Rating
                     placeholderRating={rating}
                     emptySymbol={<AiOutlineStar className="text-[#ff9529]"/>}
                     placeholderSymbol={<AiFillStar className="text-[#ff9529]"/>}
                     fullSymbol={<AiFillStar className="text-[#ff9529]"/>}
                     readonly
                /> <span>{rating}</span>
                </p>

                <p className="my-3"><span className="font-bold">Quantity:</span> {quantity}</p>
                <p className="my-3"><span className="font-bold">Description:</span> {description}</p>
            </section>
        </main>
    );
};

export default ToyDetails;