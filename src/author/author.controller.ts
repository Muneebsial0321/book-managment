import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Prisma } from '@prisma/client';

@Controller('author')
export class AuthorController { 
  constructor(private readonly authorService:AuthorService ) {}

  @Post()
  create(@Body() createAuthorDto: Prisma.AuthorCreateInput) {
    return this.authorService.create(createAuthorDto);
  }

  @Get()
  findAll() {
    console.log("fetching auhror")
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: Prisma.AuthorUpdateInput) {
    return this.authorService.update(id, updateAuthorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorService.remove(+id);
  }
}
