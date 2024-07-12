import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ item }) => {

    const { FoodName, FoodImage, FoodCategory, Price, _id } = item || {}
    return (
        <div>
           
            <div className="card bg-base-100 w-96 shadow-xl ">
                <figure>
                    <img className='w-full h-[300px]'
                        src={FoodImage}
                        alt="Foods" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{FoodName}</h2>
                    <p>Category: {FoodCategory}</p>
                    <div className="card-actions justify-end">
                        <p className='mt-2'>Price: $ {Price}</p>
                        <Link to={`/food/${_id}`} className="btn bg-[#F9A51A]"> Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;