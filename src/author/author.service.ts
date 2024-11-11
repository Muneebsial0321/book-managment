import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client'; 
import { DbService as db} from 'src/db/db.service';  

@Injectable()
export class AuthorService {
constructor(private readonly db: db ){}

  create(createAuthorDto: Prisma.AuthorCreateInput) {
    this.db.author.create({data:createAuthorDto})
    return 'This action adds a new author';
  }

  findAll() {
    return `This action returns all author`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: Prisma.AuthorUpdateInput){
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
