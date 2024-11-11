-- CreateTable
CREATE TABLE "Author" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthDay" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "ISBN" TEXT NOT NULL,
    "publishYear" TIMESTAMP(3) NOT NULL,
    "authorId" TEXT NOT NULL,
    "publisherId" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genere" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "Genere_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookDetail" (
    "id" TEXT NOT NULL,
    "pageCount" INTEGER NOT NULL,
    "lang" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,

    CONSTRAINT "BookDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publisher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contactInfo" TEXT NOT NULL,

    CONSTRAINT "Publisher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_books_genere" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "BookDetail_bookId_key" ON "BookDetail"("bookId");

-- CreateIndex
CREATE UNIQUE INDEX "_books_genere_AB_unique" ON "_books_genere"("A", "B");

-- CreateIndex
CREATE INDEX "_books_genere_B_index" ON "_books_genere"("B");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookDetail" ADD CONSTRAINT "BookDetail_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_books_genere" ADD CONSTRAINT "_books_genere_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_books_genere" ADD CONSTRAINT "_books_genere_B_fkey" FOREIGN KEY ("B") REFERENCES "Genere"("id") ON DELETE CASCADE ON UPDATE CASCADE;
