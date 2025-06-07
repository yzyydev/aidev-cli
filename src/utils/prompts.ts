import inquirer from 'inquirer';
import chalk from 'chalk';
import { basename, resolve } from 'path';

export async function confirmInitialization(): Promise<boolean> {
  const currentDir = basename(resolve(process.cwd()));
  
  console.log(chalk.cyan(`Current directory: ${currentDir}`));
  console.log(chalk.yellow('This will create the AI development structure in the current directory.'));
  
  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Initialize AI development structure in current directory?',
      default: false
    }
  ]);
  
  return confirm;
}

export function showCancellationMessage(): void {
  console.log(chalk.yellow('\nInitialization cancelled.'));
  console.log(chalk.gray('Please create a project folder and run \'aidev init\' from within it.'));
}

export function showSuccessMessage(): void {
  console.log(chalk.green('\n✅ AI development structure created successfully!'));
  console.log(chalk.cyan('\nNext steps:'));
  console.log(chalk.gray('• Add your documentation to ai_docs/'));
  console.log(chalk.gray('• Create feature specifications in specs/'));
  console.log(chalk.gray('• Configure Claude commands in .claude/commands/'));
}