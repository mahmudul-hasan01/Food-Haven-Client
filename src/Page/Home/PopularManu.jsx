import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem";

const PopularManu = () => {

    const [mentData, setMemuData] = useState([])
    console.log(mentData, 'menu')

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const item = data.filter(items => items?.category === 'popular')
                setMemuData(item)
            })
    }, [])

    return (
        <div className="mb-10">
            <SectionTitle heading={'from our memu'} subHeading={'Check It Out'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5 my-10">
                {
                    mentData.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-2 font-bold mt-3 flex justify-center items-center">View Full Menu</button>
        </div>
    );
};

export default PopularManu;