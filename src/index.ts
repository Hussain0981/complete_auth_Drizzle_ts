import express, { urlencoded } from "express";
const app = express();
app.use(express.json());
app.use(urlencoded({extended: true}))

import userRouter from './router/user.router'
app.use('/api/v1/users', userRouter)


app.listen(3000, () => console.log("Server running on port 3000"));
