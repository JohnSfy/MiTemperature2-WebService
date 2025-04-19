import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SensorMeasurement } from './sensor.entity';

@Injectable()
export class SensorService {
  constructor(
    @InjectRepository(SensorMeasurement)
    private sensorRepo: Repository<SensorMeasurement>,
  ) {}

  // async getAllMeasurements() {
  //   return await this.sensorRepo.find();
  // }

  // async getByRoom(room: string) {
  //   return await this.sensorRepo.find({ where: { sensor_name: room } });
  // }

  async getAllMeasurements(limit = 15000) {
    return await this.sensorRepo.find({
      take: limit,
      order: { id: 'DESC' }, // Optional: fetch the latest records first
    });
  }
  
  async getByRoom(room: string, limit = 15000) {
    return await this.sensorRepo.find({
      where: { sensor_name: room },
      take: limit,
      order: { id: 'DESC' }, // Optional: fetch the latest records first
    });
  }
}
