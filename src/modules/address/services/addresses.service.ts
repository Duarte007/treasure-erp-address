import { Injectable } from '@nestjs/common';
import { CreateAddressDTO } from '../dto/create-address.dto';
import { UpdateAddressDto } from '../dto/update-address.dto';
import { AddressesRepository } from '../repositories/addresses.repository';

@Injectable()
export class AddressService {
  constructor(private addressesRepository: AddressesRepository) {}

  create(createAddressDto: CreateAddressDTO) {
    return this.addressesRepository.createAddress(createAddressDto);
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
