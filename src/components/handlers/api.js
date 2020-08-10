const axios = require('axios');
const baseUrl = 'https://estonuestro.herokuapp.com';
//const baseUrl = 'http://localhost:5000';
const dateEndpoint = `${baseUrl}/api/day`
const instagramEndpoint = `${baseUrl}/api/instagram`

//Fechas
const getDate = async (date) => {
  try {
    const response = await axios.get(`${dateEndpoint}/${date}`);
    return response.data;
  } catch (error) {
    return false;
  }
}

const addUser = async (payload) => {
  try {
    const response = await axios.post(`${dateEndpoint}/add`, payload);
    return response;
  } catch (error) {
    return error.response.data.msg;
  }
}

const removeUser = async (payload) => {
  try {
    const response = await axios.delete(`${dateEndpoint}/remove`, {data: payload});
    return response;
  } catch (error) {
    return error.response.data.msg;
  }
}

//Instagrams
const getInstagramData = async () => {
  try {
    const response = await axios.get(`${instagramEndpoint}/all`);
    return response.data;
  } catch (error) {
    return false;
  }
}

const sendInstagramData = async (payload) =>{
  try{
    const response = await axios.post(`${instagramEndpoint}/register`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }});
    return [true, response.data];
  } catch (error) {
    return [false, error.response.data]
  }
}

export {
  getDate,
  addUser,
  removeUser,
  getInstagramData,
  sendInstagramData
}
