import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import image from '../../assets/menu/banner3.jpg'
import image1 from '../../assets/menu/dessert-bg.jpeg'
import image2 from '../../assets/menu/pizza-bg.jpg'
import image3 from '../../assets/menu/salad-bg.jpg'
import image4 from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const [menuData] = useMenu()
    const dessert = menuData.filter(item => item.category === 'dessert')
    const soup = menuData.filter(item => item.category === 'soup')
    const salad = menuData.filter(item => item.category === 'salad')
    const pizza = menuData.filter(item => item.category === 'pizza')
    const offered = menuData.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Food Haven || Menu</title>
            </Helmet>
            <Cover img={image} title={'Our menu'}></Cover>
            <SectionTitle heading={"tody's offer"} subHeading={"Don't miss"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title={'dessert'} coverImg={image1}></MenuCategory>
            <MenuCategory items={pizza} title={'pizza'} coverImg={image2}></MenuCategory>
            <MenuCategory items={salad} title={'salad'} coverImg={image3}></MenuCategory>
            <MenuCategory items={soup} title={'soup'} coverImg={image4}></MenuCategory>
        </div>
    );
};

export default Menu;