import React from 'react';

const FoodCard = ({ item }) => {
    
    const { FoodName, FoodImage, FoodCategory, Price } = item || {}
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={FoodImage}
                        alt="Foods" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{FoodName}</h2>
                    <p>{FoodCategory}</p>
                    <div className="card-actions justify-end">
                        <p className='mt-2'>$ {Price}</p>
                        <button className="btn bg-[#F9A51A]"> Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;