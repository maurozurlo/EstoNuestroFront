const axios = require('axios');
const baseUrl = 'https://estonuestro.herokuapp.com';
//const baseUrl = 'http://localhost:5000';


const getDate = async (date) => {
  const route = `${baseUrl}/api/day`;

  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${route}/${date}`);
    return response.data;
  } catch (error) {
    return false;
  }
}

const addUser = async (payload) => {
  const route = `${baseUrl}/api/day/add`;

  try {
    const response = await axios.post(`${route}`, payload);
    return response;
  } catch (error) {
    return error.response.data.msg;
  }
}

export {
  getDate,
  addUser
}