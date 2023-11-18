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
exports.AerolineaAeropuertoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const aeropuerto_entity_1 = require("../aeropuerto/aeropuerto.entity");
const aerolinea_entity_1 = require("../aerolinea/aerolinea.entity");
const typeorm_2 = require("typeorm");
const business_errors_1 = require("../shared/errors/business-errors");
let AerolineaAeropuertoService = class AerolineaAeropuertoService {
    constructor(aerolineaRepository, aeropuertoRepository) {
        this.aerolineaRepository = aerolineaRepository;
        this.aeropuertoRepository = aeropuertoRepository;
    }
    async addAeropuertoAerolinea(aerolineaId, aeropuertoId) {
        const aeropuerto = await this.aeropuertoRepository.findOne({ where: { id: aeropuertoId } });
        if (!aeropuerto)
            throw new business_errors_1.BusinessLogicException("The aeropuerto with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        const aerolinea = await this.aerolineaRepository.findOne({ where: { id: aerolineaId }, relations: ["aeropuertos"] });
        if (!aerolinea)
            throw new business_errors_1.BusinessLogicException("The aerolinea with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        aerolinea.aeropuertos = [...aerolinea.aeropuertos, aeropuerto];
        return await this.aerolineaRepository.save(aerolinea);
    }
    async findAeropuertoByAerolineaIdAeropuertoId(aerolineaId, aeropuertoId) {
        const aeropuerto = await this.aeropuertoRepository.findOne({ where: { id: aeropuertoId } });
        if (!aeropuerto)
            throw new business_errors_1.BusinessLogicException("The aeropuerto with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        const aerolinea = await this.aerolineaRepository.findOne({ where: { id: aerolineaId }, relations: ["aeropuertos"] });
        if (!aerolinea)
            throw new business_errors_1.BusinessLogicException("The aerolinea with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        const aerolineaAeropuerto = aerolinea.aeropuertos.find(e => e.id === aeropuerto.id);
        if (!aerolineaAeropuerto)
            throw new business_errors_1.BusinessLogicException("The aeropuerto with the given id is not associated to the aerolinea", business_errors_1.BusinessError.PRECONDITION_FAILED);
        return aerolineaAeropuerto;
    }
    async findAeropuertosByAerolineaId(aerolineaId) {
        const aerolinea = await this.aerolineaRepository.findOne({ where: { id: aerolineaId }, relations: ["aeropuertos"] });
        if (!aerolinea)
            throw new business_errors_1.BusinessLogicException("The aerolinea with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        return aerolinea.aeropuertos;
    }
    async associateAeropuertosAerolinea(aerolineaId, aeropuertos) {
        const aerolinea = await this.aerolineaRepository.findOne({ where: { id: aerolineaId }, relations: ["aeropuertos"] });
        if (!aerolinea)
            throw new business_errors_1.BusinessLogicException("The aerolinea with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        for (let i = 0; i < aeropuertos.length; i++) {
            const aeropuerto = await this.aeropuertoRepository.findOne({ where: { id: aeropuertos[i].id } });
            if (!aeropuerto)
                throw new business_errors_1.BusinessLogicException("The aeropuerto with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        }
        aerolinea.aeropuertos = aeropuertos;
        return await this.aerolineaRepository.save(aerolinea);
    }
    async deleteAeropuertoAerolinea(aerolineaId, aeropuertoId) {
        const aeropuerto = await this.aeropuertoRepository.findOne({ where: { id: aeropuertoId } });
        if (!aeropuerto)
            throw new business_errors_1.BusinessLogicException("The aeropuerto with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        const aerolinea = await this.aerolineaRepository.findOne({ where: { id: aerolineaId }, relations: ["aeropuertos"] });
        if (!aerolinea)
            throw new business_errors_1.BusinessLogicException("The aerolinea with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        const aerolineaAeropuerto = aerolinea.aeropuertos.find(e => e.id === aeropuerto.id);
        if (!aerolineaAeropuerto)
            throw new business_errors_1.BusinessLogicException("The aeropuerto with the given id is not associated to the aerolinea", business_errors_1.BusinessError.PRECONDITION_FAILED);
        aerolinea.aeropuertos = aerolinea.aeropuertos.filter(e => e.id !== aeropuertoId);
        await this.aerolineaRepository.save(aerolinea);
    }
};
exports.AerolineaAeropuertoService = AerolineaAeropuertoService;
exports.AerolineaAeropuertoService = AerolineaAeropuertoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(aerolinea_entity_1.AerolineaEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(aeropuerto_entity_1.AeropuertoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AerolineaAeropuertoService);
//# sourceMappingURL=aerolinea-aeropuerto.service.js.map