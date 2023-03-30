import { AppError } from '../../../../shared/errors/AppError';
import { IStorageProvider } from '../../../../shared/providers/StorageProvider/models/IStorageProvider';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IUpdateUserAvatarUseCaseDTO {
	userId: number;
	tmpFilePath: string;
}

export class UpdateUserAvatarUseCase {

	constructor(
		private usersRepository: IUsersRepository,
		private storageProvider: IStorageProvider
	) { }

	async execute({ userId, tmpFilePath }: IUpdateUserAvatarUseCaseDTO): Promise<void> {
		const user = await this.usersRepository.findById(userId);
		if (!user) {
			throw new AppError('User does not exists', 404);
		}
		if (user.avatar) {
			await this.storageProvider.delete(user.avatar);
		}
		await this.usersRepository.updateUserAvatar(userId, await this.storageProvider.save(tmpFilePath));
	}
}