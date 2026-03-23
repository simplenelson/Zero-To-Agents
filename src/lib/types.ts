export interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export const CATEGORIES = [
  "Getting Started",
  "Architecture",
  "API",
  "Testing",
  "Deployment",
] as const;
