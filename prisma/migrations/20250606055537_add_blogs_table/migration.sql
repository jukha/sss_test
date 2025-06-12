-- CreateTable
CREATE TABLE `blog_categories` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(64) NULL,
    `url_part` TEXT NULL,
    `order_num` BIGINT NULL,

    INDEX `order_num`(`order_num`),
    INDEX `url_part`(`url_part`(200)),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog_records` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `blog_title` TEXT NULL,
    `blog_featured_image` TEXT NULL,
    `blog_teaser` TEXT NULL,
    `blog_body` TEXT NULL,
    `blog_author_name` TEXT NULL,
    `blog_author_photo` TEXT NULL,
    `blog_author_social_handle` TEXT NULL,
    `blog_author_social_url` TEXT NULL,
    `blog_publication_date` DATE NULL,
    `blog_read_time` TEXT NULL,
    `blog_meta_description` TEXT NULL,
    `blog_meta_title` TEXT NULL,
    `blog_meta_tags` TEXT NULL,
    `blog_is_published` BOOLEAN NULL,
    `blog_is_featured` BOOLEAN NULL,
    `blog_hyphenated_title` TEXT NULL,
    `url_over_first` TEXT NULL,
    `url_over_second` TEXT NULL,
    `url_over_third` TEXT NULL,
    `submission_id` VARCHAR(255) NULL,
    `blog_featured_image_alt_description` TEXT NULL,

    INDEX `blog_hyphenated_title`(`blog_hyphenated_title`(200)),
    INDEX `blog_publication_date`(`blog_publication_date`),
    INDEX `url_over_first`(`url_over_first`(4), `url_over_second`(2), `url_over_third`(200)),
    FULLTEXT INDEX `blog_body_ftxt`(`blog_body`),
    FULLTEXT INDEX `blog_teaser_ftxt`(`blog_teaser`),
    FULLTEXT INDEX `blog_title_ftxt`(`blog_title`),
    FULLTEXT INDEX `blog_titles_idx`(`blog_title`),
    FULLTEXT INDEX `blog_ttb_ftxt`(`blog_title`, `blog_teaser`, `blog_body`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog_records_categories` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `record_id` BIGINT NULL,
    `category_id` BIGINT NULL,

    INDEX `category_id`(`category_id`),
    INDEX `record_id`(`record_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `blog_records_categories` ADD CONSTRAINT `blog_records_categories_ibfk_1` FOREIGN KEY (`record_id`) REFERENCES `blog_records`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `blog_records_categories` ADD CONSTRAINT `blog_records_categories_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `blog_categories`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
