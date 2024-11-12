import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService as db } from 'src/db/db.service';

@Injectable()
export class AuthorService {
  constructor(private readonly db: db) { }

  async create(createAuthorDto: Prisma.AuthorCreateInput) {
    return await this.db.author.create({ data: createAuthorDto });

  }

  async findAll() {
    return await this.db.author.findMany({});
  }

  async findOne(id: string) {
    return await this.db.author.findUnique({
      where: {
        id
      },
      include: {
        books: true
      }
    }
    );;
  }

  update(id: string, updateAuthorDto: Prisma.AuthorUpdateInput) {
    return this.db.author.update({
      where: {
        id
      },
      data: updateAuthorDto

    }
  )}

  async remove(id: string) {
    return await this.db.author.delete({
      where: {
        id
      }
    });
  }
}
