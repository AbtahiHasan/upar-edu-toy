import { Link } from "react-router-dom";


const TobularFormToyCard = () => {
    return (
        <tr className='border-b-2 w-full text-center'>
            <td className='py-4'>Tofeal vai</td>
            <td className='py-4'>Pulu Tulu</td>
            <td className='py-4'>Shoririar</td>
            <td className='py-4'>$50</td>
            <td className='py-4'>50</td>
            <td ><Link className="active px-4 rounded-full" to={`/${"_id"}`}>View Details</Link></td>
        </tr>
    );
};

export default TobularFormToyCard;