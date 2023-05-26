import { v4 as uuidv4 } from 'uuid';
import { CreateAddressDTO } from '../dto/create-address.dto';
import { AddressRecord } from '../entities/address.entity';

export class AddressAdapter {
  static toDatabase(addressData: Partial<CreateAddressDTO>): AddressRecord {
    return {
      address_uuid: addressData.uuid || uuidv4(),
      street: addressData.street,
      complement: addressData.complement,
      neighborhood: addressData.neighborhood,
      city: addressData.city,
      state: addressData.state,
      postal_code: addressData.postal_code,
      country: addressData.country,
    };
  }
}
