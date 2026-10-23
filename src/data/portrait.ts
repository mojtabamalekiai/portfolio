import type { ImageMetadata } from 'astro';

// Mojtaba's own photo. Drop it in as src/assets/photos/me.jpg (or .jpeg/.png/.webp).
// When no file is there, the About card falls back to the monogram design.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/me.{jpg,jpeg,png,webp}', { eager: true });

export const portrait: ImageMetadata | undefined = Object.values(files)[0]?.default;
