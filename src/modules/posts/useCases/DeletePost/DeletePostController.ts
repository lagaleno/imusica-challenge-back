import { Request, Response } from 'express';
import { PostsRepository } from '../../infra/typeorm/repositories/PostsRepository';
import { DeletePostUseCase } from './DeletePostUseCase';

export class DeletePostController {
	async handle(request: Request, response: Response): Promise<void | Response> {
		const postsRepository = new PostsRepository();

		const deletePostUseCase = new DeletePostUseCase(postsRepository);

		await deletePostUseCase.execute({
			id: parseInt(request.params.id),
			userId: request.userId
		});

		return response.sendStatus(204);
	}
}