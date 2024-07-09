
import { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import {AuthContext} from "../../Provider/AuthProvider"
import { Link, useLocation, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {createUser, user, setUser, updateUserProfile, } = useContext(AuthContext);
useEffect(()=>{
        if(user){
            navigate('/')
        }
},[navigate, user]);
const from = location.state  || '/'
      // SignInWithEmailPassword
    const handleSignUp = async  e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password, name, photo });

        try {
            const result = await createUser(email, password);
            console.log(result);
            await updateUserProfile(name, photo);
            setUser({...user, photoURL: photo, displayName:name})
           navigate(from, {replace: true})
            toast.success('SignUp Successfull')
        } catch (err) {
            console.log(err);
            toast.error(err?.message)
        }
    }
    return (
        <div className='md:w-3/4 lg:w-1/3 mx-auto border p-6 rounded-lg'>
            <h2 className='text-3xl font-bold mt-2'>Create an account</h2>
            <form   onSubmit={handleSignUp}>
                <div className='mt-4'>
                    <label
                        className='block mb-2 text-sm font-medium text-gray-600 '
                        htmlFor='name'
                    >
                        Username
                    </label>
                    <input
                        id='name'
                        autoComplete='name'
                        name='name'
                        required
                        className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                        type='text'
                    />
                </div>
                <div className='mt-4'>
                    <label
                        className='block mb-2 text-sm font-medium text-gray-600 '
                        htmlFor='photo'
                    >
                        Photo URL
                    </label>
                    <input
                        id='photo'
                        autoComplete='photo'
                        name='photo'
                        className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                        type='text'
                    />
                </div>
                <div className='mt-4'>
                    <label
                        className='block mb-2 text-sm font-medium text-gray-600 '
                        htmlFor='LoggingEmailAddress'
                        required
                    >
                        Email Address
                    </label>
                    <input
                        id='LoggingEmailAddress'
                        autoComplete='email'
                        name='email'
                        className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                        type='email'
                    />
                </div>

                <div className='mt-4'>
                    <div>
                        <label
                            className='block mb-2 text-sm font-medium text-gray-600 '
                            htmlFor='password'
                            required
                        >
                            Password
                        </label>
                    </div>

                    <input
                        id='loggingPassword'
                        autoComplete='current-password'
                        name='password'
                        className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                        type='password'
                    />
                </div>
                <div className='mt-6'>
                    <button
                        type='submit'
                        className='bg-[#F9A51A] w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                    >
                        Sign Up
                    </button>
                    <p className="text-center mt-4">Already have an account?<Link className="text-[#F9A51A]" to='/login'>Login</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;