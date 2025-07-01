/*
  Warnings:

  - A unique constraint covering the columns `[zip]` on the table `location_zip_code_unserviced` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `location_zip_code_unserviced_zip_key` ON `location_zip_code_unserviced`(`zip`);
