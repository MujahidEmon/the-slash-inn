import Hero from "../../Components/Hero/Hero";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import wcImage1 from "../../assets/images/wc imgs/istockphoto-1418784247-612x612.jpg"
import wcImage2 from "../../assets/images/wc imgs/istockphoto-178842131-612x612.jpg"
import wcImage3 from "../../assets/images/wc imgs/istockphoto-472899538-612x612.jpg"
import wcImage4 from "../../assets/images/wc imgs/istockphoto-503016934-612x612.jpg"
import RoomCard from "../../Components/RoomCard/RoomCard";
import RatingCard from "../../Components/RatingCard/RatingCard";
import Newsletter from "../../Components/Newsletter/Newsletter";
const Home = () => {
    return (
        <div>
            <Hero></Hero>

            {/* Welcome Section */}
            <div className="lg:max-w-7xl mx-auto mt-18 md:max-w-md max-w-xs flex md:flex-row flex-col gap-8">
                {/* Image Div */}
                <div className="grid grid-cols-2 gap-4 w-1/2">
                    <img src={wcImage1} alt="" />
                    <img src={wcImage2} alt="" />
                    <img src={wcImage3} alt="" />
                    <img src={wcImage4} alt="" />
                </div>
                {/* Text Div */}
                <div className="w-1/2">
                    <h1 className="font-semibold text-3xl">Welcome To The Slash Inn</h1>

                    <div className="text-justify text-base text-gray-700 ">
                        <p className="mt-4">Welcome to The Slash Inn, your perfect escape nestled in the heart of comfort and elegance. We are a modern, family-friendly hotel committed to offering a warm and memorable stay to travelers from around the world. Whether you're visiting for business, a weekend getaway, or a romantic retreat, The Slash Inn offers the ideal blend of luxury and tranquility.</p>

                        <p className="mt-4">Our goal is to create an experience that feels like home – with all the perks of a premium hotel. From cozy rooms and personalized service to top-notch amenities and a peaceful atmosphere, everything is designed to ensure your stay is relaxing and unforgettable.</p>

                        <p className="mt-4">Located in a prime area, The Slash Inn gives you easy access to nearby attractions, dining, and entertainment. Whether you're planning to explore the local culture or simply unwind, our team is dedicated to making your visit smooth and stress-free.</p>

                        <p className="mt-4">At The Slash Inn, your comfort is our priority. Let us take care of the details – so you can enjoy every moment of your stay.</p>
                    </div>
                </div>

            </div>

            {/* Location And Map section */}
            <section className="lg:max-w-7xl mx-auto mt-18 md:max-w-md max-w-xs">
                <h1 className="text-4xl text-center font-semibold ">Our Location</h1>
                <div className="md:flex-row flex-col flex justify-between gap-8">
                    <div className="w-1/2 h-[500px] rounded-xl mt-8">
                        <MapContainer className="h-full w-full rounded-xl" center={[24.4026, 89.5644]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[24.4026, 89.5644]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-4">Visit Our Location</h2>
                        <p className="text-gray-600 mb-4">
                            We are located in the heart of Enayetpur, offering scenic views and peaceful surroundings.
                        </p>
                        <div className="mb-3">
                            <p className="font-semibold">📍 Address:</p>
                            <p>Kazipur Road, Enayetpur, Sirajganj</p>
                            <p>Bangladesh - 6751</p>
                        </div>
                        <div className="mb-3">
                            <p className="font-semibold">📞 Contact:</p>
                            <p>+880 1700 000000</p>
                            <p>contact@slashhotel.com</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold">Nearby:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700">
                                <li>Enayetpur Darbar Sharif (2 min walk)</li>
                                <li>Local Bazaar (5 min drive)</li>
                                <li>Bus Stand (200m away)</li>
                            </ul>
                        </div>
                        <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 w-fit">Get Directions</button>
                    </div>
                </div>
            </section>

            {/* Feature Rooms */}
            <div className="lg:max-w-7xl mx-auto mt-18 md:max-w-md max-w-xs">
                <h1 className="text-center text-4xl font-semibold">The Slash Inn Exclusive</h1>
                <div className="flex md:flex-row flex-col gap-5 mt-12">
                    <RoomCard></RoomCard>
                    <RoomCard></RoomCard>
                    <RoomCard></RoomCard>
                </div>
            </div>


            {/* Reviews Section */}
            <div className="lg:max-w-7xl mx-auto mt-18 md:max-w-md max-w-xs">
                <h1 className="text-center text-4xl font-semibold">Our Ratings and Reviews</h1>
                <div className="flex md:flex-row flex-col justify-between gap-5 mt-12">
                    <RatingCard></RatingCard>
                    <RatingCard></RatingCard>
                    <RatingCard></RatingCard>
                    <RatingCard></RatingCard>
                </div>
            </div>


            {/* Newsletter Section */}
            <div className="lg:max-w-7xl mx-auto mt-18 md:max-w-md max-w-xs">
                <Newsletter></Newsletter>
            </div>
            
        </div>
    );
};

export default Home;