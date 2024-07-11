import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleAddFood = async e => {
        e.preventDefault();
        const form = e.target;
        const FoodName = form.name.value;
        const buyer = user?.email;
        const Price = parseFloat(form.price.value);
        const FoodImage = form.photo.value;
        const FoodCategory = form.category.value;
        const Description = form.description.value;
        const quantity = form.quantity.value;
        const MadeBy = form.madeBy.value;
        const FoodOrigin = form.foodOrigin.value;

        const foodData = {
            FoodName,
            FoodImage,
            FoodCategory,
            Price,
            buyer,
            quantity,
            Description,
            MadeBy,
            FoodOrigin
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/food`, foodData)
            console.log(data)
            toast.success('Food Added Successfully!')
            navigate('/my-food')
        } catch (err) {
            toast.error(err.message)
            e.target.reset()
        }

    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Post a Food
                </h2>

                <form onSubmit={handleAddFood}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='Food_Name'>
                                Food Name
                            </label>
                            <input
                                id='Food_Name'
                                name='name'
                                type='text'
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='photo'>
                                Food Image URL
                            </label>
                            <input
                                id='emailAddress'
                                type='text'
                                name='photo'
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='quantiy'>
                                Quantity
                            </label>
                            <input
                                id='quantiy'
                                type='number'
                                name='quantity'
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 ' htmlFor='category'>
                                Category
                            </label>
                            <input
                                id='category'
                                type='text'
                                name='category'
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Made By
                            </label>
                            <input
                                id='madeBy'
                                type='madeBy'
                                name='madeBy'
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Food Origin
                            </label>
                            <input
                                id='foodOrigin'
                                type='foodOrigin'
                                name='foodOrigin'
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='email'
                                disabled
                                defaultValue={user?.email}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='price'>
                                Price
                            </label>
                            <input
                                id='price'
                                name='price'
                                type='number'
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='description'>
                            Description
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='description'
                            id='description'
                            required
                        ></textarea>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default AddFood;