import { Link } from "react-router-dom";

const Slide = ({image, text}) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-white lg:text-4xl w-[600px]'>
                       {text}
                    </h1>
                    <br />
                    <Link to='/all-foods' className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-orange-400 rounded-md lg:w-auto hover:bg-orange-3j00 focus:outline-none focus:bg-orange-200'>
                        All Foods
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Slide;