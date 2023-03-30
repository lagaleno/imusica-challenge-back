import fs from 'fs/promises';
import path from 'path';
import { uploadConfig } from '../../../../config/upload';
import { IStorageProvider } from '../models/IStorageProvider';

export class DiskStorageProvider implements IStorageProvider {
	async save(tmpFilePath: string): Promise<string> {
		// BÔNUS: Esta função deve mover o arquivo da pasta temporária para a pasta uploads do servidor e retornar o nome do
		// arquivo nesta pasta, os caminhos das pastas estão contidos em uploadConfig.tmpUploadsPath e 
		// uploadConfig.diskStorageProviderConfig.destination
		return '';
	}

	async delete(filename: string): Promise<void> {
		// BÔNUS: Esta função deve remover o arquivo da pasta uploads do servidor
	}

}