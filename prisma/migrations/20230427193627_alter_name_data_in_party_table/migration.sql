/*
  Warnings:

  - You are about to drop the column `nome` on the `Party` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Party` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Party` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Party_nome_key";

-- AlterTable
ALTER TABLE "Party" DROP COLUMN "nome",
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT now();

-- CreateIndex
CREATE UNIQUE INDEX "Party_name_key" ON "Party"("name");
