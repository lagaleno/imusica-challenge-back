export interface IPost {
	id: number;
	userId: number;
	title: string;
	content: string;
	image: string | null;
	createdAt: Date;
	updatedAt: Date;
}