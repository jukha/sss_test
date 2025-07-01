/*
  Warnings:

  - The primary key for the `blog_record` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `blog_record` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to drop the `blog_records_categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `blog_records_categories` DROP FOREIGN KEY `blog_records_categories_ibfk_1`;

-- DropForeignKey
ALTER TABLE `blog_records_categories` DROP FOREIGN KEY `blog_records_categories_ibfk_2`;

-- AlterTable
ALTER TABLE `blog_record` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `blog_records_categories`;

-- CreateTable
CREATE TABLE `blog_record_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `blog_record_id` INTEGER NOT NULL,
    `category_id` INTEGER NOT NULL,

    INDEX `category_id`(`category_id`),
    INDEX `blog_record_id`(`blog_record_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `blog_record_category` ADD CONSTRAINT `blog_record_category_ibfk_1` FOREIGN KEY (`blog_record_id`) REFERENCES `blog_record`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `blog_record_category` ADD CONSTRAINT `blog_record_category_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `blog_category`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
