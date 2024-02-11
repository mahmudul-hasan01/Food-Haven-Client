import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import toast from 'react-hot-toast';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import GoogleLogin from "../../Components/SocialLogin/GoogleLogin";

const Register = () => {

    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { signUp, updateUserProfile } = useAuth()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {

        signUp(data?.email, data?.password)
            .then(() => {
                const userInfo = {
                    name: data?.name,
                    email: data?.email,

                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            toast.success('SignUp Successfully')
                            reset()
                            navigate('/')
                        }
                    })
            })

        // const formData = new FormData()
        // formData.append('image', data?.photoUrl)
        // console.log(formData);
        // const { data } =await axios.post(
        //     `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        //     formData
        // )

        // updateUserProfile(data.name, data.photoUrl)
        //     .then(() => { })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Food Haven || Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input type="file" {...register("photoUrl", { required: true })} placeholder="PhotoUrl" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" placeholder="Password" className="input input-bordered" />
                            {errors.password && <span>minLength 6</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="p-8 pt-0 space-y-6">
                        <GoogleLogin></GoogleLogin>
                        <p>Create new account? <Link className="underline py-5 text-center text-blue-600" to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;