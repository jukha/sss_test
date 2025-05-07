/*
  Warnings:

  - You are about to drop the `Registration` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Registration`;

-- CreateTable
CREATE TABLE `registration` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `anonUserId` VARCHAR(191) NOT NULL,
    `anonUserSecret` VARCHAR(191) NOT NULL,
    `zipCode` INTEGER NULL,
    `poolAccess` BOOLEAN NULL,

    UNIQUE INDEX `registration_anonUserId_key`(`anonUserId`),
    UNIQUE INDEX `registration_anonUserSecret_key`(`anonUserSecret`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
