import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import TopToys from "../components/TopToys";
import SubCategoryTap from "../components/SubCategoryTap";
import useTitle from "../hooks/useTitle";


const Home = () => {
    useTitle("Home")
    return (
        <main className="">
            <Banner/>

            <section className="container">
                <TopToys/>
                <Gallery/>
                <SubCategoryTap/>
            </section>
            
        </main>
    );
};

export default Home;