import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";


const AddItems = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
    }
    return (
        <div>
            <SectionTitle subHeading={'What"s New'} heading={'Add an item'}></SectionTitle>
            <div>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input {...register("name")} type="text" placeholder="Name" className="input input-bordered w-full " />

                    </label>

                    <div className="flex gap-5">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select {...register("category")} defaultValue={'default'} className="select select-bordered w-full ">
                                <option disabled value={'default'}>Select a category</option>
                                <option value="Salad">Salad</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Soup">Soup</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Drinks">Drinks</option>
                            </select>

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input {...register("price")} type="number" placeholder="Price" className="input input-bordered w-full" />

                        </label>

                    </div>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea {...register("recipe")} className="textarea textarea-bordered w-full" placeholder="Recipe"></textarea>

                    </label>

                    <input {...register("image")} type="file" className="file-input block w-full max-w-xs" />
                    <button className="btn btn-outline">
                        Add Item <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;