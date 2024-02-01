import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularManu from "./PopularManu";
import Testimonials from "./Testimonials";

const Home = () => {

    
    return (
        <div>
            <Helmet>
                <title>Food Haven || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularManu></PopularManu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;