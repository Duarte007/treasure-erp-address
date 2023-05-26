import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database/database.module';
import { AddressController } from './address.controller';
import { AddressesRepository } from './repositories/addresses.repository';
import { AddressService } from './services/addresses.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AddressController],
  providers: [AddressService, AddressesRepository],
})
export class AddressModule {}
