
const RoomCard = ({room}) => {
    const {title, description, img, bedFor, pricePerNight } = room
    return (
        <div className="card bg-base-100 min-w-xs shadow-sm">
            <figure>
                <img
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                   {title}
                    <div className="badge badge-secondary">{bedFor} BEDS</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions flex items-center justify-end">
                    <p className="font-semibold text-lg">{pricePerNight} BDT</p>
                    <button className="btn ">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;