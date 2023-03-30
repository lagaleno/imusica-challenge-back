import { AppError } from '../../../../shared/errors/AppError';
import { IUpdatePostDto } from '../../dtos/IUpdatePostDTO';
import { IPostsRepository } from '../../repositories/IPostsRepository';

interface IUpdatePostUseCaseDTO extends IUpdatePostDto {
	userId: number;
	id: number;
}

export class UpdatePostUseCase {

	constructor(
		private postsRepository: IPostsRepository
	) { }

	async execute({ id, userId, ...rest }: IUpdatePostUseCaseDTO): Promise<void> {
		const post = await this.postsRepository.findById(id);

		if (!post) {
			throw new AppError('Post does not exists', 404);
		}

		if (post.userId !== userId) {
			throw new AppError('Post does not belong to you', 403);
		}

		// TODO: Corrigir bug reportado
		await this.postsRepository.updateById(id, rest);
	}
}