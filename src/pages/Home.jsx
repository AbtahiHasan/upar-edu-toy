import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import TopToys from "../components/TopToys";
import SubCategoryTap from "../components/SubCategoryTap";
import useTitle from "../hooks/useTitle";
import AgeBy from "../components/AgeBy";
import Subscribe from "../components/Subscribe";
import InstragramFeed from "../components/InstragramFeed";
import Count from "../components/CountUp";


const Home = () => {
    useTitle("Home")
    return (
        <main className="">
            <Banner/>

            <section className="container">
                <AgeBy/>
                <TopToys/>
                <Gallery/>
                <Count/>
                <SubCategoryTap/>
                <InstragramFeed/>
                <Subscribe/>
            </section>
            
        </main>
    );
};

export default Home;