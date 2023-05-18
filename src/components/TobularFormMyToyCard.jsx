import { Link } from "react-router-dom";
import { MdOutlineModeEditOutline, MdClose } from "react-icons/md";




const TobularFormMyToyCard = ({toy, deleteToy}) => {
    const {_id, name, seller_name, sub_category, price, quantity} = toy
    return (
        <tr className='border-b-2 w-full text-center'>
            <td className='py-4'>{seller_name}</td>
            <td className='py-4'>{name}</td>
            <td className='py-4'>{sub_category}</td>
            <td className='py-4'>{price}</td>
            <td className='py-4'>{quantity}</td>
            <td ><Link to={`/edit-toy/${_id}/edit`}><span className='p-3 rounded inline-block mx-2 bg-[#00abe4] text-white'  ><MdOutlineModeEditOutline/></span></Link><span className='p-3 rounded inline-block mx-2 bg-[#00abe4] text-white'  ><MdClose onClick={() => deleteToy(_id)} className='cursor-pointer'/></span></td>
        </tr>
    );
};

export default TobularFormMyToyCard;