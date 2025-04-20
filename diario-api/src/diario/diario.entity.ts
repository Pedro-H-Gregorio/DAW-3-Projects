import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Diario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nomeAutor: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: true })
  categoria?: string;

  @Column({ nullable: false })
  descricao: string;

  @Column({ nullable: true })
  imagemPath?: string;
}
