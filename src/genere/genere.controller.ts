import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenereService } from './genere.service';
import { Prisma } from '@prisma/client';

@Controller('genere')
export class GenereController {
  constructor(private readonly genereService: GenereService) {}

  @Post()
  create(@Body() createGenereDto: Prisma.GenereCreateInput) {
    return this.genereService.create(createGenereDto);
  }

  @Get()
  findAll() {
    return this.genereService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genereService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenereDto: Prisma.GenereUpdateInput) {
    return this.genereService.update(id, updateGenereDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genereService.remove(id);
  }
}
