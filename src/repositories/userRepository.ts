import { client } from "../databases/postgres.js";

export async function searchUser(cpf: string) {
  return await client.user.findUnique({
    where: {
      cpf,
    },
  });
}

export async function registerUser(cpf: string, name: string, phoneNumber: string) {
  await client.user.create({
    data: {
      cpf,
      name,
      phoneNumber,
    },
  });
}
