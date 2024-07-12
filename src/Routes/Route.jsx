import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import FoodDetails from "../Pages/Home/TopFoods/FoodDetails";
import PrivateRoute from "./Private";
import Purchase from "../Pages/Home/TopFoods/Purchase";
import AddFood from "../Pages/AddFood/AddFood";
import MyFood from "../Pages/MyFood/MyFood";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import MyOrder from "../Pages/MyOrder/MyOrder";
import AllFood from "../Pages/AllFood/AllFood";
import Gallary from "../Pages/Gallary/Gallary";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children : [
        {
            index: true,
            element : <Home/>,
          
        },
        {
            path: '/all-foods',
            element : <AllFood/>,
          
        },
        {
            path: '/gallary',
            element : <PrivateRoute><Gallary/></PrivateRoute>,
          
        },
        {
            path: '/login',
            element : <Login/>
        },
        {
            path: '/signup',
            element : <SignUp/>
        },
        {
            path: '/food/:id',
            element : <FoodDetails/>,
            loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/item/${params.id}`)
        },
        {
            path: '/purchase/:id',
            element : <PrivateRoute><Purchase/></PrivateRoute>,
            loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/item/${params.id}`)
        },
        {
            path: '/update/:id',
            element : <PrivateRoute><UpdateFood/></PrivateRoute>,
            loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/update/${params.id}`)
        },
        {
            path : "/add-food",
            element : <PrivateRoute><AddFood/></PrivateRoute>
        },
        {
            path : "/my-orders",
            element : <PrivateRoute><MyOrder/></PrivateRoute>
        },
        {
            path : "/my-food",
            element : <PrivateRoute><MyFood/></PrivateRoute>
        }

      ]
    },
  ]);

  export default router;