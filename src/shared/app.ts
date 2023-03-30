import 'reflect-metadata';
import './infra/typeorm/database';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import { usersRouter } from '../modules/users/http/routes/users.routes';
import { AppError } from './errors/AppError';
import { uploadConfig } from '../config/upload';
import cors from 'cors';
import { postsRouter } from '../modules/posts/http/routes/posts.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(uploadConfig.diskStorageProviderConfig.destination));

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.get('/', (request, response) => {
	return response.json({
		message: 'Hello world!'
	});
});

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
	console.error(error);
	if (error instanceof AppError) {
		return response.status(error.statusCode).json({
			error: error.message
		});
	}
	return response.status(500).json({
		error: error.message
	});
});

app.listen('3333', () => {
	console.log('Server is on, 3333 is the magic port');
});