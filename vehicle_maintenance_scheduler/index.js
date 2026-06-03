const axios = require("axios");

require("dotenv").config();

const TOKEN = process.env.TOKEN;

const fetchDepots = async () => {

    try {

    const response = await axios.get(

      "http://4.224.186.213/evaluation-service/depots",

      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }

    );

    console.log(response.data);

  } catch (err) {

    console.log(
      err.response?.data || err.message
    );
  }
};


const fetchVehicles = async ()=>{
 try {

    const response = await axios.get(

      "http://4.224.186.213/evaluation-service/vehicles",

      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }

    );

    console.log(
      JSON.stringify(response.data, null, 2)
    );

  } catch (err) {

    console.log(
      err.response?.data || err.message
    );
  }}




fetchDepots();
fetchVehicles();