// Three layout + gradient directions for review at /layouts/1, /layouts/2, /layouts/3.
export type HeroLayout = 'split' | 'centered' | 'panels';

export interface Theme {
  id: number;
  name: string;
  note: string;
  layout: HeroLayout;
  heroBg: string;
  offeringsBg: string;
  panelBg?: string; // second panel for the 'panels' layout
  accent: string; // poem / copy color on the gradient
}

export const themes: Theme[] = [
  {
    id: 1,
    name: 'Agave Field',
    note: 'The original split layout on a diagonal sweep from leaf green to warm caramel.',
    layout: 'split',
    heroBg:
      'radial-gradient(ellipse at 15% 20%, rgba(168, 196, 120, 0.45), transparent 55%), linear-gradient(120deg, #3f6b3a 0%, #5b7d3f 35%, #8a6a3a 70%, #a8733f 100%)',
    offeringsBg:
      'radial-gradient(ellipse at 85% 80%, rgba(214, 160, 96, 0.4), transparent 60%), linear-gradient(300deg, #3f6b3a 0%, #5b7d3f 35%, #8a6a3a 70%, #a8733f 100%)',
    accent: '#fcedbb',
  },
  {
    id: 2,
    name: 'Sunlit Canopy',
    note: 'A centered, stacked hero with a bright jade glow fading into terracotta.',
    layout: 'centered',
    heroBg:
      'radial-gradient(circle at 50% 0%, #8fbf7a 0%, #5f9160 30%, #4d6e3e 55%, #8b5a33 85%, #7a4a2a 100%)',
    offeringsBg:
      'radial-gradient(circle at 50% 100%, #b87a45 0%, #8b5a33 35%, #5f7a45 75%, #4d6e3e 100%)',
    accent: '#fff8e4',
  },
  {
    id: 3,
    name: 'Earth & Leaf',
    note: 'Two full-height panels: the logo on green, the story on brown.',
    layout: 'panels',
    heroBg: 'linear-gradient(160deg, #7fa66a 0%, #557f48 45%, #3d6340 100%)',
    panelBg: 'linear-gradient(200deg, #c08a55 0%, #9a6536 50%, #6f4526 100%)',
    offeringsBg: 'linear-gradient(90deg, #557f48 0%, #7b7a45 50%, #9a6536 100%)',
    accent: '#fff8e4',
  },
];
