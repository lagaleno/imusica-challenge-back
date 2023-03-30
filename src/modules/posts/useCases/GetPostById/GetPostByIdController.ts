import { Request, Response } from 'express';
import { PostsRepository } from '../../infra/typeorm/repositories/PostsRepository';
import { classToPlain } from 'class-transformer';
import { AppError } from '../../../../shared/errors/AppError';

export class GetPostByIdController {
	async handle(request: Request, response: Response): Promise<void | Response> {
		const postsRepository = new PostsRepository();
		const post = await postsRepository.findById(parseInt(request.params.id));
		if (!post) {
			throw new AppError('Post does not exists', 404);
		}
		return response.json(classToPlain(post));
	}
}