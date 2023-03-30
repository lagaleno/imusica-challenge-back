import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import * as jwt from 'jsonwebtoken';
import { authConfig } from '../../../config/auth';

interface IDecoded {
	sub: string;
}

export const ensureAuthenticated = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
	const auth = request.headers.authorization;

	if (!auth) {
		throw new AppError('Missing bearer token', 401);
	}

	const [bearer, token] = auth.split(' ');

	if (bearer !== 'Bearer') {
		throw new AppError('Bad formatted token', 401);
	}

	try {
		const decoded = await jwt.verify(token, authConfig.secret) as IDecoded;
		request.userId = Number(decoded.sub);
		return next();
	} catch (error) {
		throw new AppError('Invalid token', 401);
	}

};