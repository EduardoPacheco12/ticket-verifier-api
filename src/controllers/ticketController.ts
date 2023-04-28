import { Request, Response } from "express";
import { TicketBody } from "../types/ticketType.js";
import * as tickerService from "../services/ticketService.js";

export async function postTicket(req: Request, res: Response) {
  const body: TicketBody = req.body;

  await tickerService.postTicket(body);

  res.status(201).send("Ticket created");
}
