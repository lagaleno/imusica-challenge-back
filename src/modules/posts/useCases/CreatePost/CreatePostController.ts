import { Request, Response } from 'express';
import { AppError } from '../../../../shared/errors/AppError';
import { PostsRepository } from '../../infra/typeorm/repositories/PostsRepository';
import { CreatePostUseCase } from './CreatePostUseCase';

export class CreatePostController {
	async handle(request: Request, response: Response): Promise<void | Response> {

		const { title, content } = request.body;

		if (!title || !content)
			throw new AppError('Está faltando informações para criar a postagem');

		const userId = request.userId;
		if (!userId) throw new AppError('Erro de autenticação');

		const postsRepository = new PostsRepository();
		const createPostUseCase = new CreatePostUseCase(postsRepository);

		const created_post = await createPostUseCase.execute({
			title,
			content,
			userId,
		});
		
		return response.json(created_post);
	}
}
