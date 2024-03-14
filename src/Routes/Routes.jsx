import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import UserNameToUserID from "../Pages/UserNameToUserID/UserNameToUserID";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/uname-to-uid',
                element:<UserNameToUserID></UserNameToUserID>
            }
        ]
    }
])

export default Routes;