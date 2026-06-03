const axios = require("axios");
const dotenv = require('dotenv');
dotenv.config();
const TOKEN = process.env.TOKEN;

const Log = async (
  stack,
  level,
  packageName,
  message
) => {

  try {

    const response = await axios.post(

      "http://4.224.186.213/evaluation-service/logs",

      {
        stack,
        level,
        package: packageName,
        message
      },

      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    return response.data;

  } catch (err) {

    console.log(
      err.response?.data || err.message
    );
  }
};

module.exports = Log;