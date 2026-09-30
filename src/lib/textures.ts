// Procedural textures rendered as SVG data URIs, used as CSS backgrounds.
// Everything is deterministic (seeded) so builds are stable.

const uri = (svg: string) => `url("data:image/svg+xml,${encodeURIComponent(svg.replace(/\s+/g, ' ').trim())}")`;

function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

/** Fine grain + soft mottling, like hand-troweled lime plaster. Overlay on a cream base. */
export const plaster = uri(`
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
  <filter id="m" x="0" y="0" width="100%" height="100%"><feTurbulence stitchTiles="stitch" type="fractalNoise" baseFrequency="0.004" numOctaves="3" seed="4"/>
    <feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.36  0 0 0 0 0.25  0 0 0 0.55 -0.2"/></filter>
  <filter id="g" x="0" y="0" width="100%" height="100%"><feTurbulence stitchTiles="stitch" type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="9"/>
    <feColorMatrix values="0 0 0 0 0.3  0 0 0 0 0.24  0 0 0 0 0.18  0 0 0 0.35 -0.1"/></filter>
  <rect width="100%" height="100%" filter="url(#m)"/>
  <rect width="100%" height="100%" filter="url(#g)"/>
</svg>`);

/** Hand-glazed zellige: square tiles with varied teal glaze, pooled edges and a sheen. */
export function zellige(opts: { size?: number; cols?: number; rows?: number; seed?: number; palette?: string[] } = {}) {
  const { size = 56, cols = 10, rows = 10, seed = 11 } = opts;
  const palette = opts.palette ?? ['#0a6f63', '#0c7d6f', '#10897a', '#08645b', '#139382', '#0b7568', '#086060', '#12806f', '#0e8a86'];
  const rand = rng(seed);
  const gap = 3;
  let tiles = '';
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const c = palette[Math.floor(rand() * palette.length)];
      const px = x * size + gap / 2 + (rand() - 0.5);
      const py = y * size + gap / 2 + (rand() - 0.5);
      const s = size - gap;
      const hx = (15 + rand() * 70).toFixed(0);
      const hy = (10 + rand() * 60).toFixed(0);
      tiles += `<g transform="translate(${px.toFixed(1)} ${py.toFixed(1)})">
        <rect width="${s}" height="${s}" rx="2.5" fill="${c}"/>
        <rect width="${s}" height="${s}" rx="2.5" fill="url(#pool)"/>
        <ellipse cx="${(s * +hx) / 100}" cy="${(s * +hy) / 100}" rx="${s * 0.45}" ry="${s * 0.3}" fill="url(#sheen)"/>
      </g>`;
    }
  }
  return uri(`
<svg xmlns="http://www.w3.org/2000/svg" width="${cols * size}" height="${rows * size}">
  <defs>
    <radialGradient id="pool" cx="50%" cy="50%" r="70%">
      <stop offset="55%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#022a25" stop-opacity=".5"/>
    </radialGradient>
    <radialGradient id="sheen"><stop offset="0" stop-color="#e8fff6" stop-opacity=".22"/><stop offset="1" stop-color="#e8fff6" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="#e9d6b0"/>
  ${tiles}
</svg>`);
}

/** Talavera-style trim tile: indigo quatrefoil with an ochre heart, repeated as a border. */
export function talavera(size = 64) {
  return uri(`
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#f7ead0"/>
  <rect x=".5" y=".5" width="63" height="63" fill="none" stroke="#d9c092" stroke-width="1"/>
  <g fill="#1f3f9a">
    <path d="M32 8c6 7 6 13 0 18c-6-5-6-11 0-18z"/><path d="M32 56c6-7 6-13 0-18c-6 5-6 11 0 18z"/>
    <path d="M8 32c7-6 13-6 18 0c-5 6-11 6-18 0z"/><path d="M56 32c-7-6-13-6-18 0c5 6 11 6 18 0z"/>
    <path d="M0 0h10a10 10 0 0 1-10 10z"/><path d="M64 0v10a10 10 0 0 1-10-10z"/>
    <path d="M0 64v-10a10 10 0 0 1 10 10z"/><path d="M64 64h-10a10 10 0 0 1 10-10z"/>
  </g>
  <g fill="#f0a41c">
    <circle cx="32" cy="32" r="5.5"/>
    <path d="M18 18l4 1-1 4-4-1z"/><path d="M46 18l-4 1 1 4 4-1z"/><path d="M18 46l4-1-1-4-4 1z"/><path d="M46 46l-4-1 1-4 4 1z"/>
  </g>
  <circle cx="32" cy="32" r="2" fill="#c9491f"/>
</svg>`);
}

/** Very subtle stone: soft mottling plus fine mineral grain, both light and dark flecks. Overlay on a solid color. */
export const stone = uri(`
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="480">
  <filter id="mot" x="0" y="0" width="100%" height="100%"><feTurbulence stitchTiles="stitch" type="fractalNoise" baseFrequency="0.012" numOctaves="4" seed="21"/>
    <feColorMatrix values="0 0 0 0 1  0 0 0 0 0.86  0 0 0 0 0.72  0 0 0 0.22 -0.06"/></filter>
  <filter id="drk" x="0" y="0" width="100%" height="100%"><feTurbulence stitchTiles="stitch" type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="5"/>
    <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 -0.12"/></filter>
  <filter id="grn" x="0" y="0" width="100%" height="100%"><feTurbulence stitchTiles="stitch" type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="13"/>
    <feColorMatrix values="0 0 0 0 1  0 0 0 0 0.9  0 0 0 0 0.8  0 0 0 0.34 -0.18"/></filter>
  <rect width="100%" height="100%" filter="url(#mot)"/>
  <rect width="100%" height="100%" filter="url(#drk)"/>
  <rect width="100%" height="100%" filter="url(#grn)"/>
</svg>`);
