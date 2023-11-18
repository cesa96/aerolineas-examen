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
exports.AerolineaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const business_errors_1 = require("../shared/errors/business-errors");
const typeorm_2 = require("typeorm");
const aerolinea_entity_1 = require("./aerolinea.entity");
let AerolineaService = class AerolineaService {
    constructor(aerolineaRepository) {
        this.aerolineaRepository = aerolineaRepository;
    }
    async findAll() {
        return await this.aerolineaRepository.find({ relations: ["aeropuertos"] });
    }
    async findOne(id) {
        const aerolinea = await this.aerolineaRepository.findOne({ where: { id }, relations: ["aeropuertos"] });
        if (!aerolinea)
            throw new business_errors_1.BusinessLogicException("The aerolinea with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        return aerolinea;
    }
    async create(aerolinea) {
        return await this.aerolineaRepository.save(aerolinea);
    }
    async update(id, aerolinea) {
        const persistedAerolinea = await this.aerolineaRepository.findOne({ where: { id } });
        if (!persistedAerolinea)
            throw new business_errors_1.BusinessLogicException("The aerolinea with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        aerolinea.id = id;
        return await this.aerolineaRepository.save(aerolinea);
    }
    async delete(id) {
        const aerolinea = await this.aerolineaRepository.findOne({ where: { id } });
        if (!aerolinea)
            throw new business_errors_1.BusinessLogicException("The aerolinea with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        await this.aerolineaRepository.remove(aerolinea);
    }
};
exports.AerolineaService = AerolineaService;
exports.AerolineaService = AerolineaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(aerolinea_entity_1.AerolineaEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AerolineaService);
//# sourceMappingURL=aerolinea.service.js.map