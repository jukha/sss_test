/*
  Warnings:

  - You are about to drop the `local_competitors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `local_competitors`;

-- CreateTable
CREATE TABLE `location_competitor` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `use_in_comparison` BOOLEAN NOT NULL DEFAULT true,
    `metro_area_id` INTEGER NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `lesson_types` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `ages` VARCHAR(255) NULL,
    `learn_to_swim_guarantee` BOOLEAN NULL,
    `flexible_scheduling` BOOLEAN NULL,
    `scheduling` VARCHAR(191) NULL,
    `monthly_membership_required` BOOLEAN NULL,
    `costs_per_lesson` VARCHAR(255) NULL,
    `stars_count` DECIMAL(2, 1) NULL,
    `yelp_reviews_id` VARCHAR(191) NULL,
    `google_reviews_id` VARCHAR(191) NULL,
    `customer_review_text` TEXT NULL,
    `lat` DECIMAL(10, 7) NULL,
    `lng` DECIMAL(10, 7) NULL,

    INDEX `metro_area_id`(`metro_area_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
