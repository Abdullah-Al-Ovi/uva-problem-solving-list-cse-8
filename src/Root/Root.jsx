
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loading from "./Loading";


const Root = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); 
  
      return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            {
        loading ? <Loading loading={loading} />
        :
        <Outlet></Outlet>
      
      }
           
        </div>
    );
};

export default Root;