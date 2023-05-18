import { useParams } from "react-router-dom";

const ToyDetails = () => {
    const {id} = useParams()
    return (
        <main className="container grid md:grid-cols-2 gap-5 h-[60vh]">
            <section className="w-full">
                <img className="w-full h-full" src="https://demo.ashrayinfotech.com/OPC004/OPC004L03/image/cache/catalog/productsimage/1-370x370.jpg" alt="" />
            </section>
            <section>
                <h2 className="text-xl font-bold">Toy Name</h2>
                <p>Seller name</p>
                <p>seller email</p>
                <p>price</p>
                <p>rating</p>
                <p>quantity</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod laudantium reiciendis quae repellendus dolorum iure repudiandae accusamus rem fuga dolores! Rerum, deserunt cumque necessitatibus minus expedita odit at reprehenderit ratione?</p>
            </section>
        </main>
    );
};

export default ToyDetails;