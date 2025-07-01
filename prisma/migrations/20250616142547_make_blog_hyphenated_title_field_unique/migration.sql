/*
  Warnings:

  - A unique constraint covering the columns `[blog_hyphenated_title]` on the table `blog_records` will be added. If there are existing duplicate values, this will fail.
  - Made the column `blog_hyphenated_title` on table `blog_records` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `blog_records` MODIFY `blog_hyphenated_title` VARCHAR(64) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `blog_records_blog_hyphenated_title_key` ON `blog_records`(`blog_hyphenated_title`);
