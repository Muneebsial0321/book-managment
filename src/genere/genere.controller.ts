import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenereService } from './genere.service';
import { CreateGenereDto } from './dto/create-genere.dto';
import { UpdateGenereDto } from './dto/update-genere.dto';

@Controller('genere')
export class GenereController {
  constructor(private readonly genereService: GenereService) {}

  @Post()
  create(@Body() createGenereDto: CreateGenereDto) {
    return this.genereService.create(createGenereDto);
  }

  @Get()
  findAll() {
    return this.genereService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genereService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenereDto: UpdateGenereDto) {
    return this.genereService.update(+id, updateGenereDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genereService.remove(+id);
  }
}
