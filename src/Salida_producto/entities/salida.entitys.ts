import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Salida {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', unique: true })
  codigo: string;

  @Column({ type: 'text' })
  articulo: string;

  @Column({ type: 'text' })
  neto_o_tamaño: string;

  @Column({ type: 'text' })
  fecha_salida: string;

  @Column({ type: 'numeric' })
  cantidad: number;
}
