import { getImage } from 'astro:assets';
// PLACEHOLDER: watermarked Adobe Stock preview. Replace with the licensed file before launch.
import stonePhoto from '../assets/stone-PLACEHOLDER.webp';

/** Optimized dark stone photo as a CSS url(), shared by the menu bar and the spirits section. */
export async function stoneBg(width = 2000) {
  const img = await getImage({ src: stonePhoto, width, format: 'webp', quality: 72 });
  return `url("${img.src}")`;
}
