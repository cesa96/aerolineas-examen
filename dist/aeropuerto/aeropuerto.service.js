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
exports.AeropuertoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const business_errors_1 = require("../shared/errors/business-errors");
const typeorm_2 = require("typeorm");
const aeropuerto_entity_1 = require("./aeropuerto.entity");
let AeropuertoService = class AeropuertoService {
    constructor(aeropuertoRepository) {
        this.aeropuertoRepository = aeropuertoRepository;
    }
    async findAll() {
        return await this.aeropuertoRepository.find({ relations: ["aerolineas"] });
    }
    async findOne(id) {
        const aeropuerto = await this.aeropuertoRepository.findOne({ where: { id }, relations: ["aerolineas"] });
        if (!aeropuerto)
            throw new business_errors_1.BusinessLogicException("The aeropuerto with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        return aeropuerto;
    }
    async create(aeropuerto) {
        return await this.aeropuertoRepository.save(aeropuerto);
    }
    async update(id, aeropuerto) {
        const persistedAeropuerto = await this.aeropuertoRepository.findOne({ where: { id } });
        if (!persistedAeropuerto)
            throw new business_errors_1.BusinessLogicException("The aeropuerto with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        aeropuerto.id = id;
        return await this.aeropuertoRepository.save(aeropuerto);
    }
    async delete(id) {
        const aeropuerto = await this.aeropuertoRepository.findOne({ where: { id } });
        if (!aeropuerto)
            throw new business_errors_1.BusinessLogicException("The aeropuerto with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        await this.aeropuertoRepository.remove(aeropuerto);
    }
};
exports.AeropuertoService = AeropuertoService;
exports.AeropuertoService = AeropuertoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(aeropuerto_entity_1.AeropuertoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AeropuertoService);
//# sourceMappingURL=aeropuerto.service.js.map