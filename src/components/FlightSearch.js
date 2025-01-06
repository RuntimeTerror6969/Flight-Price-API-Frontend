import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { searchFlights } from "../services/api";
import FlightResults from "./FlightResults";

const FlightSearch = () => {
  const [searchData, setSearchData] = useState({
    source: "",
    destination: "",
    date: new Date(),
    passengers: 1,
    route: "direct", // direct or connecting
  });
  const [results, setResults] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const flights = await searchFlights(searchData);
      setResults(flights);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              From
            </label>
            <input
              type="text"
              placeholder="Source"
              value={searchData.source}
              onChange={(e) =>
                setSearchData({ ...searchData, source: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              To
            </label>
            <input
              type="text"
              placeholder="Destination"
              value={searchData.destination}
              onChange={(e) =>
                setSearchData({ ...searchData, destination: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <DatePicker
            selected={searchData.date}
            onChange={(date) => setSearchData({ ...searchData, date })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Passengers
            </label>
            <input
              type="number"
              min="1"
              max="9"
              value={searchData.passengers}
              onChange={(e) =>
                setSearchData({
                  ...searchData,
                  passengers: parseInt(e.target.value),
                })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Route Type
            </label>
            <select
              value={searchData.route}
              onChange={(e) =>
                setSearchData({ ...searchData, route: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="direct">Direct</option>
              <option value="connecting">Connecting</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Search Flights
        </button>
      </form>
      {results && <FlightResults flights={results} />}
    </div>
  );
};

export default FlightSearch;
