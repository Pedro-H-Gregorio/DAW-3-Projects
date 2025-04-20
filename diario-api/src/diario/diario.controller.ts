import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { DiarioService } from './diario.service';
import { DiarioDTO } from './dto/diarioDTO.dto';
import { DiarioUpdateDTO } from './dto/diarioDTOupdate.dto';
import { PaginationDto } from 'src/Pagination/dto/pagination.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'src/config/multer.config';
import { Express } from 'express';

@Controller('diarios')
export class DiarioController {
  constructor(private readonly diarioService: DiarioService) {}

  @Post()
  create(@Body() diarioDTO: DiarioDTO) {
    return this.diarioService.create(diarioDTO);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.diarioService.findAll(paginationDto);
  }

  @Get(':id')
  findOnde(@Param('id', ParseIntPipe) id: number) {
    return this.diarioService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDiarioDTO: DiarioUpdateDTO,
  ) {
    return this.diarioService.update(id, updateDiarioDTO);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.diarioService.remove(+id);
  }

  @Post(':id/upload')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async uploadFile(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new NotFoundException('Arquivo não encontrado');
    }

    const diario = await this.diarioService.findOne(id);

    if (!diario) {
      throw new NotFoundException(`Diário com o ID ${id} não encontrado`);
    }

    const updateDto: DiarioUpdateDTO = {
      nomeAutor: diario.nomeAutor,
      email: diario.email,
      descricao: diario.descricao,
      imagemPath: file.path.replace(process.cwd() + '/dist/', ''),
    };
    return this.diarioService.update(id, updateDto);
  }
}
