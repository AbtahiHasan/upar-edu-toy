import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-toastify";
import {motion} from "framer-motion"

const TopToysCard = ({toy}) => {
    const {_id, name,photo_url, rating, price} = toy
    const {user} = useAuth
    const notLoginMassage = () => {
      if(!user) {
        toast("You have to log in first to view details")
      }
  }

    return (
      <Link  onClick={notLoginMassage} to={`/toy/${_id}`}>
        <article  data-aos="fade-up" className=" overflow-hidden   p-5 border rounded-md h-[250px] w-full">         
         <div className="before:content-[''] w-full h-full relative before:absolute before:bg-[#000000b7] before:top-0 before:right-0 before:left-0 before:bottom-0">
            <motion.img whileHover={{scale: 1.1}} className="w-full h-full  object-cover" src={photo_url} alt="" />
        </div>
            <div className="absolute top-1/2 transform p-3 -translate-y-1/2 z-10 text-white">
                  <div className="relative w-full h-full"> <h2 className="text-lg font-bold">{name}</h2>
                  <p>Price: ${price}</p>
                  <p className="my-6 flex items-center gap-3">
                <Rating
                     placeholderRating={rating}
                     emptySymbol={<AiOutlineStar className="text-[#ff9529]"/>}
                     placeholderSymbol={<AiFillStar className="text-[#ff9529]"/>}
                     fullSymbol={<AiFillStar className="text-[#ff9529]"/>}
                     readonly
                /> <span>{rating}</span>
                </p>
                
     

                      


                      </div>
                </div>

          </article>
          </Link> 
    );
};

export default TopToysCard;