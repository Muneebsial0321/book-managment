import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { Prisma } from '@prisma/client';

@Controller('publisher')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Post()
  create(@Body() createPublisherDto: Prisma.PublisherCreateInput) {
    return this.publisherService.create(createPublisherDto);
  }

  @Get()
  findAll() {
    return this.publisherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publisherService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePublisherDto:  Prisma.PublisherUpdateInput) {
    return this.publisherService.update(id, updatePublisherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publisherService.remove(id);
  }
}
