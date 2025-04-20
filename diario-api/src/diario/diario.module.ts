import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diario } from './diario.entity';
import { DiarioController } from './diario.controller';
import { DiarioService } from './diario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Diario])],
  controllers: [DiarioController],
  providers: [DiarioService],
})
export class DiarioModule {}
