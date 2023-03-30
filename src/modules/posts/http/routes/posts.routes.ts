import { Router } from 'express';
import { ensureAuthenticated } from '../../../../shared/http/middlewares/ensureAuthenticated';
import { upload } from '../../../../shared/http/middlewares/upload';

import { DeletePostController } from '../../useCases/DeletePost/DeletePostController';
import { GetAllPostsController } from '../../useCases/GetAllPosts/GetAllPostsController';
import { GetPostByIdController } from '../../useCases/GetPostById/GetPostByIdController';
import { UpdatePostController } from '../../useCases/UpdatePost/UpdatePostController';
import { UpdatePostImageController } from '../../useCases/UpdatePostImage/UpdatePostImageController';

const postsRouter = Router();

postsRouter.use(ensureAuthenticated);

postsRouter.get('/', (new GetAllPostsController()).handle);

postsRouter.get('/:id', (new GetPostByIdController()).handle);

// postsRouter.post('/', (new CreatePostController()).handle);

postsRouter.put('/:id', (new UpdatePostController()).handle);

postsRouter.patch('/:id/updateImg', upload.single('image'), (new UpdatePostImageController()).handle);

postsRouter.delete('/:id', (new DeletePostController()).handle);

export { postsRouter };