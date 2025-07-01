/*
  Warnings:

  - You are about to drop the `customer_reviews` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `customer_reviews`;

-- CreateTable
CREATE TABLE `customer_review` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `instructor_id` BIGINT NOT NULL,
    `metro_area_id` INTEGER NOT NULL,
    `neighborhood_id` INTEGER NOT NULL,
    `city_name` VARCHAR(255) NULL,
    `knack_id` VARCHAR(255) NULL,
    `customer_address_city` VARCHAR(255) NULL,
    `customer_address_state` VARCHAR(2) NULL,
    `customer_address_zip` VARCHAR(5) NULL,
    `lat` DECIMAL(10, 7) NULL,
    `lng` DECIMAL(10, 7) NULL,
    `age_group` VARCHAR(255) NULL,
    `designation` VARCHAR(255) NULL,
    `review_text` TEXT NOT NULL,
    `review_date` DATE NULL,
    `rating` TINYINT UNSIGNED NOT NULL,
    `top` BOOLEAN NOT NULL DEFAULT false,
    `source_id` VARCHAR(500) NULL,
    `source_platform` VARCHAR(255) NULL,
    `customer_email` VARCHAR(255) NULL,
    `customer_fist_name` VARCHAR(255) NULL,
    `customer_last_name` VARCHAR(255) NULL,
    `customer_photo_url` VARCHAR(500) NULL,
    `public` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `customer_review` ADD CONSTRAINT `customer_review_instructor_id_fkey` FOREIGN KEY (`instructor_id`) REFERENCES `instructor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customer_review` ADD CONSTRAINT `customer_review_metro_area_id_fkey` FOREIGN KEY (`metro_area_id`) REFERENCES `location_metro_area`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customer_review` ADD CONSTRAINT `customer_review_neighborhood_id_fkey` FOREIGN KEY (`neighborhood_id`) REFERENCES `location_neighborhood`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
