import { AeropuertoEntity } from 'src/aeropuerto/aeropuerto.entity';
import { AeropuertoDto } from '../aeropuerto/aeropuerto.dto';
import { AerolineaAeropuertoService } from './aerolinea-aeropuerto.service';
export declare class AerolineaAeropuertoController {
    private readonly aerolineaAeropuertoService;
    constructor(aerolineaAeropuertoService: AerolineaAeropuertoService);
    addAeropuertoAerolinea(airlineId: string, airportId: string): Promise<import("../aerolinea/aerolinea.entity").AerolineaEntity>;
    findAeropuertoByAirlineIdAirportId(airlineId: string, airportId: string): Promise<AeropuertoEntity>;
    findAeropuertosByAirlineId(airlineId: string): Promise<AeropuertoEntity[]>;
    associateAeropuertosAerolinea(aeropuertosDto: AeropuertoDto[], airlineId: string): Promise<import("../aerolinea/aerolinea.entity").AerolineaEntity>;
    deleteAeropuertoAerolinea(airlineId: string, airportId: string): Promise<void>;
}
