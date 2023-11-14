import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter  from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

const app = express();

app.use(express.json())

mongoose.connect(process.env.MONGODB_API)
        .then(() => console.log("MongoDB Connected..."))
        .catch((error) => console.log(`MongoDB not Connected...${error}`))


app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

