import { Controller, Get, Param } from '@nestjs/common';
import { SensorService } from './sensor.service';

@Controller('sensors')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @Get()
  getAll() {
    return this.sensorService.getAllMeasurements();
  }

  @Get(':room')
  getByRoom(@Param('room') room: string) {
    return this.sensorService.getByRoom(room);
  }
}
