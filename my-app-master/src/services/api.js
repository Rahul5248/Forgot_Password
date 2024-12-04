import axios from 'axios';

const apiUrl = 'https://your-api-url.com'; // Replace with your actual API URL

export const fetchMenu = async () => {
  try {
    const response = await axios.get(`${apiUrl}/menu`);
    return response.data;
  } catch (error) {
    console.error('Error fetching menu:', error);
    throw error;
  }
};
