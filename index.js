const express = require('express');
const dotenv = require('dotenv');


dotenv.config();
const app = express();


const PORT = process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send('Hi this is endpoint updated');
})

app.post('/register',(req,res)=>{
    res.send('hi')
})

app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})