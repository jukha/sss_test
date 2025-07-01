-- DropForeignKey
ALTER TABLE `customer_review` DROP FOREIGN KEY `customer_review_neighborhood_id_fkey`;

-- DropIndex
DROP INDEX `customer_review_neighborhood_id_fkey` ON `customer_review`;

-- AlterTable
ALTER TABLE `customer_review` ADD COLUMN `locationNeighborhoodId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `customer_review` ADD CONSTRAINT `customer_review_locationNeighborhoodId_fkey` FOREIGN KEY (`locationNeighborhoodId`) REFERENCES `location_neighborhood`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
