import { getRepository, Repository } from 'typeorm';
import { ICreatePostDTO } from '../../../dtos/ICreatePostDTO';
import { IUpdatePostDto } from '../../../dtos/IUpdatePostDTO';
import { IPost } from '../../../entities/IPost';
import { IPostsRepository } from '../../../repositories/IPostsRepository';
import { Post } from '../entities/Post';

export class PostsRepository implements IPostsRepository {
	private ormRepository: Repository<Post>;

	constructor() {
		this.ormRepository = getRepository(Post);
	}

	async create(data: ICreatePostDTO): Promise<IPost> {
		return await this.ormRepository.save(this.ormRepository.create(data));
	}

	findAllWithAuthors(): Promise<IPost[]> {
		return this.ormRepository.find({
			relations: ['author']
		});
	}

	findById(id: number): Promise<IPost | undefined> {
		return this.ormRepository.findOne(id);
	}

	async updateById(id: number, data: IUpdatePostDto): Promise<void> {
		await this.ormRepository.update({
			id
		}, data);
	}

	async updatePostImage(id: number, image: string): Promise<void> {
		await this.ormRepository.update({
			id
		}, {
			image
		});
	}

	async deletePostById(id: number): Promise<void> {
		await this.ormRepository.delete({
			id
		});
	}

}