import express from 'express';

const app = express();

const MONGODB_API = "mongodb+srv://abdi:abditefera@cluster0.3cenfxy.mongodb.net/realstate";


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})