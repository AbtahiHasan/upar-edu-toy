import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
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