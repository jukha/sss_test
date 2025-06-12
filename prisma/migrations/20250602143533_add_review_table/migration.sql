-- CreateTable
CREATE TABLE `customer_reviews` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `customer_email` VARCHAR(150) NULL,
    `first_name` VARCHAR(255) NULL,
    `last_name` VARCHAR(255) NULL,
    `customer_photo` TEXT NULL,
    `customer_review` TEXT NULL,
    `instructor` VARCHAR(150) NULL,
    `review_type` VARCHAR(150) NULL,
    `review_rank` VARCHAR(150) NULL,
    `review_platform` VARCHAR(150) NULL,
    `review_url` TEXT NULL,
    `top` SMALLINT NULL,
    `city` VARCHAR(200) NULL,
    `state` VARCHAR(200) NULL,
    `metro` VARCHAR(200) NULL,
    `review_date` DATE NULL,
    `review_id` SMALLINT NULL,

    INDEX `cr_idx1`(`city`(40), `state`(40), `review_type`(40), `review_rank`(40), `review_date`),
    INDEX `cr_idx1_1`(`city`(40), `state`(40), `review_rank`(40), `review_date`),
    INDEX `cr_idx2`(`metro`(40), `city`(40), `review_type`(40), `review_rank`(40), `review_date`),
    INDEX `cr_idx2_1`(`metro`(40), `city`(40), `review_type`(40), `review_rank`(40), `review_date`),
    INDEX `cr_idx3`(`review_type`(40), `review_rank`(40), `metro`(40)),
    INDEX `cr_idx4`(`review_rank`(40), `metro`(40)),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
