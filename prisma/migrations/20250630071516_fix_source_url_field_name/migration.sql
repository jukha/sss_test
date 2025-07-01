/*
  Warnings:

  - You are about to drop the column `source_id` on the `customer_review` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `customer_review` DROP COLUMN `source_id`,
    ADD COLUMN `source_url` VARCHAR(500) NULL;
