-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT now();

-- CreateTable
CREATE TABLE "Party" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "partyDay" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT now(),

    CONSTRAINT "Party_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Party_nome_key" ON "Party"("nome");
