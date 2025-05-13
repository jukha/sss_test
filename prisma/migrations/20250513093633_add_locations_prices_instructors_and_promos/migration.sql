-- CreateTable
CREATE TABLE `instructor` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(150) NULL,
    `first_name` VARCHAR(255) NULL,
    `last_name` VARCHAR(255) NULL,
    `profile_pic` TEXT NULL,
    `biography` TEXT NULL,
    `base_address` TEXT NULL,
    `city` VARCHAR(200) NULL,
    `state` VARCHAR(200) NULL,
    `zip` VARCHAR(200) NULL,
    `lat` DECIMAL(10, 7) NULL,
    `lng` DECIMAL(10, 7) NULL,
    `certifications` TEXT NULL,
    `featured_feedback_1` TEXT NULL,
    `featured_feedback_2` TEXT NULL,
    `featured_feedback_3` TEXT NULL,
    `exp_infants` VARCHAR(20) NULL,
    `exp_toddlers` VARCHAR(20) NULL,
    `exp_preschoolers` VARCHAR(20) NULL,
    `exp_adults` VARCHAR(20) NULL,
    `exp_special_needs` VARCHAR(255) NULL,
    `activity_status` VARCHAR(255) NULL,
    `location_metro_area_id` VARCHAR(200) NULL,
    `location_metro_area_name` VARCHAR(200) NULL,
    `is_public` BOOLEAN NULL,
    `instructor_score` BIGINT NULL DEFAULT 0,
    `number_of_pools_access` INTEGER NULL,
    `knack_uid` VARCHAR(200) NULL,
    `profile_pic_opt` TEXT NULL,
    `profile_pic_sm` TEXT NULL,
    `profile_pic_sm_opt` TEXT NULL,
    `neighborhood` VARCHAR(255) NULL,
    `profile_img_score` DECIMAL(3, 2) NOT NULL DEFAULT 0.00,
    `hired_date` DATE NULL,
    `political_seo_city_name` VARCHAR(255) NULL,
    `last_updated` TIMESTAMP(0) NULL,
    `created` DATETIME(0) NULL,
    `max_driving_range` INTEGER NULL,

    UNIQUE INDEX `email`(`email`),
    INDEX `instructor_city_state_score`(`is_public`, `activity_status`, `city`, `state`, `biography`(10), `profile_pic`(10), `instructor_score`),
    INDEX `instructor_is_public`(`is_public`, `activity_status`),
    INDEX `instructor_metro_score`(`is_public`, `activity_status`, `location_metro_area_name`, `biography`(10), `profile_pic`(10), `instructor_score`),
    INDEX `instructor_score`(`instructor_score`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `location_city_page` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `metro_area_id` INTEGER NOT NULL,
    `metro_area_name` VARCHAR(255) NULL,
    `state_id` INTEGER NOT NULL,
    `state_abbreviation` VARCHAR(2) NOT NULL,
    `neighborhood_id` INTEGER NULL,
    `neighborhood_name` VARCHAR(255) NULL,
    `serve_page` BOOLEAN NULL DEFAULT true,
    `lat` DECIMAL(10, 7) NULL,
    `lng` DECIMAL(10, 7) NULL,
    `template_id` INTEGER NULL,

    INDEX `metro_area_id`(`metro_area_id`),
    INDEX `neighborhood_id`(`neighborhood_id`),
    INDEX `state_id`(`state_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `location_city_page_template` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `enabled` BOOLEAN NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `location_metro_area` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `state_id` INTEGER NOT NULL,
    `state_abbreviation` VARCHAR(2) NOT NULL,
    `lat` DECIMAL(10, 7) NULL,
    `lng` DECIMAL(10, 7) NULL,
    `package_price_tier_id` INTEGER NULL,
    `are_we_serving` BOOLEAN NULL DEFAULT false,
    `have_sis_with_pool` BOOLEAN NULL DEFAULT false,
    `local_phone` VARCHAR(14) NULL,
    `yelp_url` VARCHAR(500) NULL,
    `google_url` VARCHAR(500) NULL,
    `match_rate_30_day` DECIMAL(5, 2) NULL,
    `knack_id` VARCHAR(255) NULL,

    INDEX `fk_price_tier_id`(`package_price_tier_id`),
    INDEX `state_id`(`state_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `location_neighborhood` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `metro_area_id` INTEGER NOT NULL,

    INDEX `metro_area_id`(`metro_area_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `location_state` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `abbreviation` VARCHAR(2) NOT NULL,

    UNIQUE INDEX `abbreviation`(`abbreviation`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `location_zip_code_serviced` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `zip` CHAR(5) NOT NULL,
    `metro_area_id` INTEGER NOT NULL,

    UNIQUE INDEX `uq_zip`(`zip`),
    INDEX `metro_area_id`(`metro_area_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `location_zip_code_unserviced` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `zip` CHAR(5) NOT NULL,
    `count` INTEGER NULL DEFAULT 0,
    `state` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `package_price_matrix` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `package_price_tier_id` INTEGER NOT NULL,
    `lesson_type` VARCHAR(255) NOT NULL,
    `lesson_qty` INTEGER NOT NULL,
    `lesson_duration_minutes` SMALLINT UNSIGNED NOT NULL,
    `price` DECIMAL(10, 2) NULL,
    `price_upsell` DECIMAL(10, 2) NULL,
    `base_pay` DECIMAL(10, 2) NULL,

    UNIQUE INDEX `uniq_tier_type_qty_duration`(`package_price_tier_id`, `lesson_type`, `lesson_qty`, `lesson_duration_minutes`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `package_price_tier` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `registration_fee` DECIMAL(10, 2) NULL,

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `package_promo_code` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `promo` VARCHAR(255) NOT NULL,
    `start_date` DATETIME(0) NULL,
    `end_date` DATETIME(0) NULL,
    `off6x30` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free6x30` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off6x45` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free6x45` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off6x60` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free6x60` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off6x90` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free6x90` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off6x120` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free6x120` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off6x150` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free6x150` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off12x30` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free12x30` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off12x45` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free12x45` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off12x60` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free12x60` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off12x90` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free12x90` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off12x120` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free12x120` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off12x150` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free12x150` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off18x30` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free18x30` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off18x45` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free18x45` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off18x60` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free18x60` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off18x90` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free18x90` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off18x120` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free18x120` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `off18x150` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `free18x150` INTEGER UNSIGNED NOT NULL DEFAULT 0,

    UNIQUE INDEX `uq_promo`(`promo`),
    INDEX `idx_dates`(`start_date`, `end_date`),
    INDEX `idx_promo`(`promo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `location_city_page` ADD CONSTRAINT `location_city_page_ibfk_1` FOREIGN KEY (`metro_area_id`) REFERENCES `location_metro_area`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `location_city_page` ADD CONSTRAINT `location_city_page_ibfk_2` FOREIGN KEY (`state_id`) REFERENCES `location_state`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `location_city_page` ADD CONSTRAINT `location_city_page_ibfk_3` FOREIGN KEY (`neighborhood_id`) REFERENCES `location_neighborhood`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `location_metro_area` ADD CONSTRAINT `fk_price_tier_id` FOREIGN KEY (`package_price_tier_id`) REFERENCES `package_price_tier`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `location_metro_area` ADD CONSTRAINT `location_metro_area_ibfk_1` FOREIGN KEY (`state_id`) REFERENCES `location_state`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `location_neighborhood` ADD CONSTRAINT `location_neighborhood_ibfk_1` FOREIGN KEY (`metro_area_id`) REFERENCES `location_metro_area`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `location_zip_code_serviced` ADD CONSTRAINT `location_zip_code_serviced_ibfk_1` FOREIGN KEY (`metro_area_id`) REFERENCES `location_metro_area`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `package_price_matrix` ADD CONSTRAINT `fk_pkg_price_tier` FOREIGN KEY (`package_price_tier_id`) REFERENCES `package_price_tier`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
