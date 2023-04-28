import Joi from "joi";
import { TicketBody } from "../types/ticketType.js";

export const ticketSchema = Joi.object<TicketBody>({
  name: Joi.string().required(),
  cpf: Joi.string().pattern(new RegExp("[[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}")).required(),
  phoneNumber: Joi.string().pattern(new RegExp("[0-9]{11}")).required(),
  partyId: Joi.number().required(),
  ticketType: Joi.string().required(),
  paymentMethod: Joi.string().required(),
});
