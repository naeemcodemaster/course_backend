const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const User = require('./models/User.models.js')


dotenv.config();
const app = express();


connectDB();

// used to accept json data
app.use(express.json());


const PORT = process.env.PORT || 5000;



app.get('/',(req,res)=>{
    // res.send('Hi this is endpoint');
    res.status(200).json({message:"this is root path"})

})


app.post('/register',async(req,res)=>{
    // console.log(req.body)
    // res.status(201).json({message:"Account has been created"})

    // console.log(req.body.username);
    // const username = req.body.username;
    // const email = req.body.email;
    // const password = req.body.password;

    // desturacturing in JS
    const {username,email,password} = req.body;

    try {
       const userExist =  await User.findOne({email});

       if(userExist){
        return res.status(400).json({message:"User already exist"});
       }

       const user = new User({username,email,password});
       await user.save();
       res.status(201).json({message:"Account has been created..."})


    } catch (error) {
        res.status(500).json({message:"Error in registration", error})
    }


    
    

})


app.post('/login',(req,res)=>{
    console.log("Login API");
    
})



app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})