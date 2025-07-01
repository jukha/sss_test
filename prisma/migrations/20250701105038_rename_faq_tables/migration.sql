/*
  Warnings:

  - You are about to drop the `faq` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `faq_categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `faq` DROP FOREIGN KEY `faq_faq_categories_id_fkey`;

-- DropTable
DROP TABLE `faq`;

-- DropTable
DROP TABLE `faq_categories`;

-- CreateTable
CREATE TABLE `faq_record` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question` VARCHAR(255) NOT NULL,
    `answer` TEXT NOT NULL,
    `index` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `faq_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `faq_record_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `faq_record_id` INTEGER NOT NULL,
    `faq_category_id` INTEGER NOT NULL,

    INDEX `faq_record_id`(`faq_record_id`),
    INDEX `faq_category_id`(`faq_category_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `faq_record_category` ADD CONSTRAINT `faq_record_category_ibfk_1` FOREIGN KEY (`faq_record_id`) REFERENCES `faq_record`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `faq_record_category` ADD CONSTRAINT `faq_record_category_ibfk_2` FOREIGN KEY (`faq_record_id`) REFERENCES `faq_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
