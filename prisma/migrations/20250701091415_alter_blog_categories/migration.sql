/*
  Warnings:

  - You are about to alter the column `category_id` on the `blog_records_categories` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to drop the `blog_categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `blog_records_categories` DROP FOREIGN KEY `blog_records_categories_ibfk_2`;

-- AlterTable
ALTER TABLE `blog_records_categories` MODIFY `category_id` INTEGER NULL;

-- DropTable
DROP TABLE `blog_categories`;

-- CreateTable
CREATE TABLE `blog_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `url` VARCHAR(255) NOT NULL,
    `icon_url` VARCHAR(255) NULL,
    `hex_color` VARCHAR(32) NULL,
    `display_order` INTEGER NOT NULL,
    `description` TEXT NULL,

    INDEX `display_order`(`display_order`),
    INDEX `url`(`url`(200)),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `blog_records_categories` ADD CONSTRAINT `blog_records_categories_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `blog_category`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
