// Procedural textures rendered as SVG data URIs, used as CSS backgrounds.
// Everything is deterministic (seeded) so builds are stable.

const uri = (svg: string) => `url("data:image/svg+xml,${encodeURIComponent(svg.replace(/\s+/g, ' ').trim())}")`;


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
