import { AppError } from '../../../../shared/errors/AppError';
import { ICreateUserSessionUseCaseDTO } from '../../dtos/ICreateUserSessionUseCaseDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import * as jwt from 'jsonwebtoken';
import { IHashProvider } from '../../providers/HashProvider/models/IHashProvider';
import { authConfig } from '../../../../config/auth';
import { IUser } from '../../entities/IUser';

export class CreateUserSessionUseCase {

	constructor(
		private usersRepository: IUsersRepository,
		private hashProvider: IHashProvider
	) { }

	async execute({ email, password }: ICreateUserSessionUseCaseDTO): Promise<{ token: string; user: IUser }> {
		const user = await this.usersRepository.findByEmail(email);

		if (!user) {
			throw new AppError('Wrong credentials', 403);
		}

		if (!(await this.hashProvider.compare(password, user.password))) {
			throw new AppError('Wrong credentials', 403);
		}

		const token = jwt.sign({}, authConfig.secret, {
			expiresIn: '7d',
			subject: String(user.id)
		});

		return {
			token,
			user
		};

	}
}