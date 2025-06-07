import { spawnSync } from 'child_process';
import chalk from 'chalk';

export async function claudeCommand(): Promise<void> {
  try {
    spawnSync('claude', ['--version'], { stdio: 'ignore' });
    console.log(chalk.green('Claude Code is installed. Launching...\n'));
    spawnSync('claude', { stdio: 'inherit' });
  } catch (error) {
    console.log(chalk.yellow('Claude Code not found. Installing...\n'));
    try {
      spawnSync('npm', ['install', '-g', '@anthropic-ai/claude-code'], {
        stdio: 'inherit'
      });
      console.log(chalk.green('\nClaude Code installed successfully. Launching...\n'));
      spawnSync('claude', { stdio: 'inherit' });
    } catch (installError) {
      console.error(chalk.red('Failed to install Claude Code:'), installError);
      process.exit(1);
    }
  }
}
