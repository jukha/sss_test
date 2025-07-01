/*
  Warnings:

  - You are about to drop the column `blog_author_name` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_author_photo` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_author_social_handle` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_author_social_url` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_body` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_featured_image` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_featured_image_alt_description` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_hyphenated_title` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_is_featured` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_is_published` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_meta_description` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_meta_tags` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_meta_title` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_publication_date` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_read_time` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_teaser` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `blog_title` on the `blog_records` table. All the data in the column will be lost.
  - You are about to drop the column `submission_id` on the `blog_records` table. All the data in the column will be lost.
  - Added the required column `title` to the `blog_records` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `blog_body_ftxt` ON `blog_records`;

-- DropIndex
DROP INDEX `blog_publication_date` ON `blog_records`;

-- DropIndex
DROP INDEX `blog_records_blog_hyphenated_title_key` ON `blog_records`;

-- DropIndex
DROP INDEX `blog_teaser_ftxt` ON `blog_records`;

-- DropIndex
DROP INDEX `blog_title_ftxt` ON `blog_records`;

-- DropIndex
DROP INDEX `blog_titles_idx` ON `blog_records`;

-- DropIndex
DROP INDEX `blog_ttb_ftxt` ON `blog_records`;

-- DropIndex
DROP INDEX `url_over_first` ON `blog_records`;

-- AlterTable
ALTER TABLE `blog_records` DROP COLUMN `blog_author_name`,
    DROP COLUMN `blog_author_photo`,
    DROP COLUMN `blog_author_social_handle`,
    DROP COLUMN `blog_author_social_url`,
    DROP COLUMN `blog_body`,
    DROP COLUMN `blog_featured_image`,
    DROP COLUMN `blog_featured_image_alt_description`,
    DROP COLUMN `blog_hyphenated_title`,
    DROP COLUMN `blog_is_featured`,
    DROP COLUMN `blog_is_published`,
    DROP COLUMN `blog_meta_description`,
    DROP COLUMN `blog_meta_tags`,
    DROP COLUMN `blog_meta_title`,
    DROP COLUMN `blog_publication_date`,
    DROP COLUMN `blog_read_time`,
    DROP COLUMN `blog_teaser`,
    DROP COLUMN `blog_title`,
    DROP COLUMN `submission_id`,
    ADD COLUMN `author_name` VARCHAR(255) NULL,
    ADD COLUMN `author_photo` VARCHAR(500) NULL,
    ADD COLUMN `author_social_handle` VARCHAR(255) NULL,
    ADD COLUMN `author_social_url` VARCHAR(500) NULL,
    ADD COLUMN `body` TEXT NULL,
    ADD COLUMN `created_date` DATETIME(3) NULL,
    ADD COLUMN `featured_image` VARCHAR(500) NULL,
    ADD COLUMN `featured_image_alt_description` VARCHAR(255) NULL,
    ADD COLUMN `knack_submission_id` VARCHAR(255) NULL,
    ADD COLUMN `meta_description` TEXT NULL,
    ADD COLUMN `publish_date` DATETIME(3) NULL,
    ADD COLUMN `read_time` SMALLINT UNSIGNED NULL,
    ADD COLUMN `teaser` TEXT NULL,
    ADD COLUMN `title` VARCHAR(255) NOT NULL,
    ADD COLUMN `url` VARCHAR(255) NULL,
    ADD COLUMN `is_featured` BOOLEAN NULL,
    MODIFY `url_over_first` VARCHAR(255) NULL,
    MODIFY `url_over_second` VARCHAR(255) NULL,
    MODIFY `url_over_third` VARCHAR(255) NULL;

-- CreateIndex
CREATE INDEX `blog_publication_date` ON `blog_records`(`publish_date`);
