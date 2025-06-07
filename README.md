# aidev - AI Development Project CLI

A CLI tool to create a standardized boilerplate structure for AI-assisted development projects, optimized for use with Claude Code and similar AI development tools.

## Installation

### Local Installation (Development)

```bash
# Clone the repository
git clone <repository-url>
cd ai_dev_folder_cli

# Install dependencies
npm install

# Build the project
npm run build

# Test the CLI locally
node dist/cli.js --help
```

### Global Installation (Future)

```bash
# Install globally via npm (when published)
npm install -g aidev
```

## Usage

### Initialize AI Development Structure

Navigate to your project directory and run:

```bash
aidev init
```

This command will:

1. Display the current directory name
2. Ask for confirmation to initialize the AI development structure
3. Create the following folder structure in the current directory:

```
your-project/
├── .claude/
│   └── commands/
├── ai_docs/
└── specs/
```

### Command Options

```bash
# Show help
aidev --help

# Show version
aidev --version

# Initialize structure (with confirmation)
aidev init
```

### Start Claude Code

If the Claude Code CLI is missing, this command installs it globally and then launches the `claude` CLI:

```bash
aidev claude
```

## Project Structure

The `aidev init` command creates a standardized AI development structure:

### `.claude/commands/`
- Custom reusable commands for Claude Code
- Project context initialization
- Standardized workflows for code generation, testing, and analysis
- **Invocation**: Use `/project:command_name` to execute commands

### `ai_docs/`
- AI-specific documentation that enhances AI models' understanding
- Domain-specific knowledge, terminology, and architecture
- Implementation details and code examples
- **Invocation**: Use `@[path/to/document]` to reference docs in conversations

### `specs/`
- Structured specifications for planned features
- Implementation blueprints with types, methods, tests, and validation
- AI-ready format optimized for Claude Code consumption
- **Invocation**: Use `@[path/to/spec.md]` to reference in conversations

## Development

### Build

```bash
npm run build
```

### Development Mode

```bash
npm run dev  # Watch mode for TypeScript compilation
```

### Testing

```bash
npm test    # Runs build and tests the CLI with init command
```

## Examples

### Basic Usage

```bash
# Create a new project folder
mkdir my-ai-project
cd my-ai-project

# Initialize AI development structure
aidev init
```

Output:
```
Current directory: my-ai-project
This will create the AI development structure in the current directory.
? Initialize AI development structure in current directory? (y/N) y

Creating AI development structure...
✓ Created: .claude
✓ Created: .claude/commands
✓ Created: ai_docs
✓ Created: specs

✅ AI development structure created successfully!

Next steps:
• Add your documentation to ai_docs/
• Create feature specifications in specs/
• Configure Claude commands in .claude/commands/
```

### Cancellation

```bash
aidev init
```

If you choose "No":
```
Current directory: my-project
This will create the AI development structure in the current directory.
? Initialize AI development structure in current directory? (y/N) n

Initialization cancelled.
Please create a project folder and run 'aidev init' from within it.
```

## Error Handling

- **Existing Folders**: The CLI will detect existing AI development folders and warn you before proceeding
- **Permission Errors**: Clear error messages for file system permission issues
- **Graceful Cancellation**: User can cancel initialization at the confirmation prompt

## Next Steps After Initialization

1. **Configure AI Documentation** (`ai_docs/`)
   - Add project-specific terminology and architecture docs
   - Include code examples and implementation patterns

2. **Create Feature Specifications** (`specs/`)
   - Write detailed specifications for planned features
   - Use structured format for types, methods, and validation

3. **Set Up Claude Commands** (`.claude/commands/`)
   - Create project context initialization commands
   - Add workflow-specific commands for your development process

## License

MIT