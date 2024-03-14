
import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner/Banner";

const Root = () => {
    return (
        <div>
            
           <Outlet></Outlet>
        </div>
    );
};

export default Root;