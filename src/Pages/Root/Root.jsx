import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

const Root = () => {
    return (
        <div className="font-ubuntu">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;