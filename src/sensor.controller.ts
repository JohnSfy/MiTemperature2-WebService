import { Controller, Get, Param } from "@nestjs/common"
import type { SensorService } from "./sensor.service"

@Controller("sensors")
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @Get('latest/:limit')
  getLatest(@Param('limit') limit: number) {
    // Ensure limit is a number and cap it at 15000
    const safeLimit = Math.min(Number(limit) || 15000, 15000);
    return this.sensorService.getLatestMeasurements(safeLimit);
  }

  @Get(":room/latest/:limit")
  getLatestByRoom(@Param('room') room: string, @Param('limit') limit: number) {
    // Ensure limit is a number and cap it at 15000
    const safeLimit = Math.min(Number(limit) || 15000, 15000)
    return this.sensorService.getLatestByRoom(room, safeLimit)
  }

  @Get(':room')
  getByRoom(@Param('room') room: string) {
    return this.sensorService.getLatestByRoom(room, 15000);
  }

  @Get()
  getAll() {
    return this.sensorService.getLatestMeasurements(15000)
  }
}
