import { BASE_URL, headers } from "@/constant/config";
import axios from "axios";

export const getFilteredProducts = async (
  filterKey: string,
  filterValue: string
) => {
  try {
    let url = `${BASE_URL}/api/records/tours`;
    if (filterKey !== "all") {
      url += `?filterValue=${filterValue}&filterKey=${filterKey}`;
    }
    console.log("Fetching from URL:", url);
    const response = await axios.get(url, {
      headers: headers,
    });
    console.log("API Response:", response.data);
    return response.data.records || [];
  } catch (error) {
    console.error("Error in getFilteredProducts:", error);
    return [];
  }
};
