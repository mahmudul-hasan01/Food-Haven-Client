import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PapularManu from "./PapularManu";
import Testimonials from "./Testimonials";

const Home = () => {

    
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PapularManu></PapularManu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;