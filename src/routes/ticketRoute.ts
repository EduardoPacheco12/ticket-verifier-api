import { Router } from "express";
import { postTicket } from "../controllers/ticketController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { ticketSchema } from "../schemas/ticketSchema.js";

const router = Router();

router.post("/ticket/register", validateSchemaMiddleware(ticketSchema), postTicket);

export default router;
