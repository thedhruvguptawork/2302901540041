const axios = require('axios')

const register = async()=>{
    try {

    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/register",

      {
        email: "thedhruvguptawork@gmail.com",
        name: "Dhruv Gupta",
        mobileNo: "6388715461",
        githubUsername: "thedhruvguptawork",
        rollNo: "2302901540041",
        accessCode: "YOUR_ACCESS_CODE"
      }
    );

    console.log(response.data);

  }catch (err) {

    console.log(
      err.response?.data || err.message
    );
  }
};

register();
