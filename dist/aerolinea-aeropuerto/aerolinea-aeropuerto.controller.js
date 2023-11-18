"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AerolineaAeropuertoController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const aeropuerto_entity_1 = require("../aeropuerto/aeropuerto.entity");
const business_errors_interceptor_1 = require("../shared/interceptors/business-errors/business-errors.interceptor");
const aerolinea_aeropuerto_service_1 = require("./aerolinea-aeropuerto.service");
let AerolineaAeropuertoController = class AerolineaAeropuertoController {
    constructor(aerolineaAeropuertoService) {
        this.aerolineaAeropuertoService = aerolineaAeropuertoService;
    }
    async addAeropuertoAerolinea(airlineId, airportId) {
        return await this.aerolineaAeropuertoService.addAeropuertoAerolinea(airlineId, airportId);
    }
    async findAeropuertoByAirlineIdAirportId(airlineId, airportId) {
        return await this.aerolineaAeropuertoService.findAeropuertoByAerolineaIdAeropuertoId(airlineId, airportId);
    }
    async findAeropuertosByAirlineId(airlineId) {
        return await this.aerolineaAeropuertoService.findAeropuertosByAerolineaId(airlineId);
    }
    async associateAeropuertosAerolinea(aeropuertosDto, airlineId) {
        const aeropuertos = (0, class_transformer_1.plainToInstance)(aeropuerto_entity_1.AeropuertoEntity, aeropuertosDto);
        return await this.aerolineaAeropuertoService.associateAeropuertosAerolinea(airlineId, aeropuertos);
    }
    async deleteAeropuertoAerolinea(airlineId, airportId) {
        return await this.aerolineaAeropuertoService.deleteAeropuertoAerolinea(airlineId, airportId);
    }
};
exports.AerolineaAeropuertoController = AerolineaAeropuertoController;
__decorate([
    (0, common_1.Post)(':airlineId/airports/:airportId'),
    __param(0, (0, common_1.Param)('airlineId')),
    __param(1, (0, common_1.Param)('airportId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AerolineaAeropuertoController.prototype, "addAeropuertoAerolinea", null);
__decorate([
    (0, common_1.Get)(':airlineId/airports/:airportId'),
    __param(0, (0, common_1.Param)('airlineId')),
    __param(1, (0, common_1.Param)('airportId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AerolineaAeropuertoController.prototype, "findAeropuertoByAirlineIdAirportId", null);
__decorate([
    (0, common_1.Get)(':airlineId/airports'),
    __param(0, (0, common_1.Param)('airlineId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AerolineaAeropuertoController.prototype, "findAeropuertosByAirlineId", null);
__decorate([
    (0, common_1.Put)(':airlineId/airports'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('airlineId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], AerolineaAeropuertoController.prototype, "associateAeropuertosAerolinea", null);
__decorate([
    (0, common_1.Delete)(':airlineId/airports/:airportId'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('airlineId')),
    __param(1, (0, common_1.Param)('airportId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AerolineaAeropuertoController.prototype, "deleteAeropuertoAerolinea", null);
exports.AerolineaAeropuertoController = AerolineaAeropuertoController = __decorate([
    (0, common_1.Controller)('airlines'),
    (0, common_1.UseInterceptors)(business_errors_interceptor_1.BusinessErrorsInterceptor),
    __metadata("design:paramtypes", [aerolinea_aeropuerto_service_1.AerolineaAeropuertoService])
], AerolineaAeropuertoController);
//# sourceMappingURL=aerolinea-aeropuerto.controller.js.map