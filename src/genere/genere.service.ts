import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
@Injectable()
export class GenereService {

  constructor(private readonly  db:DbService){}

  create(createGenereDto: Prisma.GenereCreateInput) {
    return this.db.genere.create({data:createGenereDto});
  }

  findAll() {
    return this.db.genere.findMany();
  }

  findOne(id: string) {
    return this.db.genere.findUnique({where:{id}});
  }

  update(id: string, updateGenereDto: Prisma.GenereUpdateInput) {
    return this.db.genere.update({where:{id},data:updateGenereDto})
  }

  remove(id: string) {
    return this.db.genere.delete({where:{id}})
  }
}
