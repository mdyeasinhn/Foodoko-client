import { Link } from 'react-router-dom';
import errorPic from '../../assets/img/errorpage.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ErrorPage = () => {
    return (
        
        <div className='bg-[#faf9f5] text-center pb-10'>
            <Navbar/>
            <div className=' flex justify-center'>
                <img className='mt-15 mb-10' src={errorPic} alt="" />
            </div>
            <div className='  text-center'>
                <h1 className='text-3xl font-semibold mb-5 '> Page  Not Found</h1>
            </div>
            <div className='mt-4 '>
                <Link to='/'><button className='btn bg-[#ea6a12] px-10'>GO TO HOME</button></Link>
            </div>
            <Footer/>
        </div>
    );
};

export default ErrorPage;