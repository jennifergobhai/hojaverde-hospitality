import { getImage } from 'astro:assets';
import woodPhoto from '../assets/wood-warm.webp';

/** Optimized weathered-wood photo as a CSS url(), for use as a section background. */
export async function woodBg(width = 1600) {
  const img = await getImage({ src: woodPhoto, width, format: 'webp', quality: 72 });
  return `url("${img.src}")`;
}
