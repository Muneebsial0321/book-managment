import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';


@Injectable()
export class BookService {
  constructor(private readonly db:DbService){}
  create(createBookDto: Prisma.BookCreateInput) {
    try {
      return this.db.book.create({data:createBookDto});
      
    } catch (error) {
      console.log({error})
    }
  }

  findAll() {
    return this.db.book.findMany({});
  }

  findOne(id: string) {
    return this.db.book.findUnique({where:{id}});
  }

  update(id: string, updateBookDto: Prisma.BookUpdateInput) {
    return this.db.book.update({data:updateBookDto,where:{id}});
  }

  remove(id:string ) {
    return this.db.book.delete({where:{id}});
  }
}
