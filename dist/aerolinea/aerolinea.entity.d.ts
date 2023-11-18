import { AeropuertoEntity } from '../aeropuerto/aeropuerto.entity';
export declare class AerolineaEntity {
    id: string;
    name: string;
    description: string;
    fundationDate: Date;
    webPage: string;
    aeropuertos: AeropuertoEntity[];
}
