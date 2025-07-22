import React from "react";

const MyBookings = () => {
  const bookings = [
    {
      id: "#BK-10239",
      hotel: "Seaview Resort & Spa",
      location: "Cox's Bazar, Bangladesh",
      checkIn: "August 10, 2025",
      checkOut: "August 13, 2025",
      status: "Confirmed",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      price: "$450.00",
    },
    {
      id: "#BK-10240",
      hotel: "Hilltop Paradise",
      location: "Bandarban, Bangladesh",
      checkIn: "September 2, 2025",
      checkOut: "September 4, 2025",
      status: "Pending",
      image: "https://images.unsplash.com/photo-1576678927489-3e73b8ec0599",
      price: "$320.00",
    },
  ];

  return (
    <div className=" md:max-w-7xl max-w-sm mx-auto my-12 rounded-2xl bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Bookings</h2>
      <div className="space-y-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row">
              <img
                src={booking.image}
                alt={booking.hotel}
                className="h-52 sm:h-auto sm:w-60 object-cover"
              />
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {booking.hotel}
                    </h3>
                    <p className="text-gray-500 text-sm">{booking.location}</p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                  <div>
                    <p className="font-medium text-gray-500">Check-In</p>
                    <p>{booking.checkIn}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-500">Check-Out</p>
                    <p>{booking.checkOut}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-500">Total Price</p>
                    <p className="text-indigo-600 font-semibold">
                      {booking.price}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    View Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
