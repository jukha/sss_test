-- DropForeignKey
ALTER TABLE `faq_record_category` DROP FOREIGN KEY `faq_record_category_ibfk_2`;

-- AddForeignKey
ALTER TABLE `faq_record_category` ADD CONSTRAINT `faq_record_category_ibfk_2` FOREIGN KEY (`faq_category_id`) REFERENCES `faq_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
