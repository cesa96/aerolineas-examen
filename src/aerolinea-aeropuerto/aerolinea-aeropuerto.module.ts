import { Module } from '@nestjs/common';
import { AerolineaAeropuertoService } from './aerolinea-aeropuerto.service';
import { AerolineaService } from '../aerolinea/aerolinea.service';
import { AeropuertoService } from '../aeropuerto/aeropuerto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AerolineaEntity } from '../aerolinea/aerolinea.entity';
import { AeropuertoEntity } from '../aeropuerto/aeropuerto.entity';
import { AerolineaAeropuertoController } from './aerolinea-aeropuerto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AerolineaEntity, AeropuertoEntity])],
  providers: [AerolineaAeropuertoService, AerolineaService, AeropuertoService],
  controllers: [AerolineaAeropuertoController]
})
export class AerolineaAeropuertoModule {}
