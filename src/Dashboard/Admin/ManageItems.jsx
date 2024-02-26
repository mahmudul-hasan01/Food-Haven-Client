import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menuData, loading, refetch] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleDelete = async (id) => {
        const res = await axiosSecure.delete(`/menu/${id}`)
        if (res.data.deletedCount > 0) {
            toast.success('Deleted Successfully')
        }
        refetch()
    }
    // const handlUpdate = () => {

    // }

    return (
        <div>
            <SectionTitle subHeading={'Hurry Up'} heading={'Manage Itmes'}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menuData.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item?.name}
                                    </td>
                                    <td>{item?.price}</td>
                                    <td>
                                        <Link to={`/dashboard/UpdateItem/:${item?._id}`}>
                                            <button className="btn btn-md text-white bg-orange-500" ><FaEdit className='text-xl' /></button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-md text-white bg-red-500" onClick={() => handleDelete(item?._id)}><MdDeleteForever className="text-xl" /></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;