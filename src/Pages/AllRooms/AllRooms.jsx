
import RoomCard from "../../Components/RoomCard/RoomCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllRooms = () => {
    const axiosSecure = useAxiosSecure();

    const {
        data: rooms = [],
        refetch,
        isLoading,
        isError,
        error
    } = useQuery({
        queryFn: () => getData(),
        queryKey: ['rooms']
    })

    // console.log(rooms);

    const getData = async () => {
        const { data } = await axiosSecure('rooms')
        return data;
    }

    if (isError) {
        console.log(error);
        return;
    }
    return (
        <div className="lg:max-w-7xl mx-auto mt-18 md:max-w-md max-w-xs">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                {
                    rooms.map((room, index) => <RoomCard key={index} room={room}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default AllRooms;