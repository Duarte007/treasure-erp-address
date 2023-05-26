import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from '../../modules/address/entities/address.entity';
import { DataBaseConnectionService } from './typeorm.config';

const DATABASE_ENTITIES = [Address];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DataBaseConnectionService,
    }),
    TypeOrmModule.forFeature(DATABASE_ENTITIES),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
