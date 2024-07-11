import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { user, signIn, signInWithGoogle, loading } = useContext(AuthContext);
    // useEffect(() => {
    //     if (user) {
    //         navigate('/')
    //     }
    // }, [navigate, user]);
    const from = location.state || '/'
    const handleLogin = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        try {
            const result = await signIn(email, password);
            console.log(result);
            navigate(from, { replace: true })
            toast.success("SignIn successful")
        } catch (err) {
            console.log(err);

            toast.error(err?.message)
        }
    }
    const hanldeGoogleLogin = async () => {
        try {
            await signInWithGoogle()
            navigate(from, { replace: true });
            toast.success("SignIn successful")
        } catch (err) {
            console.log(err);
            toast.error(err?.message)
        }

    }
    if (loading) return <span className="loading loading-dots loading-xs"></span>
    if (user) {
        return <Navigate to='/' ></Navigate>

    }
    return (
        <div className="md:w-3/4 lg:w-1/3 mx-auto  border p-6 rounded-lg">
            <h2 className="text-2xl font-bold">Login</h2>
            <form onSubmit={handleLogin}>
                <div className='mt-4'>
                    <label
                        className='block mb-2 text-sm font-medium text-gray-600 '
                        htmlFor='LoggingEmailAddress'
                    >
                        Email Address
                    </label>
                    <input
                        id='LoggingEmailAddress'
                        autoComplete='email'
                        name='email'
                        className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                        type='email'
                        required
                    />
                </div>

                <div className='mt-4'>
                    <div className='flex justify-between'>
                        <label
                            className='block mb-2 text-sm font-medium text-gray-600 '
                            htmlFor='loggingPassword'
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
                        className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#F9A51A] rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                    >
                        Sign In
                    </button>
                    <p className="text-center mt-4">Don’t have an account?<Link className="text-[#F9A51A]" to='/signup'> Create an account</Link> </p>
                </div>
                <div className="divider"> Or </div>
                <div className="mt-4">
                    <button onClick={hanldeGoogleLogin} className='w-full px-4 py-3 font-bold text-center btn'>
                        Sign in with Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;