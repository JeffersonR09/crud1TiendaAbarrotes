import { IsString } from 'class-validator';
import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class CreateEntradaDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  codigo: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  articulo: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  neto_o_tamaño: string;

  @IsString()
  @MinLength(100)
  fecha_entrada: string;

  @IsNumber()
  @IsNotEmpty()
  cantidad: number;
}
