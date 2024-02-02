import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularManu = () => {

    const [menuData,loading] = useMenu()
    const popular = menuData.filter(item => item.category === 'popular')

    

    return (
        <div className="mb-10">
            <SectionTitle heading={'from our memu'} subHeading={'Check It Out'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5 my-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-2 font-bold mt-3 flex justify-center items-center">View Full Menu</button>
        </div>
    );
};

export default PopularManu;