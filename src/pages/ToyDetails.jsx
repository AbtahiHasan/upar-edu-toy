import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ToyDetails = () => {
    const {id} = useParams()
    return (
        <main className="container grid md:grid-cols-2 gap-5 h-[60vh] mt-[140px] md:mt-auto">
            <section className="w-full p-3 md:p-20">
                <img className="w-full h-full" src="https://demo.ashrayinfotech.com/OPC004/OPC004L03/image/cache/catalog/productsimage/1-370x370.jpg" alt="" />
            </section>
            <section className="flex flex-col justify-center">
                <h2 className="text-xl font-bold">Toy Name</h2>
                <p className="my-3"><span className="font-bold">Seller name: </span>Shorira</p>
                <p className="my-3"><span className="font-bold">Seller Email: </span> main@gmai.com</p>
                <p className="my-3"><span className="font-bold">Price: </span> $50</p>
                <p className="my-3">
                <Rating
                     placeholderRating={3.5}
                     emptySymbol={ <AiOutlineStar className="text-[#ff9529]"/>}
                     placeholderSymbol={<AiFillStar className="text-[#ff9529]"/>}
                     fullSymbol={<AiFillStar className="text-[#ff9529]"/>}
                /> <span>4.8</span>
                </p>

                <p className="my-3"><span className="font-bold">Quantity:</span> 10</p>
                <p className="my-3"><span className="font-bold">Description:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod laudantium reiciendis quae repellendus dolorum iure repudiandae accusamus rem fuga dolores! Rerum, deserunt cumque necessitatibus minus expedita odit at reprehenderit ratione?</p>
            </section>
        </main>
    );
};

export default ToyDetails;