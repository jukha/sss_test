/*
  Warnings:

  - Made the column `version` on table `customer_registration_records` required. This step will fail if there are existing NULL values in that column.

*/

UPDATE `customer_registration_records` SET `version` = 0 WHERE `version` IS NULL;

-- AlterTable
ALTER TABLE `customer_registration_records` MODIFY `version` INTEGER NOT NULL;
