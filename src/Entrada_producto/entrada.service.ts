import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entrada } from './entities/entrada.entitys';
import { CreateEntradaDto } from './dto/entrada.dto';

@Injectable()
export class EntradaService {
  constructor(
    @InjectRepository(Entrada)
    private readonly entradaRepository: Repository<Entrada>,
  ) {}

  //metodo para crear un producto
  async create(entradaDto: CreateEntradaDto) {
    const entrada = this.entradaRepository.create(entradaDto);
    await this.entradaRepository.save(entrada);
    return entrada;
  }
  // Metodo para visualizar todos tus productos
  findAll() {
    return this.entradaRepository.find();
  }

  //metodo para visualizar un producto en espesifico
  findOne(id: string) {
    return this.entradaRepository.findOneBy({ id });
  }

  //remover un producto
  async remove(id: string) {
    const entrada = await this.findOne(id);
    await this.entradaRepository.remove(entrada);
    return 'Producto eliminado';
  }

  // actualizar producto
  async update(id: string, cambios: CreateEntradaDto) {
    const findEntrada = await this.findOne(id);
    const updatedEntrada = await this.entradaRepository.merge(
      findEntrada,
      cambios,
    );
    return this.entradaRepository.save(updatedEntrada);
  }
}
