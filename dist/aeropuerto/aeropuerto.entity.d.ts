import { AerolineaEntity } from '../aerolinea/aerolinea.entity';
export declare class AeropuertoEntity {
    id: string;
    name: string;
    code: string;
    country: string;
    city: string;
    aerolineas: AerolineaEntity[];
}
