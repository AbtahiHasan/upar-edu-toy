import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-toastify";


const TobularFormToyCard = ({toy}) => {
    const {_id, name, seller_name, sub_category, price, quantity} = toy
    const {user} = useAuth()
    const notLoginMassage = () => {
        console.log(user)
        if(!user) {
          toast("You have to log in first to view details")
        }
    }
    return (
        <tr className='border-b-2 w-full text-center'>
            <td className='py-4'>{seller_name}</td>
            <td className='py-4'>{name}</td>
            <td className='py-4'>{sub_category}</td>
            <td className='py-4'>{price}</td>
            <td className='py-4'>{quantity}</td>
            <td ><Link onClick={notLoginMassage} className="active px-4 rounded-full" to={`/toy/${_id}`}>View Details</Link></td>
        </tr>
    );
};

export default TobularFormToyCard;