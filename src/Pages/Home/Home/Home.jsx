import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TopFoods from "../TopFoods/TopFoods";
import {Helmet} from 'react-helmet-async'

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Foodoko | Home</title>
            </Helmet>
            <Banner></Banner>
            <TopFoods/>
        </div>
    );
};

export default Home;

