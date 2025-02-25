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

  async getAllMeasurements() {
    return await this.sensorRepo.find();
  }

  async getByRoom(room: string) {
    return await this.sensorRepo.find({ where: { sensor_name: room } });
  }
}
