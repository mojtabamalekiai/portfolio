import type { ImageMetadata } from 'astro';

// Mojtaba's own photos, cropped and lightly graded from event photos:
//   me.jpg            main portrait (About card)
//   me-face.jpg       tight face crop (avatars in the hero and contact section)
//   me-presenting.jpg presenting at a screen (About)
// Any of them may be missing; components fall back gracefully.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/me*.{jpg,jpeg,png,webp}', { eager: true });
const pick = (name: string) =>
  Object.entries(files).find(([path]) => /\/(me[\w-]*)\.\w+$/.exec(path)?.[1] === name)?.[1].default;

export const portrait: ImageMetadata | undefined = pick('me');
export const face: ImageMetadata | undefined = pick('me-face') ?? portrait;
export const presenting: ImageMetadata | undefined = pick('me-presenting');
