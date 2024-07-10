import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import axios from "axios"

const TopFoods = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/items`);
            setItems(data)
        }
        getData();
    }, [])

    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Top Foods</h1>
                <h2 className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>Foodoko is just the place to unwind, relax,  and enjoy great and tasty Indian dishes. Indian Classics and Exotics</h2>
            </div>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    items.map(item => (
                        <FoodCard key={item._id} item={item}></FoodCard>
                    ))
                }
            </div>
        </div>
    );
};

export default TopFoods;