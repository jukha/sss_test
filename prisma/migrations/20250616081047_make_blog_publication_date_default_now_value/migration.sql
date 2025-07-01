/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `sequences` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `blog_records` MODIFY `blog_publication_date` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);
