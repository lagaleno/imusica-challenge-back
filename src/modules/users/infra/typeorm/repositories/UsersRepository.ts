import { getRepository, Repository } from 'typeorm';
import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { IUser } from '../../../entities/IUser';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { User } from '../entities/User';

export class UsersRepository implements IUsersRepository {

	private ormRepository: Repository<User>;

	constructor() {
		this.ormRepository = getRepository(User);
	}

	findById(id: number): Promise<IUser | undefined> {
		return this.ormRepository.findOne(id);
	}

	async updateUserAvatar(id: number, avatar: string): Promise<void> {
		await this.ormRepository.update({
			id
		}, {
			avatar
		});
	}

	async create(data: ICreateUserDTO): Promise<IUser> {
		return await this.ormRepository.save(this.ormRepository.create(data));
	}

	async findByEmail(email: string): Promise<IUser | undefined> {
		const user = await this.ormRepository.findOne({
			where: {
				email
			}
		});
		return user;
	}

}