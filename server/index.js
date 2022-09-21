
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(bodyParser.json({ limit: '40mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '40mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);
//mongo db atlas connection
const CONNECTION_URL = 'mongodb+srv://mikeberg30:mikeberg30@cluster0.sc2qkp6.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Now connected to port ${PORT}`)))
  .catch((error) => console.log(`${error} Connection failed`));

mongoose.set('useFindAndModify', false);