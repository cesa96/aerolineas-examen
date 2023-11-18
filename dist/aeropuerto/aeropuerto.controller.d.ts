import { AeropuertoDto } from './aeropuerto.dto';
import { AeropuertoEntity } from './aeropuerto.entity';
import { AeropuertoService } from './aeropuerto.service';
export declare class AeropuertoController {
    private readonly aeropuertoService;
    constructor(aeropuertoService: AeropuertoService);
    findAll(): Promise<AeropuertoEntity[]>;
    findOne(aeropuertoId: string): Promise<AeropuertoEntity>;
    create(aeropuertoDto: AeropuertoDto): Promise<AeropuertoEntity>;
    update(aeropuertoId: string, aeropuertoDto: AeropuertoDto): Promise<AeropuertoEntity>;
    delete(aeropuertoId: string): Promise<void>;
}
