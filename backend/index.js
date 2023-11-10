const express = require('express');
const app = express();
const mongoose = require('mongoose');
// importing dotenv to use it
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const commentRoute = require('./routes/comments')
dotenv.config()
// dotenv.config() is a method commonly used in Node.js applications to load environment variables from a .env file into the Node.js environment. 

//middleware
app.use(express.json());
app.use(cookieParser());
// below line is saying give access to the below url
app.use(cors({origin:['http://127.0.0.1:5173', 'https://127.0.0.1:5173'],credentials:true}))
app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/post',postRoute);
app.use('/api/comments',commentRoute);

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connected to MongoDB")
    }catch(error){
        console.error(error)
    }
}

app.listen(process.env.PORT,()=>{
    connectDB()
    console.log('listening ')
})

