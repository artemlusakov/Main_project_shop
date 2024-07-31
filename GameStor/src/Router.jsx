import {createBrowserRouter} from "react-router-dom";
import Home from "./Components/Page/Home/Home.jsx";
import * as React from "react";
import AllProfiles from "./Components/Page/Profile/AllProfiles.jsx";
import NotFound from "./Components/Page/NotFound/NotFound.jsx";
import Profile from "./Components/Page/Profile/Profile.jsx";
import Test from "./Components/Page/Test/Test.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        // element: <Test/>,
        errorElement:<NotFound/>,
    },
    {
        path: "/Home",
        element: <Home/>,
        errorElement:<NotFound/>,
    },
    {
        path: "/Profile",
        element:<AllProfiles/>
    },
    {
        path: '/Profile/:profileId',
        element:<Profile/>
    }
]);

export default router