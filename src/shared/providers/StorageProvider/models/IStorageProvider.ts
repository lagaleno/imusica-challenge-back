export interface IStorageProvider {
	save(tmpFilePath: string): Promise<string>;
	delete(filename: string): Promise<void>;
}