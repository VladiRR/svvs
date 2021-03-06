import {MigrationInterface, QueryRunner} from "typeorm";

/**
 * add init user
 * username: admin
 * email: admin@example.com
 * password: root
 */

export class User1615034419351 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      INSERT INTO users (username, email, password)
      VALUES ('admin', 'admin@example.com', '$2a$10$d6wR5W1xIiTsQPG4aTuqIOkct0Dpr8TsciVS39YP3NSOwwy1wyPsy')
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      DELETE FROM users WHERE username = 'admin












































































































































      '
      `)
    }

}
