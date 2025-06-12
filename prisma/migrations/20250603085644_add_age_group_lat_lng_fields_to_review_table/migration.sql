-- AlterTable
ALTER TABLE `customer_reviews` ADD COLUMN `age_group` VARCHAR(64) NULL,
    ADD COLUMN `designation` VARCHAR(64) NULL,
    ADD COLUMN `lat` DECIMAL(10, 7) NULL,
    ADD COLUMN `lng` DECIMAL(10, 7) NULL;
