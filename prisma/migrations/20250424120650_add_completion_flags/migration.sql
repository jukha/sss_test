-- AlterTable
ALTER TABLE `registration` ADD COLUMN `completed` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `lastCompletedStep` INTEGER NOT NULL DEFAULT 0;
