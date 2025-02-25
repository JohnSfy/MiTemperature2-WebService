import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'sensor_measurements' }) // Match DB table name
export class SensorMeasurement {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  sensor_name!: string;

  @Column({ type: 'numeric', precision: 5, scale: 2 })
  temperature!: number;

  @Column({ type: 'integer' })
  humidity!: number;

  @Column({ type: 'integer' })
  calibrated_humidity!: number;

  @Column({ type: 'numeric', precision: 4, scale: 3, nullable: true })
  battery_voltage?: number;

  @Column({ type: 'integer', nullable: true })
  battery_percent?: number;

  @Column({ type: 'integer', nullable: true })
  rssi?: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp!: Date;
}
