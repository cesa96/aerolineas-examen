/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/testing-config'
import { AeropuertoEntity } from './aeropuerto.entity';
import { AeropuertoService } from './aeropuerto.service';

import { faker } from '@faker-js/faker';

describe('AeropuertoService', () => {
  let service: AeropuertoService;
  let repository: Repository<AeropuertoEntity>;
  let aeropuertosList: AeropuertoEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [AeropuertoService],
    }).compile();

    service = module.get<AeropuertoService>(AeropuertoService);
    repository = module.get<Repository<AeropuertoEntity>>(getRepositoryToken(AeropuertoEntity));
    await seedDatabase();
  });

  const seedDatabase = async () => {
    repository.clear();
    aeropuertosList = [];
    for(let i = 0; i < 5; i++){
        const aeropuerto: AeropuertoEntity = await repository.save({
        name: faker.company.name(), 
        code: faker.lorem.sentence(), 
        country: faker.location.country() , 
        city: faker.location.city()})
        aeropuertosList.push(aeropuerto);
    }
  }
    
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return all aeropuertos', async () => {
    const aeropuertos: AeropuertoEntity[] = await service.findAll();
    expect(aeropuertos).not.toBeNull();
    expect(aeropuertos).toHaveLength(aeropuertosList.length);
  });

  it('findOne should return a aeropuerto by id', async () => {
    const storedAeropuerto: AeropuertoEntity = aeropuertosList[0];
    const aeropuerto: AeropuertoEntity = await service.findOne(storedAeropuerto.id);
    expect(aeropuerto).not.toBeNull();
    expect(aeropuerto.name).toEqual(storedAeropuerto.name);
    expect(aeropuerto.code).toEqual(storedAeropuerto.code);
    expect(aeropuerto.country).toEqual(storedAeropuerto.country);
    expect(aeropuerto.city).toEqual(storedAeropuerto.city);
  });

  it('findOne should throw an exception for an invalid aeropuerto', async () => {
    await expect(() => service.findOne("0")).rejects.toHaveProperty("message", "The aeropuerto with the given id was not found")
  });

  it('create should return a new aeropuerto', async () => {
    const aeropuerto: AeropuertoEntity = {
      id: "",
      name: faker.company.name(), 
      code: faker.lorem.sentence(), 
      country: faker.location.country(), 
      city: faker.location.city(), 
      aerolineas: []
    }

    const newAeropuerto: AeropuertoEntity = await service.create(aeropuerto);
    expect(newAeropuerto).not.toBeNull();

    const storedAeropuerto: AeropuertoEntity = await repository.findOne({where: {id: newAeropuerto.id}})
    expect(storedAeropuerto).not.toBeNull();
    expect(storedAeropuerto.name).toEqual(newAeropuerto.name)
    expect(storedAeropuerto.code).toEqual(newAeropuerto.code)
    expect(storedAeropuerto.country).toEqual(newAeropuerto.country)
    expect(storedAeropuerto.city).toEqual(newAeropuerto.city)
  });

  it('update should modify a aeropuerto', async () => {
    const aeropuerto: AeropuertoEntity = aeropuertosList[0];
    aeropuerto.name = "New name";
    aeropuerto.code = "New code";
  
    const updatedAeropuerto: AeropuertoEntity = await service.update(aeropuerto.id, aeropuerto);
    expect(updatedAeropuerto).not.toBeNull();
  
    const storedAeropuerto: AeropuertoEntity = await repository.findOne({ where: { id: aeropuerto.id } })
    expect(storedAeropuerto).not.toBeNull();
    expect(storedAeropuerto.name).toEqual(aeropuerto.name)
    expect(storedAeropuerto.code).toEqual(aeropuerto.code)
  });
 
  it('update should throw an exception for an invalid aeropuerto', async () => {
    let aeropuerto: AeropuertoEntity = aeropuertosList[0];
    aeropuerto = {
      ...aeropuerto, name: "New name", code: "New code"
    }
    await expect(() => service.update("0", aeropuerto)).rejects.toHaveProperty("message", "The aeropuerto with the given id was not found")
  });
0
  it('delete should remove a aeropuerto', async () => {
    const aeropuerto: AeropuertoEntity = aeropuertosList[0];
    await service.delete(aeropuerto.id);
  
    const deletedAeropuerto: AeropuertoEntity = await repository.findOne({ where: { id: aeropuerto.id } })
    expect(deletedAeropuerto).toBeNull();
  });

  it('delete should throw an exception for an invalid aeropuerto', async () => {
    const aeropuerto: AeropuertoEntity = aeropuertosList[0];
    await service.delete(aeropuerto.id);
    await expect(() => service.delete("0")).rejects.toHaveProperty("message", "The aeropuerto with the given id was not found")
  });
 
});