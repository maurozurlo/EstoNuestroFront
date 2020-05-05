const axios = require('axios');
const baseUrl = 'https://estonuestro.herokuapp.com';
//const baseUrl = 'http://localhost:5000';

const dayGet = `${baseUrl}/api/day`;


const getDate = async (date) => {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${dayGet}/${date}`);
    return response.data;
  } catch (error) {
    return false;
  }
}

export {
  getDate
}