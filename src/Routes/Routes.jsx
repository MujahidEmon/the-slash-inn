import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>
    }
])

export default Routes;