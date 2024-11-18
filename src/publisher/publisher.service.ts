import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service'; 
import { Prisma } from '@prisma/client';

@Injectable()
export class PublisherService {
constructor(private readonly db:DbService){}

  create(createPublisherDto: Prisma.PublisherCreateInput) {
    return this.db.publisher.create({data:createPublisherDto});
  }

  findAll() {
    return this.db.publisher.findMany({});
  }

  findOne(id: string) {
    return this.db.publisher.findUnique({where:{id}});
  }

  update(id: string, updatePublisherDto:  Prisma.PublisherUpdateInput) {
    return this;
  }

  remove(id: string) {
    return `This action removes a #${id} publisher`;
  }
}
