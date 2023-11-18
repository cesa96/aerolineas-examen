import { AeropuertoEntity } from '../aeropuerto/aeropuerto.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AerolineaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
   
    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @Column()
    fundationDate: Date;
    
    @Column()
    webPage: string;

    @ManyToMany(() => AeropuertoEntity, aeropuerto => aeropuerto.aerolineas)
    @JoinTable()
    aeropuertos: AeropuertoEntity[];

}
