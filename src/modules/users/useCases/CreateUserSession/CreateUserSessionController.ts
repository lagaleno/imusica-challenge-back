import { classToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { UsersRepository } from '../../infra/typeorm/repositories/UsersRepository';
import { BcryptHashProvider } from '../../providers/HashProvider/infra/BcryptHashProvider';
import { CreateUserSessionUseCase } from './CreateUserSessionUseCase';

export class CreateUserSessionController {
	async handle(request: Request, response: Response): Promise<void | Response> {
		const { email, password } = request.body;
		const hashProvider = new BcryptHashProvider();
		const usersRepository = new UsersRepository();
		const createUserSessionUseCase = new CreateUserSessionUseCase(usersRepository, hashProvider);
		return response.json(classToPlain(await createUserSessionUseCase.execute({
			email,
			password
		})));
	}
}