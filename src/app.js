import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({limit: "16kb"})); // this is used to limit the json data coming to the server

app.use(express.urlencoded({extended: true, limit: '16kb'})); // this allow us to take data from URL itself. extended: means it allow object within object (nested objects). limit: set the size of the data coming.

app.use(express.static('public')); // this defines a folder wher we can store public data like images

app.use(cookieParser())


//routes import

import userRouter from './routes/user.routes.js'



//routes declaration
app.use("/api/v1/users", userRouter) 

// http://localhost:8000/api/v1/users/register


export default app;
