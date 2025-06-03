const baseUrl = 'https://estonuestro.herokuapp.com';
// const baseUrl = 'http://localhost:5000';
const dateEndpoint = `${baseUrl}/api/day`;
const instagramEndpoint = `${baseUrl}/api/instagram`;

// Fechas
const getDate = async (date) => {
  try {
    const response = await fetch(`${dateEndpoint}/${date}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error)
    return false;
  }
};

const addUser = async (payload) => {
  try {
    const response = await fetch(`${dateEndpoint}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const err = await response.json();
      return err.msg;
    }
    return response;
  } catch (error) {
    console.error(error)
    return 'Error connecting to server';
  }
};

const removeUser = async (payload) => {
  try {
    const response = await fetch(`${dateEndpoint}/remove`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const err = await response.json();
      return err.msg;
    }
    return response;
  } catch (error) {
    console.error(error)
    return 'Error connecting to server';
  }
};

// Instagrams
const getInstagramData = async () => {
  try {
    const response = await fetch(`${instagramEndpoint}/all`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error)
    return false;
  }
};

const sendInstagramData = async (payload) => {
  try {
    const response = await fetch(`${instagramEndpoint}/register`, {
      method: 'POST',
      body: payload // assumed to be FormData
    });

    const data = await response.json();
    if (!response.ok) return [false, data];
    return [true, data];
  } catch (error) {
    console.error(error)
    return [false, { error: 'Network error' }];
  }
};

export {
  getDate,
  addUser,
  removeUser,
  getInstagramData,
  sendInstagramData
};
