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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AerolineaEntity = void 0;
const aeropuerto_entity_1 = require("../aeropuerto/aeropuerto.entity");
const typeorm_1 = require("typeorm");
let AerolineaEntity = class AerolineaEntity {
};
exports.AerolineaEntity = AerolineaEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AerolineaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AerolineaEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AerolineaEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], AerolineaEntity.prototype, "fundationDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AerolineaEntity.prototype, "webPage", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => aeropuerto_entity_1.AeropuertoEntity, aeropuerto => aeropuerto.aerolineas),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], AerolineaEntity.prototype, "aeropuertos", void 0);
exports.AerolineaEntity = AerolineaEntity = __decorate([
    (0, typeorm_1.Entity)()
], AerolineaEntity);
//# sourceMappingURL=aerolinea.entity.js.map