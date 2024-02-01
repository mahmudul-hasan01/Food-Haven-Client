import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem";

const PapularManu = () => {

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
        <div>
            <SectionTitle heading={'from our memu'} subHeading={'Check It Out'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5 my-10">
                {
                    mentData.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PapularManu;