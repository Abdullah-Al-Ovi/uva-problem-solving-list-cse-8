import { Link } from "react-router-dom";
import Feature from "./Feature";


const Features = () => {
    return (
        <div className="bg-gray-100 flex my-7 md:my-0 flex-col md:flex-row justify-center items-center gap-11 h-[100vh]">
            <Feature 
            url={'/submission-list'}
            title={'Submission List'}
            description={'Check your UVA submissions based on a specific problem number.'}
            ></Feature>
            <Feature 
            url={'/rank'}
            title={'CSE-8 Intra Batch Contest'}
            description={'Check the ranking and submission statistics of intra batch contest of BU CSE-8 '}
            ></Feature>
        </div>
    );
};

export default Features;