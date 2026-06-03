const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.json({
    success: true,
    message: "Backend server running"
  });
})

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})
