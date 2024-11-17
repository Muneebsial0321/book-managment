-- DropForeignKey
ALTER TABLE "BookDetail" DROP CONSTRAINT "BookDetail_bookId_fkey";

-- AlterTable
ALTER TABLE "BookDetail" ALTER COLUMN "pageCount" DROP NOT NULL,
ALTER COLUMN "lang" DROP NOT NULL,
ALTER COLUMN "summary" DROP NOT NULL,
ALTER COLUMN "bookId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Genere" ALTER COLUMN "desc" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Publisher" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "contactInfo" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "BookDetail" ADD CONSTRAINT "BookDetail_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE SET NULL ON UPDATE CASCADE;
