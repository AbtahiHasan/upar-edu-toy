import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TapCard from './TapCard';

const SubCategoryTap = () => {
    const [activeTapData, setActiveTapData] = useState({})
    console.log(activeTapData)
    const getSubCategoriesData = (category) => {
        console.log(category)

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
       <main className='mt-[140px]'>
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
       </main>
    );
};

export default SubCategoryTap;