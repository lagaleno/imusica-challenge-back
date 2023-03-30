import { Request, Response } from 'express';
import { AppError } from '../../../../shared/errors/AppError';
import { DiskStorageProvider } from '../../../../shared/providers/StorageProvider/infra/DiskStorageProvider';
import { PostsRepository } from '../../infra/typeorm/repositories/PostsRepository';
import { UpdatePostImageUseCase } from './UpdatePostImageUseCase';

export class UpdatePostImageController {
	async handle(request: Request, response: Response): Promise<void | Response> {

		const postsRepository = new PostsRepository();
		const storageProvider = new DiskStorageProvider();
		const updatePostImageUseCase = new UpdatePostImageUseCase(postsRepository, storageProvider);
		if (!request.file) {
			throw new AppError('Missing file', 400);
		}

		await updatePostImageUseCase.execute({
			id: parseInt(request.params.id),
			userId: request.userId,
			tmpFilePath: request.file.filename
		});

		return response.sendStatus(204);
	}
}