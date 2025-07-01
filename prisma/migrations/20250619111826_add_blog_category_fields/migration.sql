/*
  Warnings:

  - A unique constraint covering the columns `[hyphenated_name]` on the table `blog_categories` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `blog_categories` ADD COLUMN `hex_color` VARCHAR(32) NULL,
    ADD COLUMN `hyphenated_name` VARCHAR(64) NULL,
    ADD COLUMN `icon_url` VARCHAR(255) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `blog_categories_hyphenated_name_key` ON `blog_categories`(`hyphenated_name`);
