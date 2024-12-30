import axios from "axios";
import { API_URL } from "@/constant/app";

export const getVideoGallery = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/videos`, {
      params: {
        populate: "*",
        // sort: "createdAt:desc",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching business:", error);
  }
};
