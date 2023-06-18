import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthProvider";
import { motion } from "framer-motion"


const TrandingToyCard = ({toy}) => {
    const {_id, name,photo_url, rating, price} = toy
    const {user} = useAuth()
    const notLoginMassage = () => {
      if(!user) {
        toast("You have to log in first to view details")
      }
  }
    return (
        <motion.article whileHover={{y: "-10px"}} className='p-5 border rounded-md relative'>         
                <figure><img className="h-52 w-full object-cover" src={photo_url} alt="toys image"/></figure>
                <div className="text-center">
                  <h2 className="text-xl my-3 font-bold ">{name}</h2>
                  <p>Price: ${price}</p>
                  <p className="mt-3 mb-16 flex items-center justify-center gap-3">
                <Rating
                     placeholderRating={rating}
                     emptySymbol={<AiOutlineStar className="text-[#ff9529]"/>}
                     placeholderSymbol={<AiFillStar className="text-[#ff9529]"/>}
                     fullSymbol={<AiFillStar className="text-[#ff9529]"/>}
                     readonly
                /> <span>{rating}</span>
                </p>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    
                        <Link onClick={notLoginMassage} to={`/toy/${_id}`}><motion.button whileHover={{scale: 1.1}} className="active px-6 rounded-md">View Details</motion.button></Link>                        
                    
                  </div>
                </div>
        </motion.article>
    );
};

export default TrandingToyCard;