import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {RouterProvider,} from "react-router-dom";
import './index.css'

import './18n.js'
import router from './Router.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);