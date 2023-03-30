import { IPost } from '../entities/IPost';

export type IUpdatePostDto = Partial<Omit<IPost, 'userId' | 'id' | 'createdAt' | 'updatedAt' | 'image'>>;