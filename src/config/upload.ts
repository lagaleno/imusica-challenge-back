import path from 'path';

export const uploadConfig = {
	tmpUploadsPath: path.resolve(__dirname, '..', '..', 'tmp'),
	maxFileSize: 2048000,
	diskStorageProviderConfig: {
		destination: path.resolve(__dirname, '..', '..', 'uploads'),
		publicURL: 'http://localhost:3333/uploads'
	}
};