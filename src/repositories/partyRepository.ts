import { client } from "../databases/postgres.js";

export async function searchParty(id: number) {
  return await client.party.findUnique({
    where: {
      id,
    },
  });
}
