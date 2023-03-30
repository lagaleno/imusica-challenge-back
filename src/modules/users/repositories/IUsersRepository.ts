import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUser } from '../entities/IUser';

export interface IUsersRepository {
	create(data: ICreateUserDTO): Promise<IUser>;
	findByEmail(email: string): Promise<IUser | undefined>;
	findById(id: number): Promise<IUser | undefined>;
	updateUserAvatar(id: number, avatar: string): Promise<void>;
}