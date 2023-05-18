import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddToy = () => {
   
    return (
        <main>
            <hr className="w-full my-3" />
            <form className="px-[100px] py-5" >
                <div className="text-center my-3">
                    <h2 className="text-2xl font-bold">Add New Toy</h2>
                </div>      
                          
                <div className="w-full my-5">
                    <span className="block font-bold">Image</span>
                    <input name="image" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="image url"/>
                </div>
                <div className="w-full my-5">
                    <span className="block font-bold">Image</span>
                    <input name="image" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="image url"/>
                </div>
                <div className="w-full my-5">
                    <span className="block font-bold">Image</span>
                    <input name="image" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="image url"/>
                </div>
                <div className="w-full my-5">
                    <span className="block font-bold">Image</span>
                    <input name="image" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="image url"/>
                </div>
                <div className="w-full my-5">
                    <span className="block font-bold">Image</span>
                    <input name="image" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="image url"/>
                </div>
                <div className="w-full my-5">
                    <span className="block font-bold">Image</span>
                    <input name="image" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="image url"/>
                </div>
                <div className="w-full my-5">
                    <span className="block font-bold">Image</span>
                    <input name="image" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="image url"/>
                </div>
                <div className="w-full my-5">
                    <span className="block font-bold">Image</span>
                    <input name="image" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="image url"/>
                </div>
                <div className="w-full my-5">
                    <span className="block font-bold">Image</span>
                    <input name="image" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" placeholder="image url"/>
                </div>

            
                <div >
                    <button className="px-4 block mt-10 py-3 rounded text-white w-full"  type="submit">Save</button>
                </div>
                
            </form>
        </main>
    );
};

export default AddToy;