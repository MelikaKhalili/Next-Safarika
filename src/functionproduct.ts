import { API_KEY, BASE_URL } from "@/constant/config";
import axios from "axios";
import { tehranTours, Toptravelogues, tours } from "./product";
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
export async function addToApi2() {
  for (const tehranTour of tehranTours) {
    const response = await axios.post(
      `${BASE_URL}/api/records/tehranTours`,
      JSON.stringify(tehranTour),
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
export async function addToApi3() {
  for (const Toptravelogue of Toptravelogues) {
    const response = await axios.post(
      `${BASE_URL}/api/records/Toptravelogues`,
      JSON.stringify(Toptravelogue),
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
