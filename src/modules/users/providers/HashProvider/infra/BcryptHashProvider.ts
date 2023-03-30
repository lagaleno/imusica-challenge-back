import { IHashProvider } from '../models/IHashProvider';
import bcrypt from 'bcrypt';

export class BcryptHashProvider implements IHashProvider {

	async compare(data: string, hashed: string): Promise<boolean> {
		return (await bcrypt.compare(data, hashed));
	}

	async hash(data: string): Promise<string> {
		const hashed = await bcrypt.hash(data, 10);
		return hashed;
	}

}