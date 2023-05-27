import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TokenAuthQueryParam } from 'src/common/dtos/token-auth-qs.dto';
import { PubsubPostBody } from '../../common/pubsub/interfaces/pubsub-post-body';
import { PubSub } from '../../common/pubsub/pubsub.decorator';
import { CreateAddressDTO } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressService } from './services/addresses.service';

@Controller('addresses')
@ApiTags('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(@Body() createAddressDto: CreateAddressDTO) {
    return this.addressService.create(createAddressDto);
  }

  @Post('event')
  @PubSub()
  createByEvent(
    @Body() addressEvent: PubsubPostBody,
    @Query() params: TokenAuthQueryParam,
  ) {
    const createAddressDto: CreateAddressDTO = addressEvent.message
      .data as unknown as CreateAddressDTO;
    return this.addressService.create(createAddressDto);
  }

  @Get()
  findAll() {
    return this.addressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(+id, updateAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressService.remove(+id);
  }
}
