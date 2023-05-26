import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsOptional, IsString } from 'class-validator';

export class CreateAddressDTO {
  @ApiProperty()
  @IsString()
  @IsDefined()
  street: string;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  complement: string;
  @ApiProperty()
  @IsString()
  @IsDefined()
  neighborhood: string;
  @ApiProperty()
  @IsString()
  @IsDefined()
  city: string;
  @ApiProperty()
  @IsString()
  @IsDefined()
  state: string;
  @ApiProperty()
  @IsString()
  @IsDefined()
  postal_code: string;
  @ApiProperty()
  @IsString()
  @IsDefined()
  country: string;
}
