import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import UserNameToUserID from "../Pages/UserNameToUserID/UserNameToUserID";
import SubmissionList from "../Pages/SubmissionList/SubmissionList";

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
            },
            {
                path:'/submission-list',
                element:<SubmissionList></SubmissionList>
            }
        ]
    }
])

export default Routes;