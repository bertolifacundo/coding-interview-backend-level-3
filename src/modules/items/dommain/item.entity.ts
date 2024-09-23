import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'items' })
export class Item {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;

    @Column('decimal', { transformer: { from: (value: string) => parseFloat(value), to: (value: number) => value } })
    price!: number;
}
