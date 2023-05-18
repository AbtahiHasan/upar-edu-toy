import SubCategoryTap from "../components/SubCategoryTap";
import useTitle from "../hooks/useTitle";


const Home = () => {
    useTitle("Home")
    return (
        <main className="container">
            <SubCategoryTap/>
        </main>
    );
};

export default Home;