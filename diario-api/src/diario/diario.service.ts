import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Diario } from './diario.entity';
import { Repository } from 'typeorm';
import { DiarioDTO } from './dto/diarioDTO.dto';
import { DiarioUpdateDTO } from './dto/diarioDTOupdate.dto';
import { PaginationDto } from 'src/Pagination/dto/pagination.dto';

@Injectable()
export class DiarioService {
  constructor(
    @InjectRepository(Diario)
    private diarioRepository: Repository<Diario>,
  ) {}

  async create(diarioDTO: DiarioDTO): Promise<Diario> {
    const diario = this.diarioRepository.create(diarioDTO);
    diario.dhPostagem = new Date();
    return this.diarioRepository.save(diario);
  }

  async findAll(
    paginationDto: PaginationDto,
  ): Promise<{ data: Diario[]; total: number; page: number; limit: number }> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [data, total] = await this.diarioRepository.findAndCount({
      skip,
      take: limit,
    });

    return {
      data,
      total,
      page,
      limit,
    };
  }

  async findOne(id: number): Promise<Diario> {
    const diario = await this.diarioRepository.findOneBy({ id });
    if (!diario) {
      throw new NotFoundException(`Diário com o ID ${id} não encontrado`);
    }
    return diario;
  }

  async update(id: number, diario: DiarioUpdateDTO): Promise<Diario> {
    await this.diarioRepository.update(id, diario);
    return this.findOne(id);
  }

  async remove(id: number) {
    const diario = await this.findOne(id);
    if (!diario) {
      throw new NotFoundException(`Diário com o ID ${id} não encontrado`);
    }
    await this.diarioRepository.delete({ id: id });
  }
}
