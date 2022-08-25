import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import storyRouter from './routes/stories.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors());
app.use("/stories", storyRouter);

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        // to create and start server
        app.listen(PORT, () => console.log(`Server is runnning on port: ${PORT}`))
    } catch (err) {
        console.log('connection error :- ', err.message);
    }
}

connectDB();

mongoose.connection.on("open", () => {
    console.log('database connected');
})

mongoose.connection.on("error", () => {
    console.log('database not connected');
})