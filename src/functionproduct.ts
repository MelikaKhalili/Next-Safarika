import { API_KEY, BASE_URL } from "@/constant/config";
import axios from "axios";
import { tours } from "./product";

export async function addToApi() {
  for (const tour of tours) {
    const response = await axios.post(
      `${BASE_URL}/api/records/tours`,
      JSON.stringify(tour),
      {
        headers: {
          api_key: API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(`Product added: ${response.data}`);
  }
}
