export interface IUser {
	id: number;
	name: string;
	email: string;
	password: string;
	avatar: string | null;

	createdAt: Date | string;
	updatedAt: Date | string;
}