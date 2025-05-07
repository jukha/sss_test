/*
  Warnings:

  - You are about to drop the column `anonUserId` on the `registration` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `registration_anonUserId_key` ON `registration`;

-- AlterTable
ALTER TABLE `registration` DROP COLUMN `anonUserId`;
