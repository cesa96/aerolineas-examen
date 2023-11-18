"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AerolineaAeropuertoModule = void 0;
const common_1 = require("@nestjs/common");
const aerolinea_aeropuerto_service_1 = require("./aerolinea-aeropuerto.service");
const aerolinea_service_1 = require("../aerolinea/aerolinea.service");
const aeropuerto_service_1 = require("../aeropuerto/aeropuerto.service");
const typeorm_1 = require("@nestjs/typeorm");
const aerolinea_entity_1 = require("../aerolinea/aerolinea.entity");
const aeropuerto_entity_1 = require("../aeropuerto/aeropuerto.entity");
const aerolinea_aeropuerto_controller_1 = require("./aerolinea-aeropuerto.controller");
let AerolineaAeropuertoModule = class AerolineaAeropuertoModule {
};
exports.AerolineaAeropuertoModule = AerolineaAeropuertoModule;
exports.AerolineaAeropuertoModule = AerolineaAeropuertoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([aerolinea_entity_1.AerolineaEntity, aeropuerto_entity_1.AeropuertoEntity])],
        providers: [aerolinea_aeropuerto_service_1.AerolineaAeropuertoService, aerolinea_service_1.AerolineaService, aeropuerto_service_1.AeropuertoService],
        controllers: [aerolinea_aeropuerto_controller_1.AerolineaAeropuertoController]
    })
], AerolineaAeropuertoModule);
//# sourceMappingURL=aerolinea-aeropuerto.module.js.map