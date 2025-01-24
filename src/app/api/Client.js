const axios = require("axios");
const Cookies = require("js-cookie");

const token = Cookies.get("token");

export const createClient = async (client) => {
  try {
    const response = await axios.post("/api/client", client, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const getClients = async () => {
  try {
  } catch (error) {
    throw error;
  }
};

export const deleteClient = async () => {
  try {
  } catch (error) {
    throw error;
  }
};
