
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";


const TapCard = ({subCategory}) => {
    const {_id, photo_url, name, price, rating} = subCategory
    return (
        <article className='grid grid-cols-3 gap-3 p-5 border rounded-md '>         
                <figure><img className="h-52" src={photo_url} alt="toys image"/></figure>
                <div className="col-span-2 relative">
                  <h2 className="text-xl font-bold">{name}</h2>
                  <p>Price: {price}</p>
                  <p className="my-3 flex items-center gap-3">
                <Rating
                     placeholderRating={rating}
                     emptySymbol={<AiOutlineStar className="text-[#ff9529]"/>}
                     placeholderSymbol={<AiFillStar className="text-[#ff9529]"/>}
                     fullSymbol={<AiFillStar className="text-[#ff9529]"/>}
                     readonly
                /> <span>4.8</span>
                </p>
                  <div className="absolute bottom-2 left-0">
                    
                        <Link to={`/toy/${_id}`}><button className="active px-6 rounded-md">View Details</button></Link>                        
                    
                  </div>
                </div>
        </article>
    );
};

export default TapCard;