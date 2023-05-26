import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'addresses' })
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  address_id: number;

  @Column({ type: 'uuid', nullable: false })
  @Index('idx_address_uuid')
  address_uuid: string;

  @Column({ nullable: false })
  street: string;

  @Column()
  complement: string;

  @Column({ nullable: false })
  neighborhood: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  state: string;

  @Column({ nullable: false })
  postal_code: string;

  @Column({ nullable: false })
  country: string;
}

export interface AddressRecord {
  address_id?: number;
  address_uuid: string;
  street: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}
