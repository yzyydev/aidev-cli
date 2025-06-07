export interface ProjectStructure {
  folders: string[];
  files?: { path: string; content: string }[];
}

export interface CommandOptions {
  force?: boolean;
  verbose?: boolean;
}