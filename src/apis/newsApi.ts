import axios from 'axios';
import { API_URL } from '@/constant/app';

export const getNewsList = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/news`,
      {
        params: {
          'populate': '*',
          'sort': 'createdAt:desc',
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching business:', error);
  }
};

export const getNewsDetail = async (id:string) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/news/${id}`,
      {
        params: {
          'populate[content][populate]': '*',
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching business:', error);
  }
};
