import axios from "axios";

// const API_URL = "http://localhost:5000/api";
const API_URL = "https://flight-price-api-backend.vercel.app/api";
export const searchFlights = async (searchData) => {
  console.log("Sending search data:", searchData);
  try {
    const response = await axios.post(`${API_URL}/flights`, searchData);
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error searching flights:", error);
    throw error;
  }
};
export const getFlightPrices = async (params) => {
  try {
    const response = await axios.get(`${API_URL}/prices`, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching prices:", error);
    throw error;
  }
};
