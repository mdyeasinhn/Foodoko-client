import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import axios from 'axios'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';

const Purchase = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const purchase = useLoaderData();
    const [startDate, setStartDate] = useState(new Date());
    const { FoodName, FoodImage, FoodCategory, Price, _id, MadeBy, FoodOrigin, Description, Quantity, buyer } = purchase || {}
    const handleMyOrder = async e => {
        e.preventDefault();
        if(user?.email === buyer?.email){
            return  toast.error('Action not permitted!')
        }
        const form = e.target;
        const orderId = _id;
        const foodName = FoodName;
        const email = user?.email;
        const price = parseFloat(form.price.value);
        const date = startDate;
        const comment = form.comment.value;
        const quantity = form.quantity.value;
        const status = "Pending"
        const order = {
            price,
            orderId,
            foodName,
            email,
            date,
            comment,
            quantity,
            status,
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/order`, order)
            console.log(data)
            toast.success('Order Placed Successfully!')
            // navigate('/my-order')
        } catch (err) {
            toast.err(err.message)
            e.target.reset()
        }

    }
    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
            {/* Job Details */}
            <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>


                <div>
                    <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
                        {FoodName}
                    </h1>

                    <p className='mt-2 text-lg text-gray-600 '>
                        {Description}
                    </p>
                    <p className='mt-6 text-sm font-bold text-gray-600 '>
                        Buyer Details:
                    </p>
                    <div className='flex items-center gap-5'>
                        <div>
                            <p className='mt-2 text-sm  text-gray-600 '>Name: {user?.displayName}</p>
                            <p className='mt-2 text-sm  text-gray-600 '>
                                Email: {user?.email}
                            </p>
                        </div>
                        <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
                            <img src='' alt='' />
                        </div>
                    </div>
                    <p className='mt-6 text-lg font-bold text-gray-600 '>
                        Price: $ {Price}
                    </p>
                </div>
            </div>
            {/* Place A Bid Form */}
            <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Place A Order
                </h2>

                <form onSubmit={handleMyOrder}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='quantiy'>
                                Quantity
                            </label>
                            <input
                                id='quantiy'
                                type='number'
                                name='quantity'
                                defaultValue={1}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700'>Date</label>

                            {/* Date Picker Input Field */}
                            <DatePicker className='border p-2 rounded-md w-full' disabled selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div >
                            <label className='text-gray-700 ' htmlFor='comment'>
                                Comment
                            </label>
                            <input
                                id='comment'
                                name='comment'
                                type='text'

                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='price'>
                                Price
                            </label>
                            <input
                                id='price'
                                type='text'
                                name='price'
                                defaultValue={Price}
                                disabled
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>


                    <div className='flex justify-end mt-6'>
                        <button
                            type='submit'
                            className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-orange-400'
                        >
                            Place Order
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Purchase;