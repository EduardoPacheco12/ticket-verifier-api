import { TicketBody } from "../types/ticketType";
import * as ticketRepository from "../repositories/ticketRepository.js";
import * as userRepository from "../repositories/userRepository.js";
import * as partyRepository from "../repositories/partyRepository.js";
import { notFoundError } from "../utils/errorUtils.js";

export async function postTicket(body: TicketBody) {
  const cpf = body.cpf;
  const name = body.name;
  const phoneNumber = body.phoneNumber;
  const partyId = body.partyId;
  const paymentMethod = body.paymentMethod;
  const ticketType = body.ticketType;

  const verifyParty = await partyRepository.searchParty(partyId);

  if (!verifyParty) {
    throw notFoundError("Party not found");
  }

  let verifyUser = await userRepository.searchUser(cpf);

  if (!verifyUser) {
    await userRepository.registerUser(cpf, name, phoneNumber);
    verifyUser = await userRepository.searchUser(cpf);
  }

  await ticketRepository.createTicket(verifyUser.id, partyId, paymentMethod, ticketType);
}
