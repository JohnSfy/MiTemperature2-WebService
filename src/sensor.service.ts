import type { Repository } from "typeorm"
import type { SensorMeasurement } from "./sensor.entity"

export class SensorService {
  constructor(private sensorRepo: Repository<SensorMeasurement>) {}

  async getAllMeasurements() {
    return await this.sensorRepo.find()
  }

  async getByRoom(room: string) {
    return await this.sensorRepo.find({ where: { sensor_name: room } })
  }

  async getLatestMeasurements(limit = 15000) {
    return await this.sensorRepo.find({
      order: { id: "DESC" }, // Order by ID instead of timestamp for better performance
      take: limit,
    })
  }

  async getLatestByRoom(room: string, limit = 15000) {
    return await this.sensorRepo.find({
      where: { sensor_name: room },
      order: { id: "DESC" }, // Order by ID instead of timestamp for better performance
      take: limit,
    })
  }
}
