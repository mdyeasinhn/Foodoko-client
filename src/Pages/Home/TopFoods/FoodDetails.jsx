import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import img from '../../../assets/img/img1.jpg'
const FoodDetails = () => {
    const item = useLoaderData();
    const { FoodName, FoodImage, FoodCategory, Price, _id, MadeBy, FoodOrigin, Description } = item || {}
    return (
        <div className='flex items-center gap-8 mt-10'>
            <div>
                <img
                    src={img}
                    className="w-[600px] rounded-lg " />
            </div>
            < div>
                <div>
                    <h1 className="text-5xl font-bold">{FoodName}</h1>
                    <p className='mt-4'>Food Category:{FoodCategory}</p>
                    <p className="py-6">
                        {Description}
                    </p>
                </div>
                <div className='flex justify-between mt-4'>
                    <h2>Food Origin:{FoodOrigin}</h2>
                    <h2>Made By: {MadeBy}</h2>
                </div>
                <div className='flex justify-between mt-6'>
                    <h2 className='mt-3'>Price : ${Price}</h2>
                    <Link to={`/purchase/${_id}`} className="btn "> Purchase</Link>
                </div>
            </div>












        </div>
    );
};

export default FoodDetails;