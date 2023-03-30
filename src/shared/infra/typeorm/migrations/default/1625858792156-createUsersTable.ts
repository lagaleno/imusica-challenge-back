import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUsersTable1625858792156 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`create table if not exists users(
			id integer not null unique primary key AUTOINCREMENT,
			name varchar(124) not null,
			avatar varchar(255) default null,
			email varchar(255) not null unique,
			password varchar(255) not null,
			createdAt timestamp not null default current_timestamp,
			updatedAt timestamp not null default current_timestamp
		);`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query('drop table users;');
	}

}
