const express = require("express");
const app = express();
const mongoose = require("mongoose");
// importing dotenv to use it
const dotenv = require("dotenv");
const path = require('path')
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const commentRoute = require("./routes/comments");
const multer = require('multer');
dotenv.config();
// dotenv.config() is a method commonly used in Node.js applications to load environment variables from a .env file into the Node.js environment.

//middleware
app.use(express.json());
app.use(cookieParser());
app.use('/images',express.static(path.join(__dirname,'images')))

// below line is saying give access to the below url
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// api/something this base route
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/post", postRoute);
app.use("/api/comments", commentRoute);

//image upload 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.img)
    // cb(null,"avatar_2.jpeg")
  },
})

const upload = multer({storage: storage})
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded')
})

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("listening ");
});
