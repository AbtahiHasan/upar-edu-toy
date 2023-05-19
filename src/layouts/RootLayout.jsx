import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Aos from "aos"
import { useEffect } from 'react';

const RootLayout = () => {
    useEffect(() => {
        Aos.init({
            duration: 300,
          })
    },[])
    return (
        <main>
            <Navbar/>
            <div className='min-h-[calc(100vh-136px)]'>
                <Outlet />
            </div>
            <Footer/>
        </main>
    );
};

export default RootLayout;