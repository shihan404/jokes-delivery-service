import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('jokes')
export class Joke {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    content: string;

    @Column({ length: 100 })
    type: string;

    @CreateDateColumn()
    createdAt: Date;
}

