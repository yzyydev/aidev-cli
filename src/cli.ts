#!/usr/bin/env node

import { Command } from 'commander';
import { initCommand } from './commands/init.js';
import { claudeCommand } from './commands/claude.js';

const program = new Command();

program
  .name('aidev')
  .description('CLI tool to create AI development project boilerplate structure')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize AI development structure in current directory')
  .action(initCommand);

program
  .command('claude')
  .description('Start Claude Code, installing if necessary')
  .action(claudeCommand);

program.parse();