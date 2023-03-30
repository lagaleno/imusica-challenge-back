import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../../../users/infra/typeorm/entities/User';
import { IPost } from '../../../entities/IPost';
import { Expose } from 'class-transformer';
import { uploadConfig } from '../../../../../config/upload';

@Entity('posts')
export class Post implements IPost {
	@PrimaryGeneratedColumn({ type: 'int', name: 'id' })
	id: number;

	@Column({ type: 'int' })
	userId: number;

	@Column({ type: 'varchar' })
	title: string;

	@Column({ type: 'varchar' })
	content: string;

	@Column({ type: 'varchar', nullable: true })
	image: string | null;

	@CreateDateColumn()
	createdAt: Date;

	@Expose({ name: 'imageURL' })
	getImageURL(): string | null {
		if (this.image) return `${uploadConfig.diskStorageProviderConfig.publicURL}/${this.image}`;
		return null;
	}

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne(() => User)
	@JoinColumn({ name: 'userId', referencedColumnName: 'id' })
	author?: User;

}