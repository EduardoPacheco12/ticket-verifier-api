import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import ticketRoute from "./routes/ticketRoute.js";

const app = express();

app.use(cors());
app.use(json());

app.use(ticketRoute);
app.use(errorHandlerMiddleware);

export default app;
