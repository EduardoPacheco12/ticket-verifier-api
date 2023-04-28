import { User, Ticket } from "@prisma/client";

type UserData = Omit<User, "id" | "createdAt">;

type TicketData = Omit<Ticket, "id" | "userId" | "isUsed" | "createdAt">;

export type TicketBody = UserData & TicketData;
