import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TopFoods from "../TopFoods/TopFoods";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <TopFoods/>
        </div>
    );
};

export default Home;

