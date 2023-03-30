import { Request, Response } from 'express';
import { AppError } from '../../../../shared/errors/AppError';
import { DiskStorageProvider } from '../../../../shared/providers/StorageProvider/infra/DiskStorageProvider';
import { UsersRepository } from '../../infra/typeorm/repositories/UsersRepository';
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

export class UpdateUserAvatarController {
	async handle(request: Request, response: Response): Promise<void | Response> {
		const usersRepository = new UsersRepository();
		const storageProvider = new DiskStorageProvider();
		const updateUserAvatarUseCase = new UpdateUserAvatarUseCase(usersRepository, storageProvider);
		if (!request.file) {
			throw new AppError('Missing file', 400);
		}
		await updateUserAvatarUseCase.execute({
			userId: request.userId,
			tmpFilePath: request.file.filename
		});
		return response.sendStatus(204);
	}
}