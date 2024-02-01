import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featurdImg from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="text-white pt-8 mb-10 bg-fixed bg-cover" style={{backgroundImage: `url(${featurdImg})`}}>
            <SectionTitle heading={'featured item'} subHeading={'Check It Out'}></SectionTitle>
            <div className="md:flex justify-center items-center py-12 px-12">
                <div>
                    <img className="rounded-lg" src={featurdImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Feb 1, 2024</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum nostrum sint fuga ea iure alias harum aut expedita asperiores, amet voluptas laudantium itaque voluptatum consequuntur sit accusamus cumque qui non id perspiciatis porro voluptatem mollitia? Delectus vitae nam dolore!</p>
                     <button className="btn btn-outline border-0 border-b-2 font-bold mt-3">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;