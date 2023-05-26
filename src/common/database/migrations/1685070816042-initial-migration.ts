import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialMigration1685070816042 implements MigrationInterface {
  name = 'initialMigration1685070816042';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "addresses" ("address_id" SERIAL NOT NULL, "address_uuid" uuid NOT NULL, "street" character varying NOT NULL, "complement" character varying NOT NULL, "neighborhood" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "postal_code" character varying NOT NULL, "country" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_7075006c2d82acfeb0ea8c5dce7" PRIMARY KEY ("address_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "idx_address_uuid" ON "addresses" ("address_uuid") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "idx_address_uuid"`);
    await queryRunner.query(`DROP TABLE "addresses"`);
  }
}
