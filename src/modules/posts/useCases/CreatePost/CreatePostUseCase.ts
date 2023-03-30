import { IPost } from "../../entities/IPost";
import { ICreatePostDTO } from "../../dtos/ICreatePostDTO";
import { IPostsRepository } from "../../repositories/IPostsRepository";
import { AppError } from "../../../../shared/errors/AppError";

export class CreatePostUseCase {
	constructor(private postsRepository: IPostsRepository) {}

	async execute({ title, content, userId }: ICreatePostDTO): Promise<IPost> {
		const created_post = await this.postsRepository.create({
			title,
			content,
			userId,
		});

		if (!created_post) throw new AppError("Erro ao criar a postagem");

		return created_post;
	}
}
