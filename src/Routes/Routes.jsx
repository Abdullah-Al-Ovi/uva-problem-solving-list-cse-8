import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import SubmissionList from "../Pages/SubmissionList/SubmissionList";
import RankPage from "../Pages/Rank/Rank";
import Features from "../Pages/Features/Features";

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
                path:'/submission-list',
                element:<SubmissionList></SubmissionList>
            },
            {
                path:'/rank',
                element:<RankPage></RankPage>
            },
            {
                path:'/features',
                element:<Features></Features>
            }
        ]
    }
])

export default Routes;