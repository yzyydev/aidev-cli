# AI assisted development Structure

A modern project structure optimized for efficient AI-assisted development using Claude Code and OpenAI Codex.

## Overview

This repository provides a standardized structure for AI-enhanced software development workflows. Rather than directly inputting commands, documentation, and feature requests into the CLI of Claude Code or OpenAI Codex, this structure offers a more organized, version-controlled, and collaborative approach to working with AI coding assistants.

## Directory Structure

```
ai_assisted_development_structure/
├── .claude/
│   └── commands/       # Custom Claude Code command definitions
│       ├── COMMANDS.md # Documentation for commands system
│       └── prime.md    # Context initialization command
├── ai_docs/            # AI-specific documentation
│   ├── AI_DOCS.md      # Documentation for AI docs system
│   ├── claude_thinking.md
│   └── openai_reasoning_models.md
├── specs/              # Feature specifications
│   ├── SPECS.md        # Documentation for specs system
│   └── openai_reasoning.md
└── README.md           
```

## Key Components

### 1. Claude Commands (`.claude/commands/`)

Custom reusable commands that streamline interactions with Claude Code:

- **Project Context Initialization**: The `prime.md` command quickly primes Claude with project structure and important documentation
- **Standardized Workflows**: Create commands for code generation, testing, analysis, and more
- **Invocation Syntax**: Use `/project:command_name` to execute commands

### 2. AI Documentation (`ai_docs/`)

Specialized documentation that enhances AI models' understanding of your project:

- **Domain-Specific Knowledge**: Terminology, architecture, and design patterns
- **Implementation Details**: System relationships and code examples
- **Enhanced Generation**: Helps Claude generate code aligned with your project's patterns
- **Invocation Syntax**: Use `@[path/to/document]` to reference docs in conversations

### 3. Feature Specifications (`specs/`)

Structured specifications for planned features:

- **Implementation Blueprint**: Detailed specs for types, methods, tests, and validation
- **Consistent Design**: Standardized format ensures all necessary details are included
- **AI-Ready Format**: Optimized for consumption by Claude Code
- **Invocation Syntax**: Use `@[path/to/spec.md]` to reference in conversations