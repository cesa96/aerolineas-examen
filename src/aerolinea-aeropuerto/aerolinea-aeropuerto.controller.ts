/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { AeropuertoEntity } from 'src/aeropuerto/aeropuerto.entity';
import { AeropuertoDto } from '../aeropuerto/aeropuerto.dto';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { AerolineaAeropuertoService } from './aerolinea-aeropuerto.service';

@Controller('airlines')
@UseInterceptors(BusinessErrorsInterceptor)
export class AerolineaAeropuertoController {
    constructor(private readonly aerolineaAeropuertoService: AerolineaAeropuertoService){}

    @Post(':airlineId/airports/:airportId')
    async addAeropuertoAerolinea(@Param('airlineId') airlineId: string, @Param('airportId') airportId: string){
        return await this.aerolineaAeropuertoService.addAeropuertoAerolinea(airlineId, airportId);
    }

    @Get(':airlineId/airports/:airportId')
    async findAeropuertoByAirlineIdAirportId(@Param('airlineId') airlineId: string, @Param('airportId') airportId: string){
        return await this.aerolineaAeropuertoService.findAeropuertoByAerolineaIdAeropuertoId(airlineId, airportId);
    }

    @Get(':airlineId/airports')
    async findAeropuertosByAirlineId(@Param('airlineId') airlineId: string){
        return await this.aerolineaAeropuertoService.findAeropuertosByAerolineaId(airlineId);
    }

    @Put(':airlineId/airports')
    async associateAeropuertosAerolinea(@Body() aeropuertosDto: AeropuertoDto[], @Param('airlineId') airlineId: string){
        const aeropuertos = plainToInstance(AeropuertoEntity, aeropuertosDto)
        return await this.aerolineaAeropuertoService.associateAeropuertosAerolinea(airlineId, aeropuertos);
    }
    
    @Delete(':airlineId/airports/:airportId')
    @HttpCode(204)
    async deleteAeropuertoAerolinea(@Param('airlineId') airlineId: string, @Param('airportId') airportId: string){
        return await this.aerolineaAeropuertoService.deleteAeropuertoAerolinea(airlineId, airportId);
    }
}