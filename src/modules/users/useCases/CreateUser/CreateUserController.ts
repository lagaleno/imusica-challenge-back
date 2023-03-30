import { classToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { UsersRepository } from '../../infra/typeorm/repositories/UsersRepository';
import { BcryptHashProvider } from '../../providers/HashProvider/infra/BcryptHashProvider';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
	async handle(request: Request, response: Response): Promise<void | Response> {
		const { email, password, name } = request.body;
		const usersRepository = new UsersRepository();
		const hashProvider = new BcryptHashProvider();
		const createUserUseCase = new CreateUserUseCase(usersRepository, hashProvider);
		return response.json(classToPlain(await createUserUseCase.execute({
			email,
			name,
			password
		})));
	}
}