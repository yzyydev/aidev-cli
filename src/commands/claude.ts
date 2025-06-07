import { spawnSync } from 'child_process';
import chalk from 'chalk';

export function claudeCommand(): void {
  const checkResult = spawnSync('claude', ['--version'], { stdio: 'ignore' });
  
  if (checkResult.error || checkResult.status !== 0) {
    console.log(chalk.yellow('Claude Code not found. Installing...\n'));
    
    const installResult = spawnSync('npm', ['install', '-g', '@anthropic-ai/claude-code'], {
      stdio: 'inherit'
    });
    
    if (installResult.error || installResult.status !== 0) {
      console.error(chalk.red('Failed to install Claude Code. Please install manually.'));
      process.exit(1);
    }
    
    console.log(chalk.green('\nClaude Code installed successfully. Launching...\n'));
  } else {
    console.log(chalk.green('Claude Code is installed. Launching...\n'));
  }
  
  const launchResult = spawnSync('claude', { stdio: 'inherit' });
  if (launchResult.error) {
    console.error(chalk.red('Failed to launch Claude Code:'), launchResult.error.message);
    process.exit(1);
  }
}
