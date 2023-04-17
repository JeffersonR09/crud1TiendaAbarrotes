import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntradaController } from './entrada.controller';
import { EntradaService } from './entrada.service';
import { Entrada } from './entities/entrada.entitys';

@Module({
  imports: [TypeOrmModule.forFeature([Entrada])],
  controllers: [EntradaController],
  providers: [EntradaService],
})
export class EntradaModule {}
