import {
  Delete,
  Patch,
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { SalidaService } from './salida.service';
import { CreateSalidaDto } from './dto/salida.dto';

@Controller('Salida_produto')
export class SalidaController {
  constructor(private readonly salidaServiceRepo: SalidaService) {}

  @Post()
  create(@Body() salidaDto: CreateSalidaDto) {
    return this.salidaServiceRepo.create(salidaDto);
  }

  // Metodo para visualizar todos tus productos
  @Get()
  findAll() {
    return this.salidaServiceRepo.findAll();
  }

  //metodo para visualizar un producto en espesifico
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.salidaServiceRepo.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.salidaServiceRepo.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() UpdateSalidaDTO: CreateSalidaDto,
  ) {
    return this.salidaServiceRepo.update(id, UpdateSalidaDTO);
  }
}
