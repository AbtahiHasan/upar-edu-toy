import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TapCard from './TapCard';


const SubCategoryTap = () => {
    const [activeTapData, setActiveTapData] = useState({})
    
    const getSubCategoriesData = (category) => {
        fetch(`https://upar-edu-toy.vercel.app/sub-category?category=${category}`)
        .then(res => res.json())
        .then(data => setActiveTapData(data))
    }

    useEffect(() => {
        fetch("https://upar-edu-toy.vercel.app/sub-category?category=math learning toy")
        .then(res => res.json())
        .then(data => setActiveTapData(data))
    },[])
    
    return (
       <main className='mt-[140px] border-t-4 border-[#00abe4] p-5 relative'>
        <h2 className='text-center font-bold text-4xl mb-10 absolute -top-5 transform left-1/2 -translate-x-1/2'><span className='bg-[#00abe4] text-white py-3 px-2'>Toy</span><span className='border-2 bg-white border-[#00abe4] text-[#00abe4] py-3 px-2'>Categories</span></h2>
             <section className='mt-10'>
             <Tabs>
                <TabList>
                  <Tab onClick={() => getSubCategoriesData("math learning toy")}>math learning toy</Tab>
                  <Tab onClick={() => getSubCategoriesData("engineering kits")}>engineering kits</Tab>
                  <Tab onClick={() => getSubCategoriesData("science kits")}>science kits</Tab>
                </TabList>

                <TabPanel>
                    <section className='grid md:grid-cols-2 gap-5'>
                        {
                            activeTapData.category_name === "math learning toy" && activeTapData.subCategories.map(subCategory => <TapCard key={subCategory._id} subCategory={subCategory} />)
                        }
                    </section>
                </TabPanel>
                <TabPanel>
                    <section className='grid md:grid-cols-2 gap-5'>
                            {
                                activeTapData.category_name === "engineering kits" && activeTapData.subCategories.map(subCategory => <TapCard key={subCategory._id} subCategory={subCategory} />)
                            }
                    </section>
                </TabPanel>
                <TabPanel >
                    <section className="grid md:grid-cols-2 gap-5">
                        {
                            activeTapData.category_name === "science kits" && activeTapData.subCategories.map(subCategory => <TapCard key={subCategory._id} subCategory={subCategory} />)
                        }
                    </section>
                </TabPanel> 
            </Tabs>
             </section>
       </main>
    );
};

export default SubCategoryTap;