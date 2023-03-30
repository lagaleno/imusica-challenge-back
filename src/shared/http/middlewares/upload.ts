import multer, { diskStorage } from 'multer';
import { uploadConfig } from '../../../config/upload';
import crypto from 'crypto';
import { AppError } from '../../errors/AppError';

export const upload = multer({
	storage: diskStorage({
		destination: uploadConfig.tmpUploadsPath,
		filename: (request, file, callback) => {
			const filename = `${crypto.randomBytes(10).toString('hex')}-${file.originalname}`;
			return callback(null, filename);
		},
	}),
	fileFilter: (req, file, cb) => {
		if (/image\/(png|jpg|jpeg|gif)/.test(file.mimetype)) {
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new AppError('Invalid filetype', 400));
		}
	},
	limits: {
		fileSize: uploadConfig.maxFileSize
	}
});