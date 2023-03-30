import * as express from 'express';
import { IUser } from '../../modules/users/entities/IUser';

declare global {
	declare namespace Express {
		export interface Request {
			userId: number;
		}
	}
}
