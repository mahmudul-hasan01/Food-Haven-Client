import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>
            {
                title && <Cover img={coverImg} title={title}></Cover>
            }
            <div className="grid md:grid-cols-2 gap-5 my-10">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`} className="btn btn-outline mb-10 border-0 border-b-2 font-bold mt-3">Order Now</Link>
        </div>
    );
};

export default MenuCategory;