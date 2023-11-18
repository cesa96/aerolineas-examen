"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmTestingConfig = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const aeropuerto_entity_1 = require("../../aeropuerto/aeropuerto.entity");
const aerolinea_entity_1 = require("../../aerolinea/aerolinea.entity");
const TypeOrmTestingConfig = () => [
    typeorm_1.TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        entities: [aeropuerto_entity_1.AeropuertoEntity, aerolinea_entity_1.AerolineaEntity],
        synchronize: true,
        keepConnectionAlive: true
    }),
    typeorm_1.TypeOrmModule.forFeature([aeropuerto_entity_1.AeropuertoEntity, aerolinea_entity_1.AerolineaEntity]),
];
exports.TypeOrmTestingConfig = TypeOrmTestingConfig;
//# sourceMappingURL=testing-config.js.map