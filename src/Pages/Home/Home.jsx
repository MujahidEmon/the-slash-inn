import Hero from "../../Components/Hero/Hero";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import wcImage1 from "../../assets/images/wc imgs/istockphoto-1418784247-612x612.jpg"
import wcImage2 from "../../assets/images/wc imgs/istockphoto-178842131-612x612.jpg"
import wcImage3 from "../../assets/images/wc imgs/istockphoto-472899538-612x612.jpg"
import wcImage4 from "../../assets/images/wc imgs/istockphoto-503016934-612x612.jpg"
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
                <div>
                    <div className="w-1/2 h-[500px] rounded-xl border">
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
                </div>
            </section>
        </div>
    );
};

export default Home;