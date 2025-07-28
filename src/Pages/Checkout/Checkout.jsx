import { useState } from "react";
import { Helmet } from "react-helmet";

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        checkIn: "",
        checkOut: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("✅ Booking Confirmed!");
    };

    const nights = formData.checkIn && formData.checkOut
        ? Math.max(
            (new Date(formData.checkOut) - new Date(formData.checkIn)) /
            (1000 * 60 * 60 * 24),
            0
        )
        : 0;

    const pricePerNight = 130;
    const totalCost = nights * pricePerNight;

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#01ffe1] to-[#e7efff] flex items-center justify-center px-4 py-10">
            <Helmet>
                <title>The Slash INN - Checkout</title>
                <meta name="description" content="Confirm Your Bookings" />
            </Helmet>
            <div className="w-full max-w-7xl backdrop-blur-3xl border-2 border-amber-100 rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Left: Booking Info */}
                <div className="bg-amber-50-700 text-black  p-8 flex flex-col justify-between">
                    <div className="space-y-10">
                        <h2 className="text-2xl font-bold mb-4">Room Details</h2>
                        <p><span className="">Type:</span> Executive King Room</p>
                        <p><span className="">Rate:</span> ${pricePerNight}/night</p>
                        <p><span className="">Guests:</span> 2 Adults</p>
                        <p><span className="">Check-in:</span> {formData.checkIn || "--"}</p>
                        <p><span className="">Check-out:</span> {formData.checkOut || "--"}</p>
                        <p><span className="">Nights:</span> {nights || "--"}</p>
                    </div>
                    <div className="mt-6 text-xl font-semibold border-t border-white/30 pt-4">
                        Total Cost: ${totalCost || 0}
                    </div>
                </div>

                {/* Right: Guest & Payment Form */}
                <form
                    onSubmit={handleSubmit}
                    className="p-8 space-y-5 text-gray-800 "
                >
                    <h2 className="text-xl font-bold text-gray-700 mb-4">
                        Guest & Payment Information
                    </h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                    />

                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block mb-1 text-sm font-medium">Check-in</label>
                            <input
                                type="date"
                                name="checkIn"
                                required
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block mb-1 text-sm font-medium">Check-out</label>
                            <input
                                type="date"
                                name="checkOut"
                                required
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg"
                            />
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mt-4">Payment Info</h3>
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        required
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                    />
                    <div className="flex gap-4">
                        <input
                            type="text"
                            name="expiry"
                            placeholder="MM/YY"
                            required
                            onChange={handleChange}
                            className="w-1/2 p-3 border rounded-lg"
                        />
                        <input
                            type="text"
                            name="cvv"
                            placeholder="CVV"
                            required
                            onChange={handleChange}
                            className="w-1/2 p-3 border rounded-lg"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold"
                    >
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
