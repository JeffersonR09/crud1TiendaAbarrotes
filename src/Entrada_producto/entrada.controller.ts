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
import { EntradaService } from './entrada.service';
import { CreateEntradaDto } from './dto/entrada.dto';

@Controller('Entrada_producto')
export class EntradaController {
  constructor(private readonly entradaServiceRepo: EntradaService) {}

  @Post()
  create(@Body() entradaDto: CreateEntradaDto) {
    return this.entradaServiceRepo.create(entradaDto);
  }

  // Metodo para visualizar todos tus productos
  @Get()
  findAll() {
    return this.entradaServiceRepo.findAll();
  }

  //metodo para visualizar un producto en espesifico
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.entradaServiceRepo.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.entradaServiceRepo.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() UpdateEntradaDTO: CreateEntradaDto,
  ) {
    return this.entradaServiceRepo.update(id, UpdateEntradaDTO);
  }
}
