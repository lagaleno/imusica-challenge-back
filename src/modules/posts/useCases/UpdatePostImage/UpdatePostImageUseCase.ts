import { AppError } from '../../../../shared/errors/AppError';
import { IStorageProvider } from '../../../../shared/providers/StorageProvider/models/IStorageProvider';
import { IPostsRepository } from '../../repositories/IPostsRepository';

interface IUpdatePostImageUseCaseDTO {
	userId: number;
	id: number;
	tmpFilePath: string;
}

export class UpdatePostImageUseCase {

	constructor(
		private postsRepository: IPostsRepository,
		private storageProvider: IStorageProvider
	) { }

	async execute({ id, userId, tmpFilePath }: IUpdatePostImageUseCaseDTO): Promise<void> {
		const post = await this.postsRepository.findById(id);

		if (!post) {
			throw new AppError('Post does not exists', 404);
		}

		if (post.userId !== userId) {
			throw new AppError('Post does not belong to you', 403);
		}

		if (post.image) {
			await this.storageProvider.delete(post.image);
		}
		await this.postsRepository.updatePostImage(id, await this.storageProvider.save(tmpFilePath));
	}
}