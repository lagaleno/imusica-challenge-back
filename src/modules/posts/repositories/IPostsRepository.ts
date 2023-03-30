import { ICreatePostDTO } from '../dtos/ICreatePostDTO';
import { IUpdatePostDto } from '../dtos/IUpdatePostDTO';
import { IPost } from '../entities/IPost';

export interface IPostsRepository {
	create(data: ICreatePostDTO): Promise<IPost>;
	findAllWithAuthors(): Promise<Array<IPost>>;
	findById(id: number): Promise<IPost | undefined>;
	updateById(id: number, data: IUpdatePostDto): Promise<void>;
	deletePostById(id: number): Promise<void>;
	updatePostImage(id: number, image: string): Promise<void>;
}