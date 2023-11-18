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
exports.AerolineaController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const business_errors_interceptor_1 = require("../shared/interceptors/business-errors/business-errors.interceptor");
const aerolinea_dto_1 = require("./aerolinea.dto");
const aerolinea_entity_1 = require("./aerolinea.entity");
const aerolinea_service_1 = require("./aerolinea.service");
let AerolineaController = class AerolineaController {
    constructor(aerolineaService) {
        this.aerolineaService = aerolineaService;
    }
    async findAll() {
        return await this.aerolineaService.findAll();
    }
    async findOne(aerolineaId) {
        return await this.aerolineaService.findOne(aerolineaId);
    }
    async create(aerolineaDto) {
        const aerolinea = (0, class_transformer_1.plainToInstance)(aerolinea_entity_1.AerolineaEntity, aerolineaDto);
        return await this.aerolineaService.create(aerolinea);
    }
    async update(aerolineaId, aerolineaDto) {
        const aerolinea = (0, class_transformer_1.plainToInstance)(aerolinea_entity_1.AerolineaEntity, aerolineaDto);
        return await this.aerolineaService.update(aerolineaId, aerolinea);
    }
    async delete(aerolineaId) {
        return await this.aerolineaService.delete(aerolineaId);
    }
};
exports.AerolineaController = AerolineaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AerolineaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':aerolineaId'),
    __param(0, (0, common_1.Param)('aerolineaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AerolineaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [aerolinea_dto_1.AerolineaDto]),
    __metadata("design:returntype", Promise)
], AerolineaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':aerolineaId'),
    __param(0, (0, common_1.Param)('aerolineaId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, aerolinea_dto_1.AerolineaDto]),
    __metadata("design:returntype", Promise)
], AerolineaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':aerolineaId'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('aerolineaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AerolineaController.prototype, "delete", null);
exports.AerolineaController = AerolineaController = __decorate([
    (0, common_1.Controller)('airlines'),
    (0, common_1.UseInterceptors)(business_errors_interceptor_1.BusinessErrorsInterceptor),
    __metadata("design:paramtypes", [aerolinea_service_1.AerolineaService])
], AerolineaController);
//# sourceMappingURL=aerolinea.controller.js.map