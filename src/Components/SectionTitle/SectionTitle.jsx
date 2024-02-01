
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center w-3/12 mx-auto mt-10">
            <p className="text-yellow-500 pb-2">---{subHeading}---</p>
            <p className="text-3xl uppercase border-y-2 py-3">{heading}</p>
        </div>
    );
};

export default SectionTitle;