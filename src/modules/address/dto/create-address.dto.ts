import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateAddressDTO {
  @ApiProperty()
  @IsUUID()
  @IsDefined()
  @IsNotEmpty()
  uuid: string;
  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  street: string;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  complement: string;
  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  neighborhood: string;
  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  city: string;
  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  state: string;
  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  postal_code: string;
  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  country: string;
}
