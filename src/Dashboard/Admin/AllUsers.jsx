import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import toast from "react-hot-toast";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleMakeAdmin =async (id) => {
        await axiosSecure.patch(`/users/admin/${id}`)
        toast.success('Updated Successfully')
        refetch()
    }

    const handleDelete = async (id) => {
        await axiosSecure.delete(`/users/${id}`)
        toast.success('Deleted Successfully')
        refetch()
    }

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h1 className="text-3xl">All Users</h1>
                <h1 className="text-3xl">Total Users: {users.length}</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ?
                                       'Admin'
                                        :
                                        <button className="btn btn-md text-white bg-orange-500" onClick={() => handleMakeAdmin(user?._id)}><FaUsers className='text-xl' /></button>
                                    }
                                </td>
                                <td>
                                    <button className="btn btn-md text-white bg-red-500" onClick={() => handleDelete(user?._id)}><MdDeleteForever className="text-xl"/></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;