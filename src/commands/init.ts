import chalk from 'chalk';
import { createAIDevStructure, checkExistingStructure } from '../utils/fileSystem.js';
import { confirmInitialization, showCancellationMessage, showSuccessMessage } from '../utils/prompts.js';

export async function initCommand(): Promise<void> {
  try {
    // Check for existing structure
    const existingFolders = await checkExistingStructure();
    
    if (existingFolders.length > 0) {
      console.log(chalk.yellow('\nWarning: Some AI development folders already exist:'));
      existingFolders.forEach(folder => {
        console.log(chalk.gray(`• ${folder}`));
      });
      console.log(chalk.gray('Existing folders will be preserved.\n'));
    }
    
    // Get user confirmation
    const shouldProceed = await confirmInitialization();
    
    if (!shouldProceed) {
      showCancellationMessage();
      return;
    }
    
    // Create the structure
    await createAIDevStructure();
    
    // Show success message
    showSuccessMessage();
    
  } catch (error) {
    console.error(chalk.red('Error initializing AI development structure:'), error);
    process.exit(1);
  }
}