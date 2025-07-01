/*
  Warnings:

  - Made the column `count` on table `location_zip_code_unserviced` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `location_zip_code_unserviced` MODIFY `count` INTEGER NOT NULL DEFAULT 0;
