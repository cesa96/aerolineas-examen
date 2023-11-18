import { AeropuertoEntity } from '../aeropuerto/aeropuerto.entity';
import { AerolineaEntity } from '../aerolinea/aerolinea.entity';
import { Repository } from 'typeorm';
export declare class AerolineaAeropuertoService {
    private readonly aerolineaRepository;
    private readonly aeropuertoRepository;
    constructor(aerolineaRepository: Repository<AerolineaEntity>, aeropuertoRepository: Repository<AeropuertoEntity>);
    addAeropuertoAerolinea(aerolineaId: string, aeropuertoId: string): Promise<AerolineaEntity>;
    findAeropuertoByAerolineaIdAeropuertoId(aerolineaId: string, aeropuertoId: string): Promise<AeropuertoEntity>;
    findAeropuertosByAerolineaId(aerolineaId: string): Promise<AeropuertoEntity[]>;
    associateAeropuertosAerolinea(aerolineaId: string, aeropuertos: AeropuertoEntity[]): Promise<AerolineaEntity>;
    deleteAeropuertoAerolinea(aerolineaId: string, aeropuertoId: string): Promise<void>;
}
