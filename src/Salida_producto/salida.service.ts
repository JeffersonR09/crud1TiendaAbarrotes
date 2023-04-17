import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salida } from './entities/salida.entitys';
import { CreateSalidaDto } from './dto/salida.dto';

@Injectable()
export class SalidaService {
  constructor(
    @InjectRepository(Salida)
    private readonly salidaRepository: Repository<Salida>,
  ) {}

  //metodo para crear un producto
  async create(salidaDto: CreateSalidaDto) {
    const salida = this.salidaRepository.create(salidaDto);
    await this.salidaRepository.save(salida);
    return salida;
  }
  // Metodo para visualizar todos tus productos
  findAll() {
    return this.salidaRepository.find();
  }

  //metodo para visualizar un producto en espesifico
  findOne(id: string) {
    return this.salidaRepository.findOneBy({ id });
  }

  //remover un producto
  async remove(id: string) {
    const salida = await this.findOne(id);
    await this.salidaRepository.remove(salida);
    return 'Dato eliminado';
  }

  // actualizar producto
  async update(id: string, cambios: CreateSalidaDto) {
    const findSalida = await this.findOne(id);
    const updatedSalida = await this.salidaRepository.merge(
      findSalida,
      cambios,
    );
    return this.salidaRepository.save(updatedSalida);
  }
}
