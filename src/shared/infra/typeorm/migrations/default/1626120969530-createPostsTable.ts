import { MigrationInterface, QueryRunner } from 'typeorm';

export class createPostsTable1626120969530 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
		create table if not exists posts (
			id integer not null unique primary key AUTOINCREMENT,
			title varchar(124) not null,
			content varchar(2000) not null default '',
			image varchar(255) default null,
			userId integer not null,
			createdAt timestamp not null default current_timestamp,
			updatedAt timestamp not null default current_timestamp,
			constraint fk_posts_users foreign key(userId) references users(id) on delete cascade on update cascade
		);`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query('drop table posts');
	}

}
