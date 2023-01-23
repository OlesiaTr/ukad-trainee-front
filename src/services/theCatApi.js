// Utils
import axios from 'axios';

// Setups
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  process.env.REACT_APP_THE_CAT_API_KEY;

const params = {
  limit: 8,
};

// HTTP requests
export const fetchBreeds = async () => {
  const { data } = await axios.get('/breeds', { params });
  return data;
};
