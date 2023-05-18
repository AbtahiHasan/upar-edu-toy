import Swal from "sweetalert2";
import { useAuth } from "../context/AuthProvider";

const AddToy = () => {

    const {user} = useAuth()
   
    return (
        <main>
            <hr className="w-full my-3" />
            <form className="px-[100px] py-5" >
            <div className="text-center my-3">
                        <h2 className="text-2xl font-bold">Add New Toy</h2>
                    </div>      

                <section className="md:grid md:grid-cols-2 gap-3 w-full">
                    
                    <div className="w-full my-2">
                        <span className="block font-bold">Toy Image</span>
                        <input name="toy_image" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="Toy image url"/>
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Name</span>
                        <input name="name" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="toy Name"/>
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Seller name</span>
                        <input name="seller_name" value={user?.displayName && user?.displayName} type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" disabled />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Seller Email</span>
                        <input name="email" type="text" value={user?.email && user?.email} className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" disabled />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Sub-Category</span>
                        <input name="sub_category" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="Sub Category"/>
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Price</span>
                        <input name="price" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="Price"/>
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Rating</span>
                        <input name="rating" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="Rating"/>
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Avillable Quantity</span>
                        <input name="quantity" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="Avillable Quantity"/>
                    </div>
                    <div className="w-full my-2 md:col-span-2">
                        <span className="block font-bold">Detail Description</span>
                        <textarea name="description"  className="w-full h-[200px] resize-none px-4 py-3 outline-0 mt-3 rounded border" placeholder="Description"> </textarea>
                    </div>

                </section>
            
                <div >
                    <button className="px-4 bg-[#00abe4] block mt-10 py-3 rounded text-white w-full"  type="submit">Add Toy</button>
                </div>
                
            </form>
        </main>
    );
};

export default AddToy;