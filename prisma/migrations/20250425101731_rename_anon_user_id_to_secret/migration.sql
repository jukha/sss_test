/*
  Warnings:

  - You are about to drop the column `anonUserId` on the `registration_log` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `registration_log` DROP COLUMN `anonUserId`,
    ADD COLUMN `anonUserSecret` VARCHAR(191) NOT NULL DEFAULT '';
