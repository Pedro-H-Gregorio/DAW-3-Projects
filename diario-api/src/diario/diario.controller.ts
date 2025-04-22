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
import { join } from 'path';
import { unlink } from 'fs/promises';

@Controller('diarios')
export class DiarioController {
  constructor(private readonly diarioService: DiarioService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', multerConfig))
  create(
    @Body() diarioDTO: DiarioDTO,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      diarioDTO.imagemPath = file.path.replace(process.cwd() + '/dist/', '');
    }
    return this.diarioService.create(diarioDTO);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.diarioService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.diarioService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDiarioDTO: DiarioUpdateDTO,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      const diario = await this.findOne(id);
      if (diario.imagemPath) {
        await this.deleteFile(diario.imagemPath);
      }
      updateDiarioDTO.imagemPath = file.path.replace(
        process.cwd() + '/dist/',
        '',
      );
    }
    return this.diarioService.update(id, updateDiarioDTO);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const diario = await this.findOne(id);

    if (!diario) {
      throw new NotFoundException(`Diário com o ID ${id} não encontrado`);
    }

    if (diario.imagemPath) {
      await this.deleteFile(diario.imagemPath);
    }

    await this.diarioService.remove(id);
  }

  async deleteFile(relativePath: string): Promise<void> {
    const fullPath = join(__dirname, '..', '..', relativePath);
    try {
      await unlink(fullPath);
    } catch (error) {
      throw new Error(
        `Erro ao remover o arquivo ${relativePath}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
}
