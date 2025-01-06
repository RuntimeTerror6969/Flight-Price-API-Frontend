import React from "react";

const FlightResults = ({ flights }) => {
  if (!flights || flights.length === 0) {
    return <div className="mt-4">No flights found</div>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Available Flights</h2>
      <div className="space-y-4">
        {flights.map((flight) => (
          <div key={flight.id} className="border p-4 rounded shadow">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">{flight.airline}</h3>
                <p>
                  {flight.departure} - {flight.arrival}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">{flight.totalPrice}</p>
                <button className="bg-blue-500 text-white px-4 py-1 rounded mt-2">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightResults;
