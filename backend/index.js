// Express.js is a free and open - source web application framework for Node.js.
// It is used for designing and building web applications quickly and easily.
import express from "express";
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// Body-parser is the Node. js body parsing middleware.
// It is responsible for parsing the incoming request bodies in a middleware before you handle it.
import bodyParser from "body-parser";

// Mongoose provides a straight-forward, schema-based solution to model your application data.
import mongoose from "mongoose";

import cors from "cors";

// dotenv Loads environment variables from.env file.
import dotenv from "dotenv";

//routes importing
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import termCondtionRouter from "./routes/termsCondition.js";
import tradeTextRouter from "./routes/tradeText.js";
import privacyTextRouter from "./routes/privacyText.js";
import disclaimerTextRouter from "./routes/disclaimerText.js";

// import organizationRouter from "./routes/organization.js";
import cloudinary from 'cloudinary';
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const app = express();

// use() function is used to mount the specified middleware function(s) at the path which is being specified.

// bodyParser.json() Returns middleware that only parses json
// and only looks at requests where the Content-Type header matches the type option.
app.use(bodyParser.json({ limit: "30mb", extended: true }));


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname,'public')))
app.use('/static',express.static('public'))


// Returns middleware that only parses urlencoded bodies and
// only looks at requests where the Content-Type header matches the type option.
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://smallcapcanada.vercel.app/');
//   next();
// });

app.use(cors({ origin: 'https://smallcapcanada.vercel.app/',methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], }));
// app.use(cors());

//Defining Port on which our page is load.
const PORT = process.env.PORT || 5000;

//Connection Parameters Passing in mongoose.connect() method.
const CONNECTION_PARAMS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// use() function is used to mount the specified middleware function(s) at the path which is being specified.
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/terms_condition", termCondtionRouter);
app.use("/trade_text", tradeTextRouter);
app.use("/disclaimer_text", disclaimerTextRouter);
app.use("/privacy_text", privacyTextRouter);
// app.use("/organization", organizationRouter);

// The app.get() responds with “Hello to ToDo App API” for requests to the root URL (/) or route.
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Small Cap Canada App API</h1>");
});

// Connecting with MongoDB with the mongoose.connect() method.
// mongoose.connect(process.env.CONNECTION_URL, CONNECTION_PARAMS)
//   .then(() => app.listen(PORT, console.log(`Server running on port: ${PORT}`)))
//   .catch((error) => console.log(error.message));


mongoose.connect(process.env.CONNECTION_URL , {useNewUrlParser: true,useUnifiedTopology: true}) 
.then(
  () => app.listen(PORT, console.log(`Server running on port: ${PORT}`))
).catch((err) => {
  console.log("Mongodb connection error", err);
});





export default app;
