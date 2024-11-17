import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';


@Injectable()
export class BookService {
  constructor(private readonly db:DbService){}
  create(createBookDto: Prisma.BookCreateInput) {
    return this.db.book.create({data:createBookDto});
  }

  findAll() {
    return `This action returns all book`;
  }

  findOne(id: string) {
    return `This action returns a #${id} book`;
  }

  update(id: string, updateBookDto: Prisma.BookUpdateInput) {
    return `This action updates a #${id} book`;
  }

  remove(id:string ) {
    return `This action removes a #${id} book`;
  }
}
