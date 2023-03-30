import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IUser } from '../../../entities/IUser';
import { Expose, Exclude } from 'class-transformer';
import { uploadConfig } from '../../../../../config/upload';

@Entity({ name: 'users' })
export class User implements IUser {
	@PrimaryGeneratedColumn({ name: 'id', type: 'int' })
	id: number;

	@Column({ type: 'varchar' })
	name: string;

	@Column({ type: 'varchar' })
	email: string;

	@Exclude()
	@Column({ type: 'varchar' })
	password: string;

	@Column({ type: 'varchar', nullable: true })
	avatar: string | null;

	@Expose({ name: 'avatarURL' })
	getImageURL(): string | null {
		if (this.avatar) return `${uploadConfig.diskStorageProviderConfig.publicURL}/${this.avatar}`;
		return null;
	}

	@CreateDateColumn()
	createdAt: string | Date;

	@UpdateDateColumn()
	updatedAt: string | Date;
}