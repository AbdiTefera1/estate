import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const app = express();


mongoose.connect(process.env.MONGODB_API)
        .then(() => console.log("MongoDB Connected..."))
        .catch((error) => console.log(`MongoDB not Connected...${error}`))
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})