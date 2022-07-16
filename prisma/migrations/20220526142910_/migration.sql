-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_property_id_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "property_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Property"("id") ON DELETE SET NULL ON UPDATE CASCADE;
