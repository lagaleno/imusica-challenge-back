import { Router } from 'express';
import { ensureAuthenticated } from '../../../../shared/http/middlewares/ensureAuthenticated';
import { upload } from '../../../../shared/http/middlewares/upload';
import { CreateUserController } from "../../useCases/CreateUser/CreateUserController";
import { CreateUserSessionController } from '../../useCases/CreateUserSession/CreateUserSessionController';
import { UpdateUserAvatarController } from '../../useCases/UpdateUserAvatar/UpdateUserAvatarController';

const usersRouter = Router();

usersRouter.post('/', (new CreateUserController()).handle);

usersRouter.post('/signIn', (new CreateUserSessionController()).handle);

usersRouter.patch('/updateAvatar', ensureAuthenticated, upload.single('avatar'), (new UpdateUserAvatarController()).handle);

export { usersRouter };