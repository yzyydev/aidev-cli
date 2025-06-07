import { ensureDir, pathExists } from 'fs-extra';
import { join } from 'path';
import chalk from 'chalk';

export const AI_DEV_STRUCTURE = [
  '.claude',
  '.claude/commands',
  'ai_docs',
  'specs'
];

export async function createAIDevStructure(basePath: string = process.cwd()): Promise<void> {
  console.log(chalk.blue('Creating AI development structure...'));
  
  for (const folder of AI_DEV_STRUCTURE) {
    const folderPath = join(basePath, folder);
    try {
      await ensureDir(folderPath);
      console.log(chalk.green(`✓ Created: ${folder}`));
    } catch (error) {
      console.error(chalk.red(`✗ Failed to create: ${folder}`), error);
      throw error;
    }
  }
}

export async function checkExistingStructure(basePath: string = process.cwd()): Promise<string[]> {
  const existingFolders: string[] = [];
  
  for (const folder of AI_DEV_STRUCTURE) {
    const folderPath = join(basePath, folder);
    if (await pathExists(folderPath)) {
      existingFolders.push(folder);
    }
  }
  
  return existingFolders;
}