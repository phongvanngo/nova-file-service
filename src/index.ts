import express, { Request, Response } from 'express';
import uploadRouter from './router/upload';
import { DOMAIN, PORT } from "./config/configuration";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

app.use(express.static('uploads'));

app.use("/api/upload", uploadRouter);

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});
