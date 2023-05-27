import { Injectable, Logger } from '@nestjs/common';
import { AddressAdapter } from '../adapters/address.adapter';
import { CreateAddressDTO } from '../dto/create-address.dto';
import { UpdateAddressDto } from '../dto/update-address.dto';
import { AddressesRepository } from '../repositories/addresses.repository';

@Injectable()
export class AddressService {
  constructor(private addressesRepository: AddressesRepository) {}

  create(createAddressDto: CreateAddressDTO) {
    const addressToSave = AddressAdapter.toDatabase(createAddressDto);
    Logger.log({ message: 'New Address', createAddressDto, addressToSave });
    return this.addressesRepository.createAddress(addressToSave);
  }

  findAll() {
    return this.addressesRepository.getAllAddresses();
  }

  findOne(id: number) {
    return this.addressesRepository.getAddressById(id);
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return this.addressesRepository.updateAddress(id, updateAddressDto);
  }

  remove(id: number) {
    return this.addressesRepository.deleteAddress(id);
  }
}
