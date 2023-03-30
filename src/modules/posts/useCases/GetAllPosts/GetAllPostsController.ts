import { Request, Response } from 'express';
import { PostsRepository } from '../../infra/typeorm/repositories/PostsRepository';
import { classToPlain } from 'class-transformer';

export class GetAllPostsController {
	async handle(request: Request, response: Response): Promise<void | Response> {
		const postsRepository = new PostsRepository();
		return response.json(classToPlain(await postsRepository.findAllWithAuthors()));
	}
}