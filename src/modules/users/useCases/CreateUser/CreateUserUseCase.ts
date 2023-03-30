import { AppError } from '../../../../shared/errors/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUser } from '../../entities/IUser';
import { IHashProvider } from '../../providers/HashProvider/models/IHashProvider';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export class CreateUserUseCase {
	constructor(
		private usersRepository: IUsersRepository,
		private hashProvider: IHashProvider
	) { }

	async execute({ email, password, name }: ICreateUserDTO): Promise<IUser> {
		// TODO: Criar usuário, atente ao fato que dois usuários não podem possuir o mesmo email
		// TODO: HashProvider pode ser utilizado para criptografia da senha
		throw new AppError('Method not implemented!', 500);
	}
}