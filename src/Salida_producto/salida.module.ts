import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salida } from './entities/salida.entitys';
import { SalidaController } from './salida.controller';
import { SalidaService } from './salida.service';

@Module({
  imports: [TypeOrmModule.forFeature([Salida])],
  controllers: [SalidaController],
  providers: [SalidaService],
})
export class SalidaModule {}
