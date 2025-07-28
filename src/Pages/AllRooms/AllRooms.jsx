import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllRooms = () => {
    const axiosSecure = useAxiosSecure();


    const getData = async () => {
        const {data} = await axiosSecure('rooms')
        console.log(data);
    } 
    getData()
    return (
        <div>
            <h1>All Rooms</h1>
        </div>
    );
};

export default AllRooms;