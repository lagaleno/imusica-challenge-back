import { IPost } from '../entities/IPost';

export type ICreatePostDTO = Pick<IPost, 'userId' | 'content' | 'title'>;