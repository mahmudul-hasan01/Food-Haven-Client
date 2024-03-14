import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaBook, FaCar, FaDollarSign, FaOrcid, FaRobot, FaUsers } from "react-icons/fa6";
import { FaMagic } from "react-icons/fa";

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data, refetch, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })
    return (
        <div>
            <h1>Hi, Welcome </h1>
            <h1>
                {
                    user.displayName ? user.displayName : 'Back'
                }
            </h1>

            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className="inline-block w-8 h-8 stroke-current"></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{data?.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="inline-block w-8 h-8 stroke-current"></FaUsers>
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{data?.user}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaBook className="inline-block w-8 h-8 stroke-current"></FaBook>
                    </div>
                    <div className="stat-title">menu Items</div>
                    <div className="stat-value">{data?.menuItems}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaCar className="inline-block w-8 h-8 stroke-current"></FaCar>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{data?.order}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;