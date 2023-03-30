import { AppError } from '../../../../shared/errors/AppError';
import { IPostsRepository } from '../../repositories/IPostsRepository';

interface IDeletePostUseCaseDTO {
	userId: number;
	id: number;
}

export class DeletePostUseCase {

	constructor(
		private postsRepository: IPostsRepository
	) { }

	async execute({ id, userId }: IDeletePostUseCaseDTO): Promise<void> {
		const post = await this.postsRepository.findById(id);

		if (!post) {
			throw new AppError('Post does not exists', 404);
		}

		if (post.userId !== userId) {
			throw new AppError('Post does not belong to you', 403);
		}

		await this.postsRepository.deletePostById(id);
	}
}