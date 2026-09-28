// ============================================================
// ASTERIN — SERVICE DATA
// Each service automatically gets its own page at /services/:slug
// `layout` controls the visual treatment on /services:
//   'split' | 'split-rev' | 'full' | 'stack'
// ============================================================

export const services = [
  {
    slug: 'youtube-content',
    index: '01',
    name: 'YOUTUBE CONTENT',
    tagline: 'From upload to unstoppable.',
    description: 'Full-pipeline YouTube production for creators and brands — strategy, scripting, editing, packaging and publishing systems that turn uploads into growth.',
    long: 'YouTube rewards systems, not luck. We build yours: channel positioning, video ideas engineered for click and retention, cinematic edits, thumbnails that win the browse screen, and publishing strategy backed by analytics. You stay the face; we stay behind the camera.',
    provide: [
      'Channel strategy & positioning',
      'Video ideation & scripting',
      'Retention-first editing',
      'Thumbnails & packaging',
      'Titles, SEO & publishing',
      'Analytics & iteration loops'
    ],
    examples: ['creator-growth-90', 'night-shift'],
    layout: 'split',
    image: '/assets/images/work/work-youtube.jpg'
  },
  {
    slug: 'social-media',
    index: '02',
    name: 'INSTAGRAM & INFLUENCER',
    tagline: 'Built for the feed. Made to be followed.',
    description: 'Reels systems, content calendars and brand-ready presence for influencers who want to grow without living on their phone.',
    long: 'We design your short-form engine: a visual language, hook library, caption voice and posting cadence that compounds. Then we hand your team templates and playbooks — or run the whole machine for you, including brand-deck preparation and community management.',
    provide: [
      'Reels & short-form systems',
      'Content calendars & hook libraries',
      'Creator brand kits',
      'Sponsorship & media decks',
      'Community management',
      'Growth analytics & reporting'
    ],
    examples: ['reel-machine', 'redline-identity'],
    layout: 'split-rev',
    image: '/assets/images/work/work-social.jpg'
  },
  {
    slug: 'video-editing',
    index: '03',
    name: 'VIDEO EDITING',
    tagline: 'Cuts that keep people watching.',
    description: 'Cinematic long-form and razor-sharp short-form editing with grade, sound design and motion titles — delivered in every format you publish.',
    long: 'Editing is where attention is won or lost. Our editors cut for retention: pacing, sound design, grade and motion that serve the story. From documentary long-form to daily shorts, we deliver masters plus platform-native versions.',
    provide: [
      'Long-form editing',
      'Short-form repurposing',
      'Color grade & sound design',
      'Motion titles & captions',
      'Subtitles in any language',
      'Multi-format delivery'
    ],
    examples: ['night-shift', 'hosting-grid'],
    layout: 'full',
    image: '/assets/images/work/work-edit.jpg'
  },
  {
    slug: 'graphic-design',
    index: '04',
    name: 'GRAPHIC DESIGN',
    tagline: 'Identity you can recognise in one glance.',
    description: 'Thumbnails, posters, brand identities and stream kits — a black-and-red visual language engineered for recognition.',
    long: 'Great design is a weapon in the feed. We build identities and one-off assets with the same discipline: strong geometry, restrained palettes, typography that carries the brand. Everything ships as a system your team can extend.',
    provide: [
      'Brand identity & logo systems',
      'Thumbnail design at scale',
      'Posters & key visuals',
      'Stream overlays & panels',
      'Merch & print marks',
      'Design systems & brand books'
    ],
    examples: ['redline-identity', 'playworld-season-launch'],
    layout: 'stack',
    image: '/assets/images/work/work-design.jpg'
  },
  {
    slug: 'server-hosting',
    index: '05',
    name: 'MINECRAFT SERVER HOSTING',
    tagline: 'Hardware that never blinks.',
    description: 'High-performance Minecraft hosting — NVMe storage, DDoS protection, instant deploys and a panel that stays out of your way. Home of PLAYWORLD.',
    long: 'We run the infrastructure we would want as players: high-clock CPUs, NVMe drives, real DDoS protection and backups that actually restore. Deploy a server in minutes, scale when your community does, and get humans when something goes wrong.',
    provide: [
      'Instant server deployment',
      'NVMe storage & high-clock CPUs',
      'DDoS protection',
      'Game panel & full FTP access',
      'Modpack & plugin support',
      'Automated backups'
    ],
    examples: ['playworld-season-launch'],
    layout: 'split',
    image: '/assets/images/work/work-minecraft.jpg'
  },
  {
    slug: 'server-management',
    index: '06',
    name: 'SERVER MANAGEMENT',
    tagline: 'We run your world like a product.',
    description: 'Setup, plugins, security, updates, staff systems and events — full management for Minecraft communities that want to grow seriously.',
    long: 'A server is a product: it needs roadmap, security, economy balance, staff training and events that bring players back. Our engineers and community managers run all of it, so owners can play again. We manage PLAYWORLD — we can manage yours.',
    provide: [
      'Full server setup & configuration',
      'Plugin development & tuning',
      'Security, permissions & anti-grief',
      'Staff systems & training',
      'Season planning & events',
      '24/7 monitoring & updates'
    ],
    examples: ['playworld-season-launch'],
    layout: 'split-rev',
    image: '/assets/images/work/work-minecraft.jpg'
  }
]

export const getService = (slug) => services.find((s) => s.slug === slug)

export const relatedServices = (service, count = 3) =>
  services.filter((s) => s.slug !== service.slug).slice(0, count)
