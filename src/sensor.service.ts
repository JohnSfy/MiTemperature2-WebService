import { Injectable } from "@nestjs/common"
import type { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { SensorMeasurement } from "./sensor.entity"

@Injectable()
export class SensorService {
  constructor(
    @InjectRepository(SensorMeasurement)
    private sensorRepo: Repository<SensorMeasurement>,
  ) {}

  async getAllMeasurements() {
    return await this.sensorRepo.find()
  }

  async getByRoom(room: string) {
    return await this.sensorRepo.find({ where: { sensor_name: room } })
  }

  async getLatestMeasurements(limit = 15000) {
    return await this.sensorRepo.find({
      order: { timestamp: "DESC" },
      take: limit,
    })
  }

  async getLatestByRoom(room: string, limit = 15000) {
    return await this.sensorRepo.find({
      where: { sensor_name: room },
      order: { timestamp: "DESC" },
      take: limit,
    })
  }
}
