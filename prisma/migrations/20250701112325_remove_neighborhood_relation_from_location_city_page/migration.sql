/*
  Warnings:

  - You are about to drop the column `neighborhood_id` on the `location_city_page` table. All the data in the column will be lost.
  - You are about to drop the column `neighborhood_name` on the `location_city_page` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `location_city_page` DROP FOREIGN KEY `location_city_page_ibfk_3`;

-- DropIndex
DROP INDEX `neighborhood_id` ON `location_city_page`;

-- AlterTable
ALTER TABLE `location_city_page` DROP COLUMN `neighborhood_id`,
    DROP COLUMN `neighborhood_name`;
