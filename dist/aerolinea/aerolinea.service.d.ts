import { Repository } from 'typeorm';
import { AerolineaEntity } from './aerolinea.entity';
export declare class AerolineaService {
    private readonly aerolineaRepository;
    constructor(aerolineaRepository: Repository<AerolineaEntity>);
    findAll(): Promise<AerolineaEntity[]>;
    findOne(id: string): Promise<AerolineaEntity>;
    create(aerolinea: AerolineaEntity): Promise<AerolineaEntity>;
    update(id: string, aerolinea: AerolineaEntity): Promise<AerolineaEntity>;
    delete(id: string): Promise<void>;
}
