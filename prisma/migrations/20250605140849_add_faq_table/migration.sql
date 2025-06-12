-- CreateTable
CREATE TABLE `faq` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question` VARCHAR(255) NOT NULL,
    `answer` TEXT NOT NULL,
    `index` INTEGER NOT NULL,
    `faq_categories_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `faq_categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(16) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `faq` ADD CONSTRAINT `faq_faq_categories_id_fkey` FOREIGN KEY (`faq_categories_id`) REFERENCES `faq_categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
