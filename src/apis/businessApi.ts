import axios from 'axios';
import { API_URL } from '@/constant/app';
export const getBusinessDetail = async (slug:string) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/businesses`,
      {
        params: {
          // 'populate[content][populate]': '*',
          'populate[Cover_image][populate]': '*',
          'populate[content][populate]': '*',
          'filters[slug][$eq]': slug,
        },
      }
    );
    return response.data.data[0];
  } catch (error) {
    console.error('Error fetching business:', error);
  }
};
