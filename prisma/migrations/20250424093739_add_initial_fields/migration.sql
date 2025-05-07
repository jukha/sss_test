/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Test`;

-- CreateTable
CREATE TABLE `Registration` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `anonUserId` VARCHAR(191) NOT NULL,
    `anonUserSecret` VARCHAR(191) NOT NULL,
    `zipCode` INTEGER NULL,
    `poolAccess` BOOLEAN NULL,

    UNIQUE INDEX `Registration_anonUserId_key`(`anonUserId`),
    UNIQUE INDEX `Registration_anonUserSecret_key`(`anonUserSecret`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
