import { AerolineaDto } from './aerolinea.dto';
import { AerolineaEntity } from './aerolinea.entity';
import { AerolineaService } from './aerolinea.service';
export declare class AerolineaController {
    private readonly aerolineaService;
    constructor(aerolineaService: AerolineaService);
    findAll(): Promise<AerolineaEntity[]>;
    findOne(aerolineaId: string): Promise<AerolineaEntity>;
    create(aerolineaDto: AerolineaDto): Promise<AerolineaEntity>;
    update(aerolineaId: string, aerolineaDto: AerolineaDto): Promise<AerolineaEntity>;
    delete(aerolineaId: string): Promise<void>;
}
