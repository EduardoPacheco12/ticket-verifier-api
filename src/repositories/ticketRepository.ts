import { PaymentMethod, TicketType } from "@prisma/client";
import { client } from "../databases/postgres.js";

export async function createTicket(userId: number, partyId: number, paymentMethod: PaymentMethod, ticketType: TicketType) {
  return await client.ticket.create({
    data: {
      userId,
      partyId,
      paymentMethod,
      ticketType,
    },
  });
}
