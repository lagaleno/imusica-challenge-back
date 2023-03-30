import { IUser } from '../entities/IUser';

export type ICreateUserDTO = Pick<IUser, 'name' | 'email' | 'password'>;