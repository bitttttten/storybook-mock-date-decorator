import { fileURLToPath } from 'node:url';

// Loads the preview entries in the local Storybook instance
export function previewAnnotations(entry = []) {
  return [...entry, fileURLToPath(import.meta.resolve('../dist/preview.js'))];
}

// We don't use manager entries in this addon
export function managerEntries(entry = []) {
  return entry;
}

// We don't use a preset in this addon
// export * from '../dist/preset.js';
