import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "../Home/TopFoods/FoodCard";
import {Helmet} from 'react-helmet-async'

const AllFood = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/items`);
      setItems(data);
    }
    getData();
  }, [])
  return (
    <div>
      <Helmet>
                <title>Foodoko | My Foods</title>
            </Helmet>
      <div>
        <div className="text-center mt-4">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">All Foods</h1>
        </div>
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 '>
          {
            items.map(item => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AllFood