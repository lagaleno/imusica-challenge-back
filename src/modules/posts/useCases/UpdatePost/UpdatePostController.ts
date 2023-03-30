import { Request, Response } from 'express';
import { PostsRepository } from '../../infra/typeorm/repositories/PostsRepository';
import { UpdatePostUseCase } from './UpdatePostUseCase';

export class UpdatePostController {
	async handle(request: Request, response: Response): Promise<void | Response> {

		const { title, content } = request.body;

		const postsRepository = new PostsRepository();
		const updatePostUseCase = new UpdatePostUseCase(postsRepository);

		await updatePostUseCase.execute({
			id: parseInt(request.params.id),
			userId: request.userId,
			content,
			title
		});

		return response.sendStatus(204);
	}
}